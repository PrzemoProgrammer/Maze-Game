// let score = 0;
// let bestScore = Number(localStorage.getItem("bestScore")) || 0;

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  preload() {
    this.load.setPath("./src/assets");
    this.load.image("background", "background.png");
    this.load.image("character", "character.png");
    this.load.image("battery", "battery.png");
    this.load.image("spider1_1", "spider1_1.png");
    this.load.image("spider1_2", "spider1_2.png");
    this.load.image("spider2_1", "spider2_1.png");
    this.load.image("spider2_2", "spider2_2.png");
    this.load.image("bones", "bones.png");
    this.load.image("rocks1", "rocks1.png");
    this.load.image("rocks2", "rocks2.png");
    this.load.image("rocks3", "rocks3.png");
    this.load.image("energyBar", "energyBar.png");

    this.load.json("colliders", "maze_world.json");
  }

  create() {
    this.anims.create({
      key: "spider_1_walk",
      frames: [
        { key: "spider1_1", frame: null },
        { key: "spider1_2", frame: null },
      ],
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "spider_2_walk",
      frames: [
        { key: "spider2_1", frame: null },
        { key: "spider2_2", frame: null },
      ],
      frameRate: 5,
      repeat: -1,
    });

    this.addBackground();

    this.gw = this.background.width;
    this.gh = this.background.height;
    this.scene.launch("HudScene");

    this.hudScene = this.scene.get("HudScene");

    this.spiders = [
      {
        x: 1268,
        y: 1348,
        sprite: "spider1_1",
        anim: "spider_1_walk",
        paths: spiderPaths3,
      },
      {
        x: 2730,
        y: 670,
        sprite: "spider1_1",
        anim: "spider_1_walk",
        paths: spiderPaths2,
      },
      {
        x: 3750,
        y: 2695,
        sprite: "spider2_1",
        anim: "spider_2_walk",
        paths: spiderPaths1,
      },
      {
        x: 1660,
        y: 2135,
        sprite: "spider2_1",
        anim: "spider_2_walk",
        paths: spiderPaths4,
      },
    ];

    this.addBattery();
    this.addBones();
    this.addRocks();
    this.enableGameLight();

    const wallCategory = 1;

    const cat1 = this.matter.world.nextCategory();
    const cat2 = this.matter.world.nextCategory();

    this.spiders.forEach((spider) => {
      const enemy = new Enemy(
        this,
        spider.x,
        spider.y,
        spider.sprite,
        spider.paths,
        spider.anim
      );
      enemy.setPipeline("Light2D").setSensor(true);
      enemy.setCollisionCategory(cat1);
      enemy.startMove();
    });

    this.battery.setCollisionCategory(cat2);
    this.rocks1.setCollisionCategory(cat2);

    this.player = new Entity(this, this.gw / 2, this.gh / 2, "character");

    this.hudScene.events.on("create", () => {
      this.player.healthBar = this.hudScene.healthBar;
    });

    this.addColliders();

    this.player.setCollidesWith([cat1, cat2]);

    this.cameras.main.setZoom(1);
    this.matter.world.setBounds(0, 0, this.gw, this.gh);

    this.cameras.main.setBounds(0, 0, this.gw, this.gh);

    this.cameras.main.startFollow(this.player);

    this.player.characterBody.setOnCollide((pair) => {
      if (pair.bodyA.type === "enemy") {
        if (this.player.isImmortal) return;

        this.player.setCollidesWith([wallCategory, cat2]);

        this.player.getHurt(() => {
          this.player.setCollidesWith([wallCategory, cat1, cat2]);
        });

        if (this.player.isDead()) {
          console.log("You lost");
        }
      }
      if (pair.bodyA.type === "battery") {
        if (this.player.healthBar.isFull()) return;
        this.hudScene.healthBar.energyUP();

        // this.lights.lights[0].intensity = 100
        // this.lights.lights[0].radius = 800
        // console.log(this.lights);
      }
    });

    this.handleInputs = new HandleInputs(this);
  }

  update() {
    this.player.setAngularVelocity(0);
    this.handleInputs.handleMovement();
    this.lightFollowPlayer();
  }

  addColliders() {
    var Body = Phaser.Physics.Matter.Matter.Body;
    var Composite = Phaser.Physics.Matter.Matter.Composite;
    var Parser = Phaser.Physics.Matter.PhysicsEditorParser;
    var shapes = this.cache.json.get("colliders")["background"];
    var composite = Composite.create();

    for (var i = 0; i < shapes.fixtures.length; i++) {
      var body = Body.create({ isStatic: true });

      Body.setParts(body, Parser.parseVertices(shapes.fixtures[i].vertices));

      Composite.addBody(composite, body);
    }

    this.dupa = this.matter.world.add(composite);
    console.log(this.dupa);
  }

  addBackground() {
    this.background = this.add.sprite(0, 0, "background").setOrigin(0, 0);
    //   .setPipeline("Light2D")
    //  .setAlpha(0.5);
  }

  lightFollowPlayer() {
    this.light.x = this.player.x;
    this.light.y = this.player.y;
  }

  addBattery() {
    this.battery = this.matter.add
      .sprite(700, 500, "battery", null, { isStatic: true })
      .setPipeline("Light2D");
    this.battery.body.type = "battery";
  }

  enableGameLight() {
    this.lights.enable();
    this.lights.setAmbientColor(0x555555);
    this.light = this.lights.addLight(400, 300, 5000).setIntensity(20);
  }

  addBones() {
    this.bones = this.matter.add
      .sprite(900, 500, "bones", null, { isStatic: true })
      .setPipeline("Light2D");
  }

  addRocks() {
    this.rocks1 = this.matter.add
      .sprite(900, 700, "rocks1", null, { isStatic: true })
      .setPipeline("Light2D");

    this.rocks2 = this.matter.add
      .sprite(900, 900, "rocks2", null, { isStatic: true })
      .setPipeline("Light2D");

    this.rocks3 = this.matter.add
      .sprite(900, 1100, "rocks3", null, { isStatic: true })
      .setPipeline("Light2D");
  }
}

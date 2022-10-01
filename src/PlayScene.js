let score = 0;
let bestScore = Number(localStorage.getItem("bestScore")) || 0;

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

    this.load.json("colliders", "maze_world.json");
    console.log("sd");
  }

  create() {
    this.anims.create({
      key: "spider_1_walk",
      frames: ["spider1_1", "spider1_2"],
      frameRate: 12,
    });
    this.anims.create({
      key: "spider_2_walk",
      frames: ["spider2_1", "spider2_2"],
      frameRate: 12,
    });

    this.addBackground();

    this.gw = this.background.width;
    this.gh = this.background.height;

    this.spiders = [
      {
        x: 1224,
        y: 1352,
        sprite: "spider1_1",
        paths: spidersPaths1,
      },
      {
        x: 2180,
        y: 870,
        sprite: "spider1_1",
      },
      {
        x: 3592,
        y: 2700,
        sprite: "spider2_1",
      },
      {
        x: 1610,
        y: 2150,
        sprite: "spider2_1",
      },
    ];

    this.addBattery();
    this.addBones();
    this.addRocks();
    this.enableGameLight();

    // this.spider1 = new Enemy(this, 700, 600, "spider1_1"); //.play("spider_1_walk");
    // this.spider2 = ; //.play("spider_2_walk");

    // this.spiders.forEach((spider) => {
    //   new Enemy(this, spider.x, spider.y, spider.sprite, spider.paths);
    // });

    this.spider = new Enemy(this, 3750, 2695, "spider1_1", spidersPaths1);
    this.spider.startMove();
    const cat1 = this.matter.world.nextCategory();
    const cat2 = this.matter.world.nextCategory();

    this.spider.setCollisionCategory(cat1);

    this.player = new Entity(this, this.gw / 2, this.gh / 2, "character");
    this.spider.setCollisionCategory(cat2);
    this.spider.setCollidesWith([cat2]);

    this.cameras.main.setZoom(0.4);
    this.matter.world.setBounds(0, 0, this.gw, this.gh);

    this.cameras.main.setBounds(0, 0, this.gw, this.gh);

    this.cameras.main.startFollow(this.player);

    this.player.characterBody.setOnCollide((pair) => {
      if (pair.bodyA.type === "enemy") {
        console.log("hurt");
      }
      if (pair.bodyA.type === "battery") {
        // this.lights.lights[0].intensity = 100
        // this.lights.lights[0].radius = 800
        // console.log(this.lights);
      }
    });

    this.handleInputs = new HandleInputs(this);
    this.addColliders();
  }

  update() {
    this.player.setAngularVelocity(0);
    this.handleInputs.handleMovement();
    this.gameLightMove();
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

    this.matter.world.add(composite);
  }

  addBackground() {
    this.background = this.add.sprite(0, 0, "background").setOrigin(0, 0);
    //   .setPipeline("Light2D")
    //  .setAlpha(0.5);
  }

  gameLightMove() {
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

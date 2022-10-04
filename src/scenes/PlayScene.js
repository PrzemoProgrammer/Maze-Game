// let score = 0;
// let bestScore = Number(localStorage.getItem("bestScore")) || 0;

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
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


    this.addGameWinLine()

    this.enableGameLight();

    const wallCategory = 1;

    const cat1 = this.matter.world.nextCategory();

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

    gameObjects.forEach((gameObj) => {
      const obj = this.matter.add.sprite(gameObj.x, gameObj.y, gameObj.sprite);

      if (gameObj.sprite === BATTERY) {
        obj.setSensor(true);
        obj.body.type = "battery";
      } else {
        //obj.setSize(150, 150);
        const bodyConfig = {
          type: "rectangle",
          width: obj.displayWidth * 1.25,
          height: obj.displayHeight * 1.45,
        };

        const bodyOptions = {
          render: { sprite: { xOffset: 0, yOffset: 0 } },
        };

        obj.setBody(bodyConfig, bodyOptions);
      }

      obj
        .setStatic(true)
        .setCollisionCategory(wallCategory)
        .setPipeline("Light2D");
    });

    this.player = new Player(this, 260, 2040, "character");

    this.hudScene.events.on("create", () => {
      this.player.healthBar = this.hudScene.healthBar;
    });

    this.addColliders();

    this.player.setCollidesWith([cat1]);

    this.cameras.main.setZoom(0.3);
    this.matter.world.setBounds(0, 0, this.gw, this.gh);

    this.cameras.main.startFollow(this.player);

    this.player.characterBody.setOnCollide((pair) => {
      console.log(pair)
      if (pair.bodyA.type === "enemy") {
        if (this.player.isImmortal) return;

        this.player.setCollidesWith([wallCategory]);

        this.player.getHurt(() => {
          this.player.setCollidesWith([wallCategory, cat1]);
        });

        if (this.player.isDead()) {
          console.log("You lost");
        }
      }

      if (pair.bodyA.type === "battery") {
        if (this.player.healthBar.isFull() || pair.bodyA.isUsed) return;
        pair.bodyA.isUsed = true;
        pair.bodyA.gameObject.destroy();
        this.player.healthBar.energyUP();

        // this.lights.lights[0].intensity = 100
        // this.lights.lights[0].radius = 800
        // console.log(this.lights);
      }

      if (pair.bodyA.type === "finishLine") {
        console.log("You Win")
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

    this.matter.world.add(composite);
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

  enableGameLight() {
    this.lights.enable();
    this.lights.setAmbientColor(0x555555);
    this.light = this.lights.addLight(400, 300, 5000).setIntensity(20);
  }

  addGameWinLine(){
    this.winLine = this.matter.add.rectangle(
      this.gw - 33,
      this.gh - 2710,
      100,
      100,
      { isStatic: true }
    );
    this.winLine.type = "finishLine";
  }
}

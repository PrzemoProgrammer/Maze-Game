class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const charID =
      new URLSearchParams(window.location.search).get("charid") || "1";

    this.createSpiderAnimations();
    this.addBackground();

    this.gw = this.background.width;
    this.gh = this.background.height;

    this.scene.launch("HudScene");
    this.hudScene = this.scene.get("HudScene");

    this.spiders = spiders;

    this.addMeta();
    this.enableGameLight();

    this.wallCategory = 1;
    this.baseCategory = this.matter.world.nextCategory();

    this.createSpidersFromConfig();

    this.createGameObjects();

    for (let i = 1; i <= 4; i++) {
      const frames = [];
      for (let j = 1; j <= 6; j++) {
        frames.push({ key: `Character ${i}${j}`, frame: null });
      }

      const anim = this.anims.create({
        key: `Character ${i} walk`,
        frames,
        frameRate: 20,
      });
    }

    this.player = new Player(this, 260, 2040, `Character ${charID}1`);

    this.player.setCollidesWith([this.wallCategory, this.baseCategory]);

    // this.hudScene.events.on("create", () => {
    //   this.player.healthBar = this.hudScene.healthBar;
    // });

    this.addColliders();

    // this.cameras.main.setZoom(0.3);
    this.matter.world.setBounds(0, 0, this.gw, this.gh);
    this.cameras.main.setBounds(0, 0, this.gw, this.gh);
    this.cameras.main.startFollow(this.player);

    this.player.characterBody.setOnCollide((pair) => {
      this.handlePlayerCollision(pair);
    });

    this.handleInputs = new HandleInputs(this);

    this.isMobile =
      this.game.device.os.android ||
      this.game.device.os.iPhone ||
      this.game.device.os.iPad;

    if (this.isMobile) {
      new JoyStickController(this);
    }
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

  createSpidersFromConfig() {
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
      enemy.setCollisionCategory(this.baseCategory);
      enemy.startMove();
    });
  }

  createGameObjects() {
    gameObjects.forEach((gameObj) => {
      const obj = this.matter.add.sprite(gameObj.x, gameObj.y, gameObj.sprite);

      if (gameObj.sprite === BATTERY) {
        obj.setSensor(true);
        obj.body.type = "battery";
      } else {
        const bodyConfig = {
          type: "rectangle",
          width: obj.displayWidth * 1.25,
          height: obj.displayHeight * 1.45,
        };
        obj.setBody(bodyConfig);
      }

      obj
        .setStatic(true)
        .setCollisionCategory(this.wallCategory)
        .setPipeline("Light2D");
    });
  }

  handlePlayerCollision(pair) {
    if (pair.bodyA.type === "enemy") {
      if (this.player.isImmortal) return;

      this.player.setCollidesWith([this.wallCategory]);

      this.hudScene.timer.subtractTime(5);
      this.player.getHurt(() => {
        this.player.setCollidesWith([this.wallCategory, this.baseCategory]);
      });

      // if (this.player.isDead()) {
      //   console.log("You lost");
      //   // AJAX REQUEST HERE
      //   // const RESULT = this.scene.get("HudScene").timer.result

      //   this.scene.stop("HudScene");
      //   this.scene.start("EndScene");
      // }
    }

    if (pair.bodyA.type === "battery") {
      if (pair.bodyA.isUsed) return;
      pair.bodyA.isUsed = true;
      pair.bodyA.gameObject.destroy();
      this.hudScene.timer.addTime(5);
      // this.lights.lights[0].intensity = 100
      // this.lights.lights[0].radius = 800
    }

    if (pair.bodyA.type === "finishLine") {
      console.log("You won");
      // AJAX REQUEST HERE
      // this.score

      this.scene.stop("HudScene");
      this.scene.start("EndScene");
    }
  }
  createSpiderAnimations() {
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
  }

  addBackground() {
    this.background = this.add
      .sprite(0, 0, "background")
      .setOrigin(0, 0)
      .setPipeline("Light2D")
      .setAlpha(0.5);
  }

  lightFollowPlayer() {
    this.light.x = this.player.x;
    this.light.y = this.player.y;
  }

  enableGameLight() {
    this.lights.enable();
    this.lights.setAmbientColor(0x555555);
    this.light = this.lights.addLight(400, 300, 190).setIntensity(3);
  }

  addMeta() {
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

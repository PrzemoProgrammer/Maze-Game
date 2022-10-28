class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  preload() {
    this.load.plugin(
      "rexvirtualjoystickplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",
      true
    );
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
    this.load.image("whiteBackground", "whiteBackground.png");
    this.load.image("menuBackground", "menuBackground.png");

    // this.load.image("energyBar1", "energyBar1.png");
    // this.load.image("energyBar2", "energyBar2.png");
    // this.load.image("energyBar3", "energyBar3.png");
    this.load.image("life", "life.png");

    //this.load.image("menuSceneBackground", "menuSceneBackground.png");
    this.load.image("jungleText", "jungleText.png");
    this.load.image("button", "button.png");

    this.load.spritesheet("Character 1", "Character 1.png", {
      frameWidth: 1620 / 6,
      frameHeight: 330,
    });

    this.load.spritesheet("Character 2", "Character 2.png", {
      frameWidth: 1620 / 6,
      frameHeight: 350,
    });

    this.load.spritesheet("Character 3", "Character 3.png", {
      frameWidth: 1620 / 6,
      frameHeight: 330,
    });

    this.load.spritesheet("Character 4", "Character 4.png", {
      frameWidth: 1620 / 6,
      frameHeight: 330,
    });

    this.load.json("colliders", "maze_world.json");
  }

  create() {
    const charID =
      new URLSearchParams(window.location.search).get("charid") || "1";

    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    // this.selectedSkin = `Character 2`;
    this.selectedSkin = `Character ${charID}`;

    this.addAnims();

    this.addBackground();
    this.addText();
    this.addPlayButton();
    this.addLogo();
    this.addCharacter();
  }

  update() {
    this.moveBackground();
  }

  addLogo() {
    this.add
      .image(this.gw / 2, 40, "jungleText")
      .setOrigin(0.5, 0)
      .setScale(0.14);
  }

  addText() {
    this.addTextBackground();
    this.add
      .text(
        this.gw / 2,
        this.gh / 2,

        "USE YOUR ARROW KEYS TO NAVIGATE YOUR WAY OUT OF THE DENSE" +
          "TRIANGLE OF THE COMPLEXITY JUNGLE. " +
          "AVOID THOSE PESKY BUGS BUT KEEP AN" +
          "EYE OUT FOR SPOT POWERUPS" +
          "IT'S A RACE AGAINST THE CLOCK",
        { align: "center", font: "30px Arial", color: "black" }
      )
      .setOrigin(0.5)
      .setWordWrapWidth(this.gw * 0.6);
  }

  addPlayButton() {
    const playButton = this.add
      .image(this.gw / 2, this.gh - 160, "button")
      .setInteractive()
      .setOrigin(0.5, 1)
      .setScale(1);

    playButton.on("pointerdown", () => {
      this.scene.start("PlayScene");
    });
  }

  addBackground() {
    this.background = this.add
      .tileSprite(0, 0, 1509, 849, "menuBackground")
      .setOrigin(0, 0)
      .setDisplaySize(this.gw, this.gh);

    // this.background = this.add
    // .tileSprite(0, 0, 1920, 1080, "menuBackground")
    // .setOrigin(0, 0);
  }

  moveBackground() {
    this.background.tilePositionX += 5;
  }

  addTextBackground() {
    this.textBackground = this.add
      .sprite(this.gw / 2, this.gh / 2, "whiteBackground")
      .setScale(0.6);
  }

  addCharacter() {
    this.character = this.add
      .sprite(50, this.gh - 370, this.selectedSkin)
      // .sprite(50, this.gh - 500, `Character ${charID}1`)
      .setOrigin(0, 0);
    this.character.play(this.character.texture.key + " walk");
  }

  addAnims() {
    this.anims.create({
      key: "Character 1 walk",
      frames: "Character 1",
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "Character 2 walk",
      frames: "Character 2",
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "Character 3 walk",
      frames: "Character 3",
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "Character 4 walk",
      frames: "Character 4",
      frameRate: 10,
      repeat: -1,
    });
  }
}

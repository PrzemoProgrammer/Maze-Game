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
    this.load.image("energyBar", "energyBar.png");
    //this.load.image("menuSceneBackground", "menuSceneBackground.png");
    this.load.image("jungleText", "jungleText.png");
    this.load.image("button", "button.png");

    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 6; j++) {
        this.load.image(
          `Character ${i}${j}`,
          `Walking Character ${i}/0${j}.png`
        );
      }
    }

    this.load.json("colliders", "maze_world.json");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;
    this.cameras.main.setBackgroundColor(0xffffff);

    this.add
      .image(this.gw / 2, 40, "jungleText")
      .setOrigin(0.5, 0)
      .setScale(0.1);

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
      .setWordWrapWidth(this.gw * 0.8);

    const playButton = this.add
      .image(this.gw / 2, this.gh - 40, "button")
      .setInteractive()
      .setOrigin(0.5, 1);

    playButton.on("pointerdown", () => {
      this.scene.start("PlayScene");
    });
  }

  update() {}
}

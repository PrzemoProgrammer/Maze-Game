class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
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
    this.load.image("menuSceneBackground", "menuSceneBackground.png");
    this.load.image("menuSceneText", "menuSceneText.png");

    this.load.json("colliders", "maze_world.json");
  }

  create() {
    this.background = this.add
      .sprite(0, 0, "menuSceneBackground")
      .setOrigin(0, 0)
      .setDisplaySize(this.game.config.width, this.game.config.height);
    this.background.setInteractive();

    this.input.on("pointerdown", () => {
      this.scene.start("PlayScene");
    });
  }

  update() {}
}

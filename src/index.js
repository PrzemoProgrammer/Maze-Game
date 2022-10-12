const config = {
  type: Phaser.AUTO,
  physics: {
    default: "matter",
    matter: {
      // debug: true,
      gravity: { y: 0 },
    },
  },

  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 720,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  parent: "GameCanvas",
  scene: [MenuScene, PlayScene, HudScene, EndScene],
};

const game = new Phaser.Game(config);

const config = {
  type: Phaser.AUTO,
  physics: {
    default: "matter",
    matter: {
      debug: false,
      gravity: { y: 0 },
    },
  },

  scale: {
    mode: Phaser.Scale.FIT,
    width: 1920,
    height: 1080,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MenuScene,PlayScene, HudScene ],
};

const game = new Phaser.Game(config);

const config = {
    type: Phaser.AUTO,
    physics: {
      default: "matter",
      matter: {
        debug: true,
        gravity: { y: 0 },
      },
    },
  
    scale: {
      mode: Phaser.Scale.FIT,
      width: 1280,
      height: 720,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [PlayScene],
  };
  
  const game = new Phaser.Game(config);
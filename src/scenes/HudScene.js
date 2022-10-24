class HudScene extends Phaser.Scene {
  constructor() {
    super("HudScene");
  }

  create() {
    this.playScene = this.scene.get("PlayScene");
    // this.healthBar = new HealthBar(this, 40, 40, "energyBar1");
    this.score = null;
    this.timer = new Timer(this, 40, 40);
  }

  update() {
    this.score = this.getScore();
    console.log(this.score);

    this.timer.updateTimer(() => {
      // AJAX REQUEST HERE
      // this.score
      this.scene.stop();
      this.playScene.scene.stop();
      this.scene.start("EndScene");
    });
  }

  subtractPoints(points) {
    this.score -= points;
    this.updatePoints();
  }

  getScore() {
    let score = this.score;
    switch (this.timer.seconds) {
      case 50:
        score = 50;
        break;
      case 45:
        score = 45;
        break;
      case 40:
        score = 40;
        break;
      case 35:
        score = 35;
        break;
      case 30:
        score = 30;
        break;
      case 25:
        score = 25;
        break;
      case 20:
        score = 20;
        break;
      case 15:
        score = 15;
        break;
      case 10:
        score = 10;
        break;
      case 5:
        score = 5;
        break;
      case 0:
        score = 0;
        break;
    }
    return score;
  }
}

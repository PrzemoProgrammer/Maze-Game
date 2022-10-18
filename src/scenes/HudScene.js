class HudScene extends Phaser.Scene {
  constructor() {
    super("HudScene");
  }

  create() {
    this.healthBar = new HealthBar(this, 40, 40, "energyBar1");
    this.timer = new Timer(this, 40, 110);
  }

  update() {
    this.timer.updateTimer();
  }
}

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.speed = 5;

    this.isImmortal = false;
    this.healthBar = {};

    scene.add.existing(this);

    const bodyConfig = {
      shape: {
        type: "rectangle",
        width: this.displayWidth / 2,
        height: 110,
      },
      render: { sprite: { xOffset: 0, yOffset: 0.2 } },
    };

    this.characterBody = this.scene.matter.add.gameObject(this, bodyConfig);
    this.setBounce(0, 0);
    this.setFriction(0);
    this.setFrictionStatic(0);
    this.setScale(0.4);
  }

  onMove() {
    this.play(this.sprite + " walk", true);
  }

  moveLeft() {
    this.setFlipX(true);
    this.setVelocityX(-this.speed);
    this.onMove();
    // this.character.play(this.state.walkRight, true)
  }

  moveRight() {
    this.setFlipX(false);
    // this.character.flipX = false
    this.setVelocityX(this.speed);
    this.onMove();
    // this.character.play(this.state.walkRight, true);
  }

  moveDown() {
    this.setVelocityY(-this.speed);
    this.onMove();
    // this.character.play(this.state.walkRight, true);
  }

  moveUp() {
    this.setVelocityY(this.speed);
    this.onMove();
    // this.character.play(this.state.walkRight, true);
  }

  setIdle() {
    this.stop();
    this.setVelocity(0);
  }

  setRedColor() {
    this.setTint(0xff0000);
  }

  flick(cb) {
    this.scene.tweens.add({
      targets: this,
      alpha: 0.3,
      duration: 400,
      yoyo: true,
      repeat: 2,
      onComplete: () => {
        this.isImmortal = false;
        this.clearTint();
        cb();
      },
    });
  }

  getHurt(cb) {
    this.isImmortal = true;
    // this.healthBar.getDamage();
    this.setRedColor();
    this.flick(cb);
  }

  isDead() {
    return this.healthBar.isDead();
  }
}

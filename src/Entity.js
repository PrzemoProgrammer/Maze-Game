class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    scene.add.existing(this);
    this.characterBody = this.scene.matter.add.gameObject(this);
    this.setBounce(0, 0);
    this.friction = 0;
    this.frictionStatic = 0;
    this.setScale(0.4);
    this.characterBody.setSize(this.displayWidth / 2, this.displayHeight / 2);
  }

  moveLeft() {
    // this.character.flipX = true
    this.setVelocityX(-10);
    // this.character.play(this.state.walkRight, true)
  }

  moveRight() {
    // this.character.flipX = false
    this.setVelocityX(10);
    // this.character.play(this.state.walkRight, true);
  }

  moveDown() {
    this.setVelocityY(-10);
    // this.character.play(this.state.walkRight, true);
  }

  moveUp() {
    this.setVelocityY(10);
    // this.character.play(this.state.walkRight, true);
  }

  setIdle() {
    // this.character.play(this.state.idle, true);
    this.setVelocity(0);
  }
}

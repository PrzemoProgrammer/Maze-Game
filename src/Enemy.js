class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite, paths) {
    super(scene, x, y, sprite);

    this.paths = paths;

    this.scene.add.existing(this);
    this.setPipeline("Light2D");
    this.characterBody = this.scene.matter.add.gameObject(this);
    this.body.type = "enemy";
    this.speed = 1;
  }

  startMove() {
    const pathPoints = this.paths[Phaser.Math.Between(0, 2)];

    const path = [...pathPoints];
    let isReverse = false;

    if (pathPoints.at(-1) === "reverse") {
      path.pop();
      isReverse = true;
    }

    this.followPath(path, isReverse);
  }

  followPath(pathPoints, isReverse) {
    if (pathPoints.length < 2) {
      this.startMove();
      return;
    }

    const absX = Math.abs(pathPoints[0] - this.x);
    const absY = Math.abs(pathPoints[1] - this.y);
    const vectorLength = new Phaser.Math.Vector2(absX, absY).length();

    const pathDuration = vectorLength / 0.2;

    this.scene.tweens.add({
      targets: this,
      val: 1,
      duration: pathDuration,
      callbackScope: this,
      x: pathPoints[0],
      y: pathPoints[1],
      onComplete: function () {
        pathPoints.splice(0, 2);
        this.followPath(pathPoints);
      },
    });
  }
}

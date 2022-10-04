class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite, paths, WALK_ANIM) {
    super(scene, x, y, sprite);

    this.paths = paths;

    this.scene.add.existing(this);
    this.setPipeline("Light2D");
    this.characterBody = this.scene.matter.add.gameObject(this);
    this.body.type = "enemy";
    this.WALK_ANIM = WALK_ANIM;
    this.speed = 0.3;
  }

  startMove() {
    this.play(this.WALK_ANIM);
    const path = this.paths[Phaser.Math.Between(0, this.paths.length - 1)];

    const pathCopy = [...path];

    let isReverse = false;

    if (pathCopy.at(-1) === "reverse") {
      pathCopy.pop();
      isReverse = true;
    }

    const arrOfPoints = [];

    for (let i = 0; i < path.length - 1; i += 2) {
      const x = pathCopy[i];
      const y = pathCopy[i + 1];
      arrOfPoints.push({ x, y });
    }

    this.followPath(arrOfPoints, isReverse, [...arrOfPoints]);
  }

  followPath(arrOfPoints, isReverse, ARR_OF_POINTS) {
    if (arrOfPoints.length === 0) {
      if (isReverse) {
        this.followPath(ARR_OF_POINTS.reverse(), false);
        return;
      }
      this.startMove();
      return;
    }

    const absX = Math.abs(arrOfPoints[0].x - this.x);
    const absY = Math.abs(arrOfPoints[0].y - this.y);
    const vectorLength = new Phaser.Math.Vector2(absX, absY).length();

    const pathDuration = vectorLength / this.speed;

    const angleBetweenPoints = Phaser.Math.Angle.BetweenPoints(
      this,
      arrOfPoints[0]
    );

    if (angleBetweenPoints > -1.5) {
      this.scene.tweens.add({
        targets: this,
        duration: 200,
        rotation: angleBetweenPoints,
      });
    } else {
      this.rotation = angleBetweenPoints;
    }

    this.scene.tweens.add({
      targets: this,
      val: 1,
      duration: pathDuration,
      callbackScope: this,
      x: arrOfPoints[0].x,
      y: arrOfPoints[0].y,
      onComplete: function () {
        arrOfPoints.shift();
        this.followPath(arrOfPoints, isReverse, ARR_OF_POINTS);
      },
    });
  }
}

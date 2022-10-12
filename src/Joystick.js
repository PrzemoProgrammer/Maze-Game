class JoyStickController {
  joyStick;
  enable = true;
  constructor(ctx) {
    this.context = ctx;
    this.scene = ctx;
    this.setUpJoyStick();
  }

  setUpJoyStick() {
    this.joyStick = this.context.plugins
      .get("rexvirtualjoystickplugin")
      .add(this, {
        x: 120,
        y: 620,
        radius: 30,
        base: this.context.add.circle(0, 0, 50, 793641),
        thumb: this.context.add.circle(0, 0, 30, 16765336),
        dir: "8dir",
      })
      .on("update", this.dumpJoyStickState, this);
  }

  setDepth(depth) {
    this.joyStick.base.setDepth(depth);
    this.joyStick.thumb.setDepth(depth + 10);
  }

  setVisible(value) {
    this.joyStick.setVisible(value);
  }

  dumpJoyStickState() {
    var cursorKeys = this.joyStick.createCursorKeys();
    var key = "";
    for (var name in cursorKeys) {
      if (cursorKeys[name].isDown) {
        key += `${name} `;
      }
    }

    if (!this.enable) {
      return;
    }

    if (key.includes("up")) {
      this.scene.player.moveDown();
    } else if (key.includes("down")) {
      this.scene.player.moveUp();
    }

    if (key.includes("left")) {
      this.scene.player.moveLeft();
    } else if (key.includes("right")) {
      this.scene.player.moveRight();
    }

    if (key === "") {
      this.scene.player.setIdle();
    }
  }
}

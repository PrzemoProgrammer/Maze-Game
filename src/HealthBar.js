class HealthBar {
    constructor(scene, x, y, sprite) {
      this.scene = scene;
      this.x = x
      this.y = y
      this.sprite = sprite;
      
      this.text = this.scene.add.text(this.x, this.y, "ENERGY", { 
        fontFamily: "Georgia",
        fontSize: "70px",
        color: "#FFFFFF",
        stroke: "#000000",
        strokeThickness: 5,
        shadow: { blur: 0, stroke: false, fill: false }, 
    })

      this.energyBar = this.scene.add.sprite(this.text.x + this.text.displayWidth + 30, this.text.y + this.text.displayHeight/2, this.sprite).setOrigin(0, 0.5)
      this.energyMask = this.scene.add.sprite(this.energyBar.x, this.energyBar.y, this.sprite).setOrigin(0, 0.5).setVisible(false)
      this.energyBar.mask = new Phaser.Display.Masks.BitmapMask(this.scene, this.energyMask);
    }

    getDamage(){
        this.energyMask.x -= this.energyBar.displayWidth/3
    }

    energyUP(){
        this.energyMask.x += this.energyBar.displayWidth/3
    }

    isDead(){
        return this.energyMask.x <= this.energyBar.x - this.energyBar.displayWidth
    }

    isFull(){
        return this.energyMask.x = this.energyBar.x
    }


  }
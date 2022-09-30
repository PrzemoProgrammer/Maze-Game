class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite)
      this.scene = scene;
      this.x = x
      this.y = y
      this.sprite = sprite;

      scene.add.existing(this);
      this.setPipeline('Light2D')
      this.characterBody = this.scene.matter.add.gameObject(this);
      this.body.type = 'enemy'; 
    }

    moveLeft(){
        // this.character.flipX = true
        this.setVelocityX(-10)
        // this.character.play(this.state.walkRight, true)
    }

    moveRight(){
        // this.character.flipX = false
        this.setVelocityX(10)
        // this.character.play(this.state.walkRight, true);
    }

    moveDown(){
        this.setVelocityY(-10)
        // this.character.play(this.state.walkRight, true);
    }

    moveUp(){
        this.setVelocityY(10)
        // this.character.play(this.state.walkRight, true);
    }

    setIdle(){
        // this.character.play(this.state.idle, true);
        this.setVelocity(0)
    }

  }
  
  

  
  
  
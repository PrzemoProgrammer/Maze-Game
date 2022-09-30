let score = 0;
let bestScore = Number(localStorage.getItem("bestScore")) || 0;

class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  preload() {
    this.load.image("background", "./assets/background.png");
    this.load.image("character", "./assets/character.png");
    this.load.image("battery", "./assets/battery.png");
    this.load.image("spider1", "./assets/spider1.png");
    this.load.image("spider2", "./assets/spider2.png");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

  this.addBackground()
   this.addBattery()
   this. enableLight()

    this.spider1 = new Enemy(this, 700, 600, "spider1")
    this.spider2 = new Enemy(this, 700, 600, "spider2")
   this.player = new Entity(this, 300, 300, "character")

   this.matter.world.setBounds(0, 0, this.background.width, this.background.height);
    this.cameras.main.setBounds(0, 0, this.background.width ,this.background.height);
    this.cameras.main.startFollow(this.player);



  this.player.characterBody.setOnCollide(pair =>{
    // console.log(pair);
    if(pair.bodyA.type === "enemy") {
      console.log('hurt')
    }
    if(pair.bodyA.type === "battery") {
      // this.lights.lights[0].intensity = 100
      // this.lights.lights[0].radius = 800
      console.log(this.lights)
    }
  })


   this.handleInputs = new HandleInputs(this)
  }

  update(){
    this.player.setAngularVelocity(0)
    this.handleInputs.handleMovement()
    this.lightMovement()
  }

  addBackground(){
    this.background = this.add
    .sprite(0, 0, "background")
    .setOrigin(0, 0).setPipeline('Light2D').setAlpha(0.5);
  }

  lightMovement(){
    this.light.x = this.player.x;
    this.light.y = this.player.y;
  }

  addBattery(){
    this.battery = this.matter.add
    .sprite(700, 500, "battery", null,{ isStatic: true })
    .setPipeline('Light2D')
    this.battery.body.type = 'battery'
  }

  enableLight(){
    this.lights.enable();
    this.lights.setAmbientColor(0x555555);
    this.light = this.lights.addLight(400, 300, 200).setIntensity(10);
  }





}

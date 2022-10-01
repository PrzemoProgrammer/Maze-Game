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
    this.load.image("bones", "./assets/bones.png");
    this.load.image("rocks1", "./assets/rocks1.png");
    this.load.image("rocks2", "./assets/rocks2.png");
    this.load.image("rocks3", "./assets/rocks3.png");

    this.load.spritesheet("spider1Sprite", "spider1Sprite.png", {
      frameWidth: 186 / 2,
      frameHeight: 99,
    });

    this.load.spritesheet("spider2Sprite", "spider2Sprite.png", {
      frameWidth: 176/2,
      frameHeight: 109,
    });

  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

  this.addBackground()
   this.addBattery()
   this.addBones()
   this.addRocks()
   this.enableGameLight()

    this.spider1 = new Enemy(this, 700, 600, "spider1")
    this.spider2 = new Enemy(this, 700, 600, "spider2")
   this.player = new Entity(this, 300, 300, "character")

   this.matter.world.setBounds(0, 0, this.background.width, this.background.height);
    this.cameras.main.setBounds(0, 0, this.background.width ,this.background.height);
    this.cameras.main.startFollow(this.player);



  this.player.characterBody.setOnCollide(pair =>{
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
    this.gameLightMove()
  }

  addBackground(){
    this.background = this.add
    .sprite(0, 0, "background")
    .setOrigin(0, 0).setPipeline('Light2D').setAlpha(0.5);
  }

  gameLightMove(){
    this.light.x = this.player.x;
    this.light.y = this.player.y;
  }

  addBattery(){
    this.battery = this.matter.add
    .sprite(700, 500, "battery", null,{ isStatic: true })
    .setPipeline('Light2D')
    this.battery.body.type = 'battery'
  }

  enableGameLight(){
    this.lights.enable();
    this.lights.setAmbientColor(0x555555);
    this.light = this.lights.addLight(400, 300, 200).setIntensity(10);
  }

  addBones(){
    this.bones = this.matter.add
    .sprite(900, 500, "bones", null,{ isStatic: true })
    .setPipeline('Light2D')
  }

  addRocks(){
    this.rocks1 = this.matter.add
    .sprite(900, 700, "rocks1", null,{ isStatic: true })
    .setPipeline('Light2D')

    this.rocks2 = this.matter.add
    .sprite(900, 900, "rocks2", null,{ isStatic: true })
    .setPipeline('Light2D')

    this.rocks3 = this.matter.add
    .sprite(900, 1100, "rocks3", null,{ isStatic: true })
    .setPipeline('Light2D')
  }





}

function _0x51bb(_0x3bdf53, _0x510ea4) {
  var _0x3c10e4 = _0x3c10();
  return (
    (_0x51bb = function (_0x51bb80, _0x108033) {
      _0x51bb80 = _0x51bb80 - 0x72;
      var _0xca6732 = _0x3c10e4[_0x51bb80];
      return _0xca6732;
    }),
    _0x51bb(_0x3bdf53, _0x510ea4)
  );
}
var _0x557704 = _0x51bb;
(function (_0x397035, _0x1c45f6) {
  var _0x41570a = _0x51bb,
    _0x5680c3 = _0x397035();
  while (!![]) {
    try {
      var _0x16cd2b =
        (parseInt(_0x41570a(0xc5)) / 0x1) * (parseInt(_0x41570a(0xca)) / 0x2) +
        (parseInt(_0x41570a(0xe0)) / 0x3) * (parseInt(_0x41570a(0xc4)) / 0x4) +
        (parseInt(_0x41570a(0xb5)) / 0x5) * (parseInt(_0x41570a(0xde)) / 0x6) +
        (-parseInt(_0x41570a(0xbb)) / 0x7) * (parseInt(_0x41570a(0xb9)) / 0x8) +
        parseInt(_0x41570a(0xd5)) / 0x9 +
        (parseInt(_0x41570a(0xdc)) / 0xa) * (parseInt(_0x41570a(0xb4)) / 0xb) +
        (-parseInt(_0x41570a(0x93)) / 0xc) * (parseInt(_0x41570a(0x7f)) / 0xd);
      if (_0x16cd2b === _0x1c45f6) break;
      else _0x5680c3["push"](_0x5680c3["shift"]());
    } catch (_0x72e68c) {
      _0x5680c3["push"](_0x5680c3["shift"]());
    }
  }
})(_0x3c10, 0xb7672);
function _0x3c10() {
  var _0x3ba74a = [
    "fixtures",
    "subtractTime",
    "search",
    "add",
    "createSpidersFromConfig",
    "PlayScene",
    "addBody",
    "Composite",
    "19129tfBapI",
    "25TYCieN",
    "addLight",
    "log",
    "baseCategory",
    "90256utftoy",
    "setIntensity",
    "336OBeAjL",
    "get",
    "setOnCollide",
    "spider1_1",
    "background",
    "setAmbientColor",
    "isUsed",
    "startFollow",
    "width",
    "4KkclvJ",
    "60514hPkYnA",
    "game",
    "spiders",
    "battery",
    "isImmortal",
    "6frShzS",
    "forEach",
    "sprite",
    "Light2D",
    "location",
    "iPad",
    "light",
    "setBounds",
    "matter",
    "iPhone",
    "setCollisionCategory",
    "11535912BnefQn",
    "json",
    "spider_2_walk",
    "Matter",
    "PhysicsEditorParser",
    "HudScene",
    "lights",
    "3040fMzlvS",
    "length",
    "864456ebVlCi",
    "Physics",
    "448167WsLOBR",
    "create",
    "height",
    "Body",
    "setCollidesWith",
    "addMeta",
    "update",
    "heal",
    "setOrigin",
    "hudScene",
    "getHurt",
    "isMobile",
    "setAngularVelocity",
    "healthBar",
    "createSpiderAnimations",
    "rectangle",
    "finishLine",
    "221bqiLwV",
    "android",
    "timer",
    "bodyA",
    "displayHeight",
    "anims",
    "selectedSkin",
    "parseVertices",
    "setParts",
    "getDamage",
    "vertices",
    "setSensor",
    "handleInputs",
    "winLine",
    "DeadScene",
    "launch",
    "charid",
    "spider1_2",
    "main",
    "enableGameLight",
    "1107516XRtMMP",
    "device",
    "paths",
    "start",
    "displayWidth",
    "spider2_1",
    "setPipeline",
    "world",
    "body",
    "cache",
    "colliders",
    "type",
    "enemy",
    "addBackground",
    "menuScene",
    "MenuScene",
    "createGameObjects",
    "events",
    "EndScene",
    "lightFollowPlayer",
    "player",
    "scene",
    "You\x20won",
    "wallCategory",
    "destroy",
  ];
  _0x3c10 = function () {
    return _0x3ba74a;
  };
  return _0x3c10();
}
class PlayScene extends Phaser["Scene"] {
  constructor() {
    var _0x3ff595 = _0x51bb;
    super(_0x3ff595(0xb1));
  }
  ["create"]() {
    var _0x4d9f95 = _0x51bb;
    const _0x5c3865 =
      new URLSearchParams(window[_0x4d9f95(0xce)][_0x4d9f95(0xae)])["get"](
        _0x4d9f95(0x8f)
      ) || "1";
    this[_0x4d9f95(0x7c)](),
      this[_0x4d9f95(0xa0)](),
      (this["gw"] = this[_0x4d9f95(0xbf)][_0x4d9f95(0xc3)]),
      (this["gh"] = this[_0x4d9f95(0xbf)][_0x4d9f95(0xe2)]),
      this[_0x4d9f95(0xa8)][_0x4d9f95(0x8e)]("HudScene"),
      (this[_0x4d9f95(0x77)] = this["scene"][_0x4d9f95(0xbc)](_0x4d9f95(0xda))),
      (this[_0x4d9f95(0xa1)] = this[_0x4d9f95(0xa8)][_0x4d9f95(0xbc)](
        _0x4d9f95(0xa2)
      )),
      (this[_0x4d9f95(0x85)] = this[_0x4d9f95(0xa1)]["selectedSkin"]),
      (this["spiders"] = spiders),
      this[_0x4d9f95(0x73)](),
      this[_0x4d9f95(0x92)](),
      (this[_0x4d9f95(0xaa)] = 0x1),
      (this[_0x4d9f95(0xb8)] = this["matter"]["world"]["nextCategory"]()),
      this["createSpidersFromConfig"](),
      this[_0x4d9f95(0xa3)](),
      (this[_0x4d9f95(0xa7)] = new Player(
        this,
        0x104,
        0x7f8,
        this[_0x4d9f95(0x85)]
      )),
      this[_0x4d9f95(0xa7)][_0x4d9f95(0x72)]([
        this["wallCategory"],
        this[_0x4d9f95(0xb8)],
      ]),
      this["hudScene"][_0x4d9f95(0xa4)]["on"]("create", () => {
        var _0x5cfb03 = _0x4d9f95;
        this[_0x5cfb03(0xa7)]["healthBar"] = this[_0x5cfb03(0x77)]["healthBar"];
      }),
      this["addColliders"](),
      this["matter"][_0x4d9f95(0x9a)]["setBounds"](
        0x0,
        0x0,
        this["gw"],
        this["gh"]
      ),
      this["cameras"]["main"][_0x4d9f95(0xd1)](
        0x0,
        0x0,
        this["gw"],
        this["gh"]
      ),
      this["cameras"][_0x4d9f95(0x91)][_0x4d9f95(0xc2)](this[_0x4d9f95(0xa7)]),
      this[_0x4d9f95(0xa7)]["characterBody"][_0x4d9f95(0xbd)]((_0x155dce) => {
        this["handlePlayerCollision"](_0x155dce);
      }),
      (this[_0x4d9f95(0x8b)] = new HandleInputs(this)),
      (this[_0x4d9f95(0x79)] =
        this[_0x4d9f95(0xc6)][_0x4d9f95(0x94)]["os"][_0x4d9f95(0x80)] ||
        this[_0x4d9f95(0xc6)][_0x4d9f95(0x94)]["os"][_0x4d9f95(0xd3)] ||
        this[_0x4d9f95(0xc6)]["device"]["os"][_0x4d9f95(0xcf)]),
      this[_0x4d9f95(0x79)] && new JoyStickController(this);
  }
  [_0x557704(0x74)]() {
    var _0x73c57 = _0x557704;
    this[_0x73c57(0xa7)][_0x73c57(0x7a)](0x0),
      this[_0x73c57(0x8b)]["handleMovement"](),
      this["lightFollowPlayer"]();
  }
  ["addColliders"]() {
    var _0x5ef96f = _0x557704,
      _0x56590d =
        Phaser[_0x5ef96f(0xdf)]["Matter"][_0x5ef96f(0xd8)][_0x5ef96f(0xe3)],
      _0x5940ba =
        Phaser[_0x5ef96f(0xdf)][_0x5ef96f(0xd8)][_0x5ef96f(0xd8)][
          _0x5ef96f(0xb3)
        ],
      _0x7c58bf = Phaser["Physics"]["Matter"][_0x5ef96f(0xd9)],
      _0x224b37 = this[_0x5ef96f(0x9c)][_0x5ef96f(0xd6)][_0x5ef96f(0xbc)](
        _0x5ef96f(0x9d)
      )[_0x5ef96f(0xbf)],
      _0x23fdef = _0x5940ba["create"]();
    for (
      var _0x37eea9 = 0x0;
      _0x37eea9 < _0x224b37[_0x5ef96f(0xac)][_0x5ef96f(0xdd)];
      _0x37eea9++
    ) {
      var _0x329f40 = _0x56590d["create"]({ isStatic: !![] });
      _0x56590d[_0x5ef96f(0x87)](
        _0x329f40,
        _0x7c58bf[_0x5ef96f(0x86)](
          _0x224b37[_0x5ef96f(0xac)][_0x37eea9][_0x5ef96f(0x89)]
        )
      ),
        _0x5940ba[_0x5ef96f(0xb2)](_0x23fdef, _0x329f40);
    }
    this[_0x5ef96f(0xd2)][_0x5ef96f(0x9a)][_0x5ef96f(0xaf)](_0x23fdef);
  }
  [_0x557704(0xb0)]() {
    var _0x5ef816 = _0x557704;
    this[_0x5ef816(0xc7)][_0x5ef816(0xcb)]((_0x44ff7c) => {
      var _0x1aa24d = _0x5ef816;
      const _0xffa37e = new Enemy(
        this,
        _0x44ff7c["x"],
        _0x44ff7c["y"],
        _0x44ff7c[_0x1aa24d(0xcc)],
        _0x44ff7c[_0x1aa24d(0x95)],
        _0x44ff7c["anim"]
      );
      _0xffa37e[_0x1aa24d(0x99)](_0x1aa24d(0xcd))[_0x1aa24d(0x8a)](!![]),
        _0xffa37e[_0x1aa24d(0xd4)](this[_0x1aa24d(0xb8)]),
        _0xffa37e["startMove"]();
    });
  }
  [_0x557704(0xa3)]() {
    gameObjects["forEach"]((_0x4300bc) => {
      var _0xb5daeb = _0x51bb;
      const _0x2e81f9 = this[_0xb5daeb(0xd2)][_0xb5daeb(0xaf)]["sprite"](
        _0x4300bc["x"],
        _0x4300bc["y"],
        _0x4300bc[_0xb5daeb(0xcc)]
      );
      if (_0x4300bc["sprite"] === BATTERY)
        _0x2e81f9[_0xb5daeb(0x8a)](!![]),
          (_0x2e81f9[_0xb5daeb(0x9b)][_0xb5daeb(0x9e)] = _0xb5daeb(0xc8));
      else {
        const _0x4cbc1f = {
          type: _0xb5daeb(0x7d),
          width: _0x2e81f9[_0xb5daeb(0x97)] * 1.25,
          height: _0x2e81f9[_0xb5daeb(0x83)] * 1.45,
        };
        _0x2e81f9["setBody"](_0x4cbc1f);
      }
      _0x2e81f9["setStatic"](!![])
        [_0xb5daeb(0xd4)](this[_0xb5daeb(0xaa)])
        ["setPipeline"]("Light2D");
    });
  }
  ["handlePlayerCollision"](_0x4b9c1e) {
    var _0x2fe438 = _0x557704;
    if (_0x4b9c1e[_0x2fe438(0x82)][_0x2fe438(0x9e)] === _0x2fe438(0x9f)) {
      if (this[_0x2fe438(0xa7)][_0x2fe438(0xc9)]) return;
      this["player"][_0x2fe438(0x72)]([this[_0x2fe438(0xaa)]]),
        this["player"][_0x2fe438(0x7b)][_0x2fe438(0x88)](() => {
          var _0x29165c = _0x2fe438;
          this[_0x29165c(0xa8)]["start"](_0x29165c(0x8d));
        }),
        this["hudScene"][_0x2fe438(0x81)][_0x2fe438(0xad)](0x5),
        this[_0x2fe438(0xa7)][_0x2fe438(0x78)](() => {
          var _0x36663d = _0x2fe438;
          this[_0x36663d(0xa7)]["setCollidesWith"]([
            this[_0x36663d(0xaa)],
            this[_0x36663d(0xb8)],
          ]);
        });
    }
    if (_0x4b9c1e[_0x2fe438(0x82)][_0x2fe438(0x9e)] === _0x2fe438(0xc8)) {
      if (_0x4b9c1e[_0x2fe438(0x82)]["isUsed"]) return;
      (_0x4b9c1e["bodyA"][_0x2fe438(0xc1)] = !![]),
        _0x4b9c1e[_0x2fe438(0x82)]["gameObject"][_0x2fe438(0xab)](),
        this[_0x2fe438(0xa7)][_0x2fe438(0x7b)][_0x2fe438(0x75)](),
        this["hudScene"][_0x2fe438(0x81)]["addTime"](0x5);
    }
    _0x4b9c1e[_0x2fe438(0x82)][_0x2fe438(0x9e)] === _0x2fe438(0x7e) &&
      (console[_0x2fe438(0xb7)](_0x2fe438(0xa9)),
      this[_0x2fe438(0xa8)]["stop"](_0x2fe438(0xda)),
      this["scene"][_0x2fe438(0x96)](_0x2fe438(0xa5)));
  }
  [_0x557704(0x7c)]() {
    var _0x118df6 = _0x557704;
    this[_0x118df6(0x84)][_0x118df6(0xe1)]({
      key: "spider_1_walk",
      frames: [
        { key: _0x118df6(0xbe), frame: null },
        { key: _0x118df6(0x90), frame: null },
      ],
      frameRate: 0x5,
      repeat: -0x1,
    }),
      this[_0x118df6(0x84)][_0x118df6(0xe1)]({
        key: _0x118df6(0xd7),
        frames: [
          { key: _0x118df6(0x98), frame: null },
          { key: "spider2_2", frame: null },
        ],
        frameRate: 0x5,
        repeat: -0x1,
      });
  }
  [_0x557704(0xa0)]() {
    var _0x25e04a = _0x557704;
    this[_0x25e04a(0xbf)] = this[_0x25e04a(0xaf)]
      [_0x25e04a(0xcc)](0x0, 0x0, _0x25e04a(0xbf))
      [_0x25e04a(0x76)](0x0, 0x0)
      ["setPipeline"](_0x25e04a(0xcd))
      ["setAlpha"](0.5);
  }
  [_0x557704(0xa6)]() {
    var _0xbd6e21 = _0x557704;
    (this["light"]["x"] = this[_0xbd6e21(0xa7)]["x"]),
      (this["light"]["y"] = this[_0xbd6e21(0xa7)]["y"]);
  }
  [_0x557704(0x92)]() {
    var _0xb234cd = _0x557704;
    this["lights"]["enable"](),
      this[_0xb234cd(0xdb)][_0xb234cd(0xc0)](0x555555),
      (this[_0xb234cd(0xd0)] = this["lights"]
        [_0xb234cd(0xb6)](0x190, 0x12c, 0xbe)
        [_0xb234cd(0xba)](0x3));
  }
  [_0x557704(0x73)]() {
    var _0x13e3f1 = _0x557704;
    (this[_0x13e3f1(0x8c)] = this[_0x13e3f1(0xd2)]["add"]["rectangle"](
      this["gw"] - 0x21,
      this["gh"] - 0xa96,
      0x64,
      0x64,
      { isStatic: !![] }
    )),
      (this["winLine"][_0x13e3f1(0x9e)] = "finishLine");
  }
}

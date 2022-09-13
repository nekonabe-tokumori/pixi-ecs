import * as PIXI from "pixi.js";
import { Level } from "./Level";

export class Holy extends Level {
  constructor(json) {
    super(json);
    this.image = new Image();
    this.image.src = "assets/logo.svg";
  }

  init(app) {
    const { game } = app;
    this.phase = 0;

    const { width, height } = app.view;
    this.sprite = new PIXI.Sprite(PIXI.Texture.from(this.image));
    this.sprite.position.set(width / 2, height / 2);
    this.sprite.anchor.set(0.5, 0.5);
    game.world.addChild(this.sprite);

    game.ticker.add(() => {
      this.phase += 0.01;

      const tex = this.sprite.texture;

      tex.frame.width = tex.baseTexture.width * this.phase;
      tex.updateUvs();
    });
  }
}

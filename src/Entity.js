export class Entity {
  constructor(props) {
    this.props = props;

    this.x = props.x || 0;
    this.y = props.y || 0;
    this.rotation = props.rotation || 0;
    this.size = props.size || 1;

    //this.pixi is a Component
    this.pixi = null;

    if (props.script) {
      this.script = props.script;
    }

    // this.dummy is a Component
  }

  syncPixi() {
    if (this.pixi) {
      this.pixi.position.set(this.x, this.y);
      this.pixi.rotation = this.rotation;
    }
  }
}

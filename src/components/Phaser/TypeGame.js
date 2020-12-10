"use strict";
class TypeGame {
  constructor(sprite,variantNumber) {
    this.sprite = sprite;
    this.variantNumber = variantNumber;
  }

  getSprite() {
    return this.sprite;
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }

  getVariantNumber(){
    return this.variantNumber;
  }


}

export default TypeGame;

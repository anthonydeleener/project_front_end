"use strict";
class Symbol {
  constructor(sprite,cardNumber) {
    this.sprite = sprite;
    this.cardNumber = cardNumber;
  }

  getKey() {
    return this.sprite.texture.key;
  }

  getSprite() {
    return this.sprite;
  }

  getCardNumber(){
    return this.cardNumber;
  }


}

// default export
export default Symbol;

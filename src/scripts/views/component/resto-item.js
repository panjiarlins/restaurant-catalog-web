import { createRestaurantItemTemplate } from '../templates/template-creator';

class RestoItem extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.setAttribute('id', this._resto.id);
    this.innerHTML = createRestaurantItemTemplate(this._resto);
  }
}

customElements.define('resto-item', RestoItem);

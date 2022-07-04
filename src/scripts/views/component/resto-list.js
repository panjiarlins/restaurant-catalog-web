import './resto-item';

class RestoList extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.createRestoItemElement();
  }

  createRestoItemElement() {
    if (this._resto.length !== 0) {
      this._resto.forEach((restaurant) => {
        const restoItemElement = document.createElement('resto-item');
        restoItemElement.resto = restaurant;
        this.appendChild(restoItemElement);
      });
    } else {
      this.innerHTML += '<div id="restaurant-not-found">No restaurant found</div>';
    }
  }
}

customElements.define('resto-list', RestoList);

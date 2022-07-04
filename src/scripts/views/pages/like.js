import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Like = {
  async render() {
    return `
      <h1>Your Favorite Restaurant</h1>
      <resto-list><!--RESTAURANT--></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('resto-list');
    restaurantContainer.resto = restaurants;
  },
};

export default Like;

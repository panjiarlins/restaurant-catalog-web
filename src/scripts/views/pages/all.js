import RestaurantSource from '../../data/restaurant-source';
import RestoRank from '../../utils/resto-rank-initiator';

const All = {
  async render() {
    return `
      <div id="hero">
        <picture>
          <source media="(max-width: 400px)" type="image/webp" srcset="./images/heros/hero-image_2-400.webp">
          <source media="(max-width: 750px)" type="image/webp" srcset="./images/heros/hero-image_2-750.webp">
          <source media="(max-width: 1000px)" type="image/webp" srcset="./images/heros/hero-image_2-1000.webp">
          <source media="(min-width: 1200px)" type="image/webp" srcset="./images/heros/hero-image_2-1200.webp">
          <source media="(max-width: 400px)" type="image/jpeg" srcset="./images/heros/hero-image_2-400.jpg">
          <source media="(max-width: 750px)" type="image/jpeg" srcset="./images/heros/hero-image_2-750.jpg">
          <source media="(max-width: 1000px)" type="image/jpeg" srcset="./images/heros/hero-image_2-1000.jpg">
          <img src='./images/heros/hero-image_2-1200.jpg' alt="Some food and drinks" width="1200" height="800"></img>
        </picture>
        <div>
            <div>
                <div>Deliciousness Jumping Into The Mouth</div>
                <div>Welcome to My Food App</div>
            </div>
        </div>
      </div>
      <h1>Explore Restaurant</h1>
      <resto-list><!--RESTAURANT--></resto-list>
      <div id="resto-rank">
        <div>RESTO RANK</div>
        <ul><!--RESTO RANK--></ul>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.allRestaurant();
    const restaurantContainer = document.querySelector('resto-list');
    restaurantContainer.resto = restaurants;
    RestoRank.displayRestoRank(restaurants);
  },
};

export default All;

import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <article>
    <section>
      <div>
        <div class="city">${restaurant.city}</div>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      <div>
        <h2>${restaurant.name}</h2>
        <div class="rating">Rating : ${restaurant.rating}</div>
        <div class="address">Address : ${restaurant.address}</div>
        <p>${restaurant.description}</p>
      </div>
    </section>
    <section>
      <div>MENU</div>
      <div>
        <div>FOODS</div>
        <div id="menu-food">
          ${restaurant.menus.foods.map((food) => `<div>${food.name}</div>`).join('')}
        </div>
      </div>
      <div>
        <div>DRINKS</div>
        <div id="menu-drink">
          ${restaurant.menus.drinks.map((drink) => `<div>${drink.name}</div>`).join('')}
        </div>
      </div>
    </section>
    <section>
      <div>REVIEWS</div>
      <div id="review">
        ${restaurant.customerReviews.map((review) => `
          <div>
            <div><strong>${review.name}</strong></div>
            <div>${review.review}</div>
            <div><em>— ${review.date}</em></div>
          </div>
        `).join('')}
      </div>
      <form id="form-review">
        <div id="form-when-offline" style="display: none;">You're offline!</div>
        <div id="form-when-online">
          <div id="form-name-review">
            <label for="name-review">Name :</label>
            <input placeholder="Your name...." type="text" id="name-review" name="name-review" required>
          </div>
          <textarea placeholder="Your review...." rows="4" id="input-review" aria-label="Input Your Review" required></textarea>
          <input id="submit-review" type="submit" value="Submit">
        </div>
      </form>
    </section>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article>
      <section>
          <div class="city">${restaurant.city}</div>
          <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      </section>
      <section>
          <div class="rating">Rating : ${restaurant.rating}</div>
          <a href="#/detail/${restaurant.id}"><h2>${restaurant.name}</h2></a>
          <div class="description">
              <p>${restaurant.description}</p>
          </div>
      </section>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoadingTemplate = () => {
  let template = '';
  for (let i = 0; i < 20; i += 1) {
    template += `
      <div class="sk-cube-grid" aria-label="Waiting for server">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    `;
  }
  return template;
};

const createErrorTemplate = () => {
  let template = '';
  for (let i = 0; i < 4; i += 1) {
    template += `
      <div class="spinner" aria-label="Response error">❌</div>
    `;
  }
  return template;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createLoadingTemplate,
  createErrorTemplate,
};

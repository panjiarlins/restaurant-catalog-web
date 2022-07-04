/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';
import { createLoadingTemplate, createErrorTemplate } from '../views/templates/template-creator';

class RestaurantSource {
  static async allRestaurant() {
    try {
      document.querySelector('resto-list').innerHTML += createLoadingTemplate();
      const response = await fetch(API_ENDPOINT.ALL);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      document.querySelector('main').innerHTML = createErrorTemplate();
      console.log(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      document.querySelector('#detail-restaurant').innerHTML += createLoadingTemplate();
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      document.querySelector('main').innerHTML = createErrorTemplate();
      console.log(error);
    }
  }
}

export default RestaurantSource;

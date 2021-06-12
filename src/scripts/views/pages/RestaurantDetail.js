import UrlParser from '../../routes/url-parser';

import RestaurantDB from '../../data/restaurantDb';
import { restaurantDetailTemplate, jumbotronTemplate } from '../templates/template-creator';
import FavButtonInitiator from '../../utils/fav-button-initiator';

const RestaurantDetail = {
  async render() {
    return `
      <div id="maincontent">
        <div class="jumbo"></div>        
        <div class="restaurant"></div>
        <div class="favorite"></div>
      </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate;
    const restaurant = await RestaurantDB.detailRestaurant(url.id);
    console.log(restaurant);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurantContainer.innerHTML += restaurantDetailTemplate(restaurant.restaurant);
    FavButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
      },
    });
  },
};

export default RestaurantDetail;

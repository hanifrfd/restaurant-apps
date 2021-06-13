import UrlParser from '../../routes/url-parser';

import RestaurantDB from '../../data/restaurantDb';
import { restaurantDetailTemplate, jumbotronTemplate } from '../templates/template-creator';
import FavButtonInitiator from '../../utils/fav-button-initiator';

const RestaurantDetail = {

  async render() {
    return `
      <div id="mainContent" class="display">
        <div class="jumbo"></div>        
        <div class="restaurant">
          <div id="loading">
            <img src="/loader.gif" width="100" height="100" alt="loader"/>
          </div>
        </div>
        <div class="favorite"></div>
      </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurant = await RestaurantDB.detailRestaurant(url.id);
    console.log(restaurant);
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate(restaurant);

    const restaurantContainer = document.querySelector('.restaurant');

    setTimeout(() => {
      document.querySelector('#loading').classList.add('hidden');
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
    }, 2500);
  },
};

export default RestaurantDetail;

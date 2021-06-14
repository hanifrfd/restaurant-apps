/* eslint-disable no-unused-expressions */
import UrlParser from '../../routes/url-parser';

import RestaurantDB from '../../data/restaurantDb';
import { restaurantDetailTemplate, jumbotronTemplate } from '../templates/template-creator';
import FavButtonInitiator from '../../utils/fav-button-initiator';
import ReviewForm from '../../utils/reviews';
// import CONFIG from '../../globals/config';

const RestaurantDetail = {

  async render() {
    return `
      <div id="loading">
        <img src="/loader.gif" width="100" height="100" alt="loader"/>
      </div>
      <div id="mainContent">
        <div class="jumbo"></div>                
        <div class="restaurant">
          <div class="rest-head">
              <div class="rest-title">
                  <div class="name"></div>                
              </div>
              <div class="favorite">
              </div>
          </div>
        </div>
        <div class="review-container">
          <div class="form-review"></div>
          <div class="review"></div>    
        </div>    
      </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurant = await RestaurantDB.detailRestaurant(url.id);
    console.log(restaurant);
    console.log(restaurant.length);

    const jumbotronContainer = document.querySelector('.jumbo');
    const restaurantContainer = document.querySelector('.restaurant');
    const titleHead = document.querySelector('.name');

    !restaurant.length
      ? setTimeout(() => {
        document.querySelector('#loading').classList.add('hidden');
        document.querySelector('#mainContent').classList.add('display');
        titleHead.innerHTML += restaurant.restaurant.name;
        restaurantContainer.innerHTML += restaurantDetailTemplate(restaurant.restaurant);
        jumbotronContainer.innerHTML += jumbotronTemplate(restaurant.restaurant);

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

        ReviewForm.init({
          formContainer: document.querySelector('.form-review'),
          reviewContainer: document.querySelector('.review'),
          restaurants: restaurant.restaurant,
        });
      }, 1500)
      : setTimeout(() => {
        document.querySelector('#loading').classList.add('hidden');
        document.querySelector('#mainContent').classList.add('display');
        document.querySelector('#mainContent').innerHTML = `
          <div id="loading">
            ${restaurant}
          </div>
        `;
      }, 2500);
  },
};

export default RestaurantDetail;

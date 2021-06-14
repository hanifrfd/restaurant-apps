/* eslint-disable no-unused-expressions */
import FavoriteRestaurantIdb from '../../data/restaurant-favorite-idb';
import { restaurantItemTemplate, jumbotronTemplate } from '../templates/template-creator';

const RestaurantFavorite = {
  async render() {
    return `
        <div id="loading">
              <img src="/loader.gif" width="100" height="100" alt="loader"/>
        </div>            
        <div id="mainContent">
          <div class="jumbo"></div>
          <div class="headline">Your Favorite Restaurant</div>
          <div id="list">            
          </div>
        </div>                
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#list');
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate();

    console.log(restaurant.length);

    setTimeout(() => {
      document.querySelector('#loading').classList.add('hidden');
      document.querySelector('#mainContent').classList.add('display');
      restaurant.length !== 0
        ? restaurant.forEach((items) => {
          restaurantContainer.innerHTML += restaurantItemTemplate(items);
        })
        : restaurantContainer.innerHTML += `
          <div id="loading">
            <p>anda belum memiliki restaurant favorit</p>
          </div>`;
    }, 1500);
  },
};

export default RestaurantFavorite;

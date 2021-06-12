import FavoriteRestaurantIdb from '../../data/restaurant-favorite-idb';
import { restaurantItemTemplate, jumbotronTemplate } from '../templates/template-creator';

const RestaurantFavorite = {
  async render() {
    return `
        <div id="mainContent" class="display">
          <div class="jumbo"></div>
          <div class="headline">Your Favorite Restaurant</div>
          <div id="list">
            <div id="loading">
              <img src="/loader.gif" width="100" height="100" alt="loader"/>
            </div>
          </div>
        </div>                
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#list');
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate;
    setTimeout(() => {
      document.querySelector('#loading').classList.add('hidden');
      restaurant.forEach((items) => {
        restaurantContainer.innerHTML += restaurantItemTemplate(items);
      });
    }, 2500);
  },
};

export default RestaurantFavorite;

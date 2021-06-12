import FavoriteRestaurantIdb from '../../data/restaurant-favorite-idb';
import { restaurantItemTemplate, jumbotronTemplate } from '../templates/template-creator';

const RestaurantFavorite = {
  async render() {
    return `
        <div id="mainContent">
          <div class="jumbo"></div>
          <div class="headline">Your Favorite Restaurant</div>
          <div id="list"></div>
        </div>                
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#list');
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate;
    restaurant.forEach((items) => {
      restaurantContainer.innerHTML += restaurantItemTemplate(items);
    });
  },
};

export default RestaurantFavorite;

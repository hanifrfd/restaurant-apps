/* eslint-disable no-unused-expressions */
import RestaurantDB from '../../data/restaurantDb';
import { restaurantItemTemplate, jumbotronTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
        <div id="mainContent">
          <div class="jumbo"></div>
          <div class="headline">Explore Restaurant</div>                  
          <div id="list"></div>
        </div>                
      `;
  },

  async afterRender() {
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate;

    const restaurant = await RestaurantDB.restaurantList();
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#list');

    restaurant.restaurants.forEach((items) => {
      restaurantContainer.innerHTML += restaurantItemTemplate(items);
    });
  },
};

export default RestaurantList;

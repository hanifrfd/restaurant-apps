/* eslint-disable no-unused-expressions */
import RestaurantDB from '../../data/restaurantDb';
import { restaurantItemTemplate, jumbotronTemplate } from '../templates/template-creator';

const RestaurantList = {

  async loader() {
    return `
      <div id="mainContent">
        <div id="loading"></div>
      </div>
    `;
  },

  async render() {
    return `
        
        <div id="mainContent" class="display">
          <div class="jumbo"></div>
          <div class="headline">Explore Restaurant</div>                  
          <div id="list">
            <div id="loading">
              <img src="/loader.gif" width="100" height="100" alt="loader"/>
            </div>
          </div>
        </div>                
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantDB.restaurantList();
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#list');

    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate(restaurant);

    setTimeout(() => {
      document.querySelector('#loading').classList.add('hidden');
      restaurant.restaurants.forEach((items) => {
        restaurantContainer.innerHTML += restaurantItemTemplate(items);
      });
    }, 2500);
  },
};

export default RestaurantList;

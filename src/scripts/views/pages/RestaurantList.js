/* eslint-disable no-unused-expressions */
import RestaurantDB from '../../data/restaurantDb';
import { restaurantItemTemplate, jumbotronTemplate } from '../templates/template-creator';

const RestaurantList = {

  async render() {
    return `        
        <div id="loading">
              <img src="/loader.gif" width="100" height="100" alt="loader"/>
        </div>
        <div id="mainContent">
          <div class="jumbo"></div>
          <div class="headline">Explore Restaurant</div>                  
          <div id="list">            
          </div>
        </div>                
      `;
  },

  async afterRender() {
    const jumbotronContainer = document.querySelector('.jumbo');
    jumbotronContainer.innerHTML += jumbotronTemplate();

    const restaurantContainer = document.querySelector('#list');
    const restaurant = await RestaurantDB.restaurantList();
    console.log(restaurant);

    restaurant
      ? setTimeout(() => {
        document.querySelector('#loading').classList.add('hidden');
        document.querySelector('#mainContent').classList.add('display');
        restaurant.restaurants.forEach((items) => {
          restaurantContainer.innerHTML += restaurantItemTemplate(items);
        });
      }, 1500)
      : setTimeout(() => {
        document.querySelector('#loading').classList.add('hidden');
        restaurantContainer.innerHTML += 'data gagal ditemukan';
      }, 2500);
  },
};

export default RestaurantList;

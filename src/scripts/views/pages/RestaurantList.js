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
    const restaurantContainer = document.querySelector('#list');
    const restaurant = await RestaurantDB.restaurantList();
    console.log(restaurant);
    console.log(restaurant.length);

    !restaurant.length
      ? setTimeout(() => {
        document.querySelector('#loading').classList.add('hidden');
        document.querySelector('#mainContent').classList.add('display');
        jumbotronContainer.innerHTML += jumbotronTemplate();
        restaurant.restaurants.forEach((items) => {
          restaurantContainer.innerHTML += restaurantItemTemplate(items);
        });
      }, 150)
      : setTimeout(() => {
        document.querySelector('#loading').classList.add('hidden');
        document.querySelector('#mainContent').classList.add('display');
        document.querySelector('#mainContent').innerHTML = `
          <div id="loading">
            ${restaurant}
          </div>
        `;
      }, 1500);
  },
};

export default RestaurantList;

/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const restaurantDetailTemplate = (restaurant) => `    
        <div class="rest-head">
            <div class="rest-title">
                <div class="name">${restaurant.name}</div>                
            </div>
        </div>
        <div class="rest-content">
            <div class="rest-info">
                <div class="sub-title">
                    <div class="kategori">
                        <label for="kategori">Kategori Makanan</label>
                        ${restaurant.categories.map((category) => category.name)}
                    </div>
                    <div class="rating">
                        <label for="rating">Rating</label>
                        <div class="ratings">${restaurant.rating}</div>                        
                    </div>                    
                    <div class="alamat">
                        <label for="address">Address</label>
                        ${restaurant.address}
                    </div>
                </div>
                <div class="description">
                    <label for="description">Description</label>
                    ${restaurant.description}
                </div>
            </div>            
            <div class="rest-menu">
                <div class="menu-list">
                    <ul class="makanan">
                        <label for="Makanan">Makanan</label>
                        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
                    <ul class="minuman">
                        <label for="Minuman">Minuman</label>
                        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                    </ul>                    
                </div>
            </div>
        </div>
        <div class="review">
            <div class="review-head">
                <label for="Reviews">Customer Reviews</label>                
            </div>            
            <div class="review-list">
                ${restaurant.customerReviews.map((review) => `                   
                    <div class="review-box">
                        <label>${review.name}</label>
                        <p>${review.review}</p>
                    </div>
                `).join('')}                
            </div>
        </div>        
`;

const jumbotronTemplate = (restaurant) => {
  restaurant.name !== undefined
    ? `
    <div class="jumbotron" style="background-image: url(${CONFIG.BASE_IMAGE_URL + restaurant.pictureId})">
        <div class="jumbo-text">${restaurant.name}</div>
        <div class="blur"></div>
    </div>
    ` : `
    <div class="jumbotron" style="background-image: url('/heros/hero-image_2.jpg')">
        <div class="jumbo-text">FIND YOUR <br> FAVORITE RESTAURANT</div>
        <div class="blur"></div>
    </div>`;
};

const restaurantItemTemplate = (restaurant) => `
    <div class="card">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="cardInfo">
            <span>${restaurant.city}</span>
            <span>${restaurant.rating}</span>
        </div>
        <a href="${`/#/detail/${restaurant.id}`}" class="cardTitle">${restaurant.name}</a>
        <p>${restaurant.description}</p>
    </div>
`;

const createFavButtonTemplates = () => `
    <button aria-label="favorite this movie" id="favorite">
        Favorite
    </button>
`;

const createFavdButtonTemplates = () => `
    <button aria-label="favorited this movie" id="favorited">
        Favorited
    </button>
`;

const createLoader = () => `
    <div id='loading'></div>
`;

export {
  restaurantItemTemplate, jumbotronTemplate, restaurantDetailTemplate, createFavButtonTemplates, createFavdButtonTemplates, createLoader,
};

// eslint-disable-next-line max-len
// eslint-disable-next-line no-lone-blocks
// eslint-disable-next-line max-len
// eslint-disable-next-line no-lone-blocks
{ /* <div class="jumbotron" style="${background ? `background-image: url(${CONFIG.BASE_IMAGE_URL + background.pictureId})` : 'background-image: url("heros/hero-image_2.jpg")'}"> */ }

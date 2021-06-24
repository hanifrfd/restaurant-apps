/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const restaurantDetailTemplate = (restaurant) => `            
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
`;

const reviewTemplate = (restaurant) => `    
    <div class="review-head">
        <label for="Reviews">Customer Reviews</label>
    </div>    
    <div class="review-list">
        ${restaurant.customerReviews.reverse().map((review) => `                   
            <div class="review-box">
                <label>${review.name}</label>
                <p>${review.review}</p>
            </div>
        `).join('')}                
    </div>    
`;

const formReviewTemplate = (restaurant) => `
    <div class="">
        <label for="Reviews">Give Us Your Reviews</label>
        <form id="form-review" class="review-form">
            <input name="id" value="${restaurant.id}" hidden />
            <label for="username">Username</label>
            <input type="text" name="name" />
            <label for="review">Review</label>
            <textarea name="review"></textarea>
            <input type="submit" value="Submit Review" class="btn-form" />
        </form>
    </div>
`;

const jumbotronTemplate = (restaurant) => `
    ${restaurant !== undefined ? `
        <div class="jumbotron" style="background-image: url(${CONFIG.BASE_IMAGE_URL + restaurant.pictureId})">
            <div class="jumbo-text">${restaurant.name}</div>
            <div class="blur"></div>
        </div>
    ` : `
        <div class="jumbotron" style="background-image: url('heros/hero_image_1.jpg')">
            <div class="jumbo-text">Find Your <br>Favorite Restaurant</div>
            <div class="blur"></div>
        </div>
    `}    
`;

const restaurantItemTemplate = (restaurant) => `
    <div class="card">
        <a href="${`/#/detail/${restaurant.id}`}" class="cardLink"></a>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="cardInfo">
            <span>${restaurant.city}</span>
            <span>${restaurant.rating}</span>
        </div>
        <div class="cardTitle">${restaurant.name}</div>
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
    <div id="loading">
        <img src="/loader.gif" width="100" height="100" alt="loader"/>
    </div>
`;

export {
  restaurantItemTemplate, jumbotronTemplate, restaurantDetailTemplate, createFavButtonTemplates, createFavdButtonTemplates, createLoader, reviewTemplate, formReviewTemplate,
};

// eslint-disable-next-line max-len
// eslint-disable-next-line no-lone-blocks
// eslint-disable-next-line max-len
// eslint-disable-next-line no-lone-blocks
{ /* <div class="jumbotron" style="${background ? `background-image: url(${CONFIG.BASE_IMAGE_URL + background.pictureId})` : 'background-image: url("heros/hero-image_2.jpg")'}"> */ }

import FavButtonInitiator from '../src/scripts/utils/fav-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-favorite-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="favorite"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await FavButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await FavButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await FavButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('.favorite').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await FavButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite'),
      restaurant: {
        id: 1,
      },
    });

    // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#favorite').dispatchEvent(new Event('click'));
    // tidak ada restaurant yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a restaurant when it has no id', async () => {
    await FavButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite'),
      restaurant: {},
    });

    document.querySelector('#favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

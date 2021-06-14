import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDB {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      return response.json();
    } catch (err) {
      return err;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (err) {
      return err;
    }
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 1234,
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default RestaurantDB;

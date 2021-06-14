/* eslint-disable no-unused-expressions */
import RestaurantDB from '../data/restaurantDb';
import { formReviewTemplate, reviewTemplate, createLoader } from '../views/templates/template-creator';

const ReviewForm = {
  async init({ reviewContainer, formContainer, restaurants }) {
    this._formContainer = formContainer;
    this._reviewContainer = reviewContainer;
    this._restaurants = restaurants;

    this._formRender();
    this._reviewRender();
    this._submit();
  },

  _formRender() {
    this._formContainer.innerHTML += formReviewTemplate(this._restaurants);
  },

  _reviewRender() {
    this._reviewContainer.innerHTML += reviewTemplate(this._restaurants);
  },

  _reloadReview(review) {
    console.log(review);
    this._reviewContainer.innerHTML = createLoader();
    setTimeout(() => {
      this._reviewContainer.innerHTML = reviewTemplate(review);
    }, 2500);
  },

  _submit() {
    const formReview = document.querySelector('#form-review');
    formReview.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const responseData = this._formToJson(formData);
      const review = await RestaurantDB.postReview(responseData);

      review.error === false
        ? this._reloadReview(review)
        : console.log(review.message);
    });
  },

  _formToJson(formData) {
    const plainFormData = Object.fromEntries(formData.entries());
    return plainFormData;
  },

};

export default ReviewForm;

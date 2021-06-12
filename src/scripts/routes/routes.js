import RestaurantFavorite from '../views/pages/RestaurantFavorite';
import RestaurantDetail from '../views/pages/RestaurantDetail';
import RestaurantList from '../views/pages/RestaurantList';
import ErrorPage from '../views/pages/ErrorPage';

const routes = {
  '/': RestaurantList, // default page
  '/detail': RestaurantDetail,
  '/favorite': RestaurantFavorite,
  '/detail/:id': RestaurantDetail,
  '/404': ErrorPage,
};

export default routes;

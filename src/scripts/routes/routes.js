import RestaurantFavorite from '../views/pages/RestaurantFavorite';
import RestaurantDetail from '../views/pages/RestaurantDetail';
import RestaurantList from '../views/pages/RestaurantList';

const routes = {
  '/': RestaurantList, // default page
  '/detail': RestaurantDetail,
  '/favorite': RestaurantFavorite,
  '/detail/:id': RestaurantDetail,
};

export default routes;

import All from '../views/pages/all';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': All,
  '/all': All,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;

import { createStore } from 'vuex';
import AxiosModules from './modules/axios/index';
import ProductModules from './modules/products/index';
import CartModules from './modules/cart/index';
import OrderModules from './modules/order/index';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    axios: AxiosModules,
    product: ProductModules,
    cart: CartModules,
    order: OrderModules,
  },
});

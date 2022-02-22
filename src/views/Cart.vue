<template>
  <div v-if="cartData.length !== 0">
    <breadcrumb mode="cart"></breadcrumb>
    <cart-product-list
      :products="cartData"
      @change-product-quantity="changeProductQuantity"
      @delete-product="deleteProduct"
    ></cart-product-list>
    <div class="mt-8 ml-auto lg:w-1/3">
      <router-link to="/orderinformation">
        <base-btn class="w-full">下一步</base-btn>
      </router-link>
    </div>
  </div>
  <div v-if="cartData.length === 0">
    <p class="mb-5 text-2xl font-bold">購物車沒有東西~快去選購吧</p>
    <router-link to="/product">
      <base-btn class="block w-full" outline>去購物</base-btn>
    </router-link>
  </div>
  <base-loading :show="isLoading"></base-loading>
  <base-dialog :show="!!error" title="Error" @close="closeError">{{ error }}</base-dialog>
</template>
<script>
import CartProductList from '../components/cart/CartProductList.vue';
import Breadcrumb from '../components/cart/Breadcrumb.vue';

export default {
  components: { CartProductList, Breadcrumb },
  data() {
    return {
      error: '',
      isLoading: false,
    };
  },
  computed: {
    cartData() {
      return this.$store.getters['cart/cartData'];
    },
  },
  methods: {
    async getCartData() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('cart/getCart');
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
    closeError() {
      this.error = '';
    },
    async changeProductQuantity(data) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('cart/changeProductQuantity', data);
        this.getCartData();
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
    async deleteProduct(id) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('cart/deleteProduct', id);
        this.getCartData();
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getCartData();
  },
};
</script>

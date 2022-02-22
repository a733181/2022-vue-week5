<template>
  <table class="w-full text-center">
    <thead>
      <tr class="border-b-2">
        <th class="w-1/3">商品名稱</th>
        <th class="w-1/6">單價</th>
        <th class="w-1/6">數量</th>
        <th class="w-1/6">小計</th>
        <th class="w-1/6" v-if="!order">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id" class="border-b-[1px]">
        <td class="flex flex-col items-center py-3 lg:flex-row">
          <img
            :src="product.product.imageUrl"
            :alt="product.product.title"
            class="w-[100px] mb-2 lg:mb-0 lg:mr-6 object-cover"
          />
          <p>{{ product.product.title }}</p>
        </td>
        <td>{{ product.product.price }}</td>
        <td>
          <input
            type="number"
            name=""
            id=""
            v-model="product.qty"
            class="w-full px-3 border-2 rounded-lg"
            @change="changeProductQuantity(product)"
            v-if="!order"
          />
          <p v-if="order">{{ product.qty }}</p>
        </td>
        <td>{{ product.final_total }}</td>
        <td v-if="!order">
          <img
            src="@/assets/trash-can-solid.svg"
            alt="刪除"
            class="w-[20px] h-[20px] mx-auto hover:scale-150"
            @click="deleteProduct(product.id)"
          />
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <p class="pt-2">{{ sumsPriceTotal }}</p>
        </td>
        <td v-if="!order">
          <img
            src="@/assets/trash-can-solid.svg"
            alt="刪除"
            class="w-[20px] h-[20px] mx-auto hover:scale-150"
            @click="deleteProduct"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      relative: true,
    },
    order: {
      type: Boolean,
      relative: false,
    },
  },
  emits: ['change-product-quantity', 'delete-product'],
  data() {
    return {
      productList: [],
    };
  },
  computed: {
    sumsPriceTotal() {
      if (this.products) {
        return this.products.reduce((sum, item) => {
          const sums = sum + item.final_total;
          return sums;
        }, 0);
      }
      return 0;
    },
  },
  watch: {},
  methods: {
    changeProductQuantity(product) {
      if (product.qty < 1) {
        this.deleteProduct(product.id);
      } else {
        const data = {
          id: product.id,
          data: {
            product_id: product.product_id,
            qty: product.qty,
          },
        };
        this.$emit('change-product-quantity', data);
      }
    },
    deleteProduct(id) {
      this.$emit('delete-product', id);
    },
  },
};
</script>

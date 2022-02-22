<template>
  <the-header class="mb-10"></the-header>
  <div class="container px-4 mx-auto min-h-[calc(100vh-192px)]">
    <router-view></router-view>
  </div>
  <the-footer class="mt-10"></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

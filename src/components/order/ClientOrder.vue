<template>
  <ul class="mb-5">
    <li class="flex mb-2">
      <p class="mr-2">姓名：</p>
      <p>{{ data.user.name }}</p>
    </li>
    <li class="flex mb-2">
      <p class="mr-2">Email：</p>
      <p>{{ data.user.email }}</p>
    </li>
    <li class="flex mb-2">
      <p class="mr-2">電話：</p>
      <p>{{ data.user.phone }}</p>
    </li>
    <li class="flex mb-2">
      <p class="mr-2">地址：</p>
      <p>{{ data.user.address }}</p>
    </li>
    <li class="flex mb-2">
      <p class="mr-2">留言：</p>
      <p>{{ data.message }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      relative: true,
    },
  },
};
</script>

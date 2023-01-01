<template>
  <div class="header">
    <NuxtLink to="/signup" class="header-btn">新規登録</NuxtLink>
    <button class="header-btn" @click="navigate">{{ buttonName }}</button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  header {
    display: table;
    width: 100vw;
    height: 60px;
    background-color: #474747;
  }
  .header-btn {
    display: table-cell;
    text-align: right;
    vertical-align: middle;
    padding-right: 45px;
    border: none;
    text-decoration: none;
    font-size: 18px;
    color: white;
  }
  .header-btn:hover {
    color: #f7797d;
  }
</style>
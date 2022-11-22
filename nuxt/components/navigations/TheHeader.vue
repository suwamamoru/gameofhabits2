<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <p class="welcome">ようこそ、{{ $auth.user.name }}さん</p>
      </div>
      <div class="spacer"></div>
    </header>
  </div>
</template>

<script>
  import TheSideNavToggle from '../navigations/TheSideNavToggle.vue';

  export default {
    name: 'TheHeader',
    components: {
      TheSideNavToggle
    }
  }
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #474747;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}
.logo {
  background-color: #474747;
  margin: 0 10px;
  font-size: 18px;
}
.welcome {
  display: inline;
  background-color: #474747;
  color: white;
  font-family: Hiragino Mincho Pro;
}
.spacer {
  flex: 1;
}
.navigation-items {
  display: none;
}
@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.nav-item {
  margin: 0 10px;
}
.logout-btn {
  border: none;
  background-color: #474747;
  color: white;
  font-family: Hiragino Mincho Pro;
  font-size: 18px;
  cursor: pointer;
}
.logout-btn:hover {
  color: #f7797d;
}
</style>
<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <div class="drawer-toggle" role="button" @click="$emit('close')">
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul class="nav-list" @click="$emit('close')">
          <li class="">
            <p class="submenu-headline">ステータス</p>
          </li>
          <li class="nav-item">
            <p class="status-item">称号：{{ userData.Degree.name }}</p>
          </li>
          <li class="nav-item">
            <p class="status-item">SP：{{ userData.sp }}</p>
          </li>
          <li class="">
            <p class="submenu-headline">サブメニュー</p>
          </li>
          <li class="nav-item" v-if="toDashboardShow">
            <button class="submenu-btn" type="button" @click="toDashboard()">ダッシュボードに戻る</button>
          </li>
          <li class="nav-item">
            <button class="submenu-btn" type="button" @click="$auth.logout()">ログアウト</button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'TheSideNav',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      toDashboardShow: {
        type: Boolean,
        default: false
      },
      userData: {
        Degree: {
          name: String
        },
        sp: Number
      }
    },
    methods: {
      toDashboard () {
        this.$router.push({ path: '/dashboard' });
      }
    }
  }
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}
.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
.sidenav {
  height: 100%;
  width: 300px;
  background-color: black;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
.nav-list {
  list-style: none;
  padding-left: 10px;
}
.submenu-headline {
  font-size: 25px;
}
.nav-item {
  margin-left: 10px;
}
.status-item {
  font-size: 18px;
}
.submenu-btn {
  border: none;
  background-color: black;
  color: white;
  font-family: Hiragino Mincho Pro;
  font-size: 18px;
  padding-left: 0;
  cursor: pointer;
  margin-bottom: 10px;
}
.logout-btn:hover {
  color: #f7797d;
}
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35px;
  width: 35px;
  cursor: pointer;
}
.bar {
  height: 2px;
  background: white;
  transition: all 0.3s ease-in-out 0.5s;
}
.bar:nth-child(1) {
  transform: rotate(135deg) translateY(-10px);
  transform-origin: bottom;
}
.bar:nth-child(2) {
  transform: rotate(-135deg) translateY(10px);
  transform-origin: top;
}
</style>
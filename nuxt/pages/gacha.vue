<template>
  <div class="gacha">
    <header>
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false"
        :toDashboardShow="displayToDashboard"
        :userData="userData" />
    </header>
    <div class="content">
      <div class="card" :class="{'isFront':toggled === false, 'isBack':toggled === true}" @click="toggle()">
        <div class="front">
          <img class="front-img" src="/images/card.png">
        </div>
        <div class="back">
          <img class="back-img" :src="gacha">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/navigations/TheHeader.vue';
  import TheSideNav from '../components/navigations/TheSideNav.vue';
  
  export default {
    middleware: 'auth',
    components: {
      TheHeader,
      TheSideNav,
    },
    data () {
      return {
        displaySidenav: false,
        displayToDashboard: true,
        userData: {},
        gacha: "",
        toggled: false
      }
    },
    beforeCreate() {
      this.gachaGuard();
    },
    created: async function () {
      try {
        const userData = await this.$axios.$post('/users/getUserData', {
          name: this.$auth.user.name
        });
        this.userData = userData;
      } catch (error) {
        console.log(error);
      }
      try {
        const gacha = await this.$axios.$post('/gacha/gacha', {
          userId: this.userData.id,
          habitId: this.$route.params.id
        });
        this.gacha = gacha;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      gachaGuard() {
        // if (this.$store.getters.gachaGuard === false)
        this.$store.dispatch('gachaGuardListener');
      },
      toggle: async function () {
        this.toggled = !this.toggled;
        try {
          const userData = await this.$axios.$post('/users/getUserData', {
            name: this.$auth.user.name
          });
          this.userData = userData;
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style scoped>
  .gacha {
    height: 100%;
    color: white;
    font-family: Hiragino Mincho Pro;
    background-color: #48698E;
  }
  .content {
    width: 70vw;
    height: 100vh;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    font-size: 18px;
  }
  .card {
    position: relative;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .isFront .front {
    opacity: 1;
    transform: rotateY(0deg);
    transition:
      opacity 100ms 150ms,
      transform 300ms 150ms;
  }
  .isFront .back {
    opacity: 0;
    transform: rotateY(90deg);
    transition:
      opacity 50ms 200ms,
      transform 300ms;
  }
  .isBack .front {
    opacity: 0;
    transform: rotateY(90deg);
    transition:
      opacity 50ms 200ms,
      transform 300ms;
  }
  .isBack .back {
    opacity: 1;
    transform: rotateY(0deg);
    transition:
      opacity 100ms 150ms,
      transform 300ms 150ms;
  }
  .front-img, .back-img {
    width: 300px;
    height: 420px;
  }
</style>
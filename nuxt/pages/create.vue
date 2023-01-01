<template>
  <div class="create">
    <header>
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false"
        :toDashboardShow="displayToDashboard"
        :userData="userData" />
    </header>
    <div class="content">
      <div class="title">
        <p id="title">習慣のタイトル</p>
        <input type="text" class="create-text" id="create-title" v-model="habit.title">
      </div>
      <div class="tags">
        <div class="tag">
          <p id="tag">タグ1</p>
          <input type="text" class="create-text" v-model="habit.tag1">
        </div>
        <div class="tag">
          <p id="tag">タグ2</p>
          <input type="text" class="create-text" v-model="habit.tag2">
        </div>
        <div class="tag">
          <p id="tag">タグ3</p>
          <input type="text" class="create-text" v-model="habit.tag3">
        </div>
      </div>
      <div class="ingenuity">
        <p id="ingenuity">工夫</p>
        <input class="create-text" id="create-ingenuity" type="text" v-model="habit.ingenuity">
      </div>
      <form class="create-form" @submit.prevent="create(habit)">
        <input type="submit" id="create" value="作成する">
      </form>
      {{ habit.userId }}
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
        habit: {
          userId: '',
          title: '',
          tag1: '',
          tag2: '',
          tag3: '',
          ingenuity: '',
          successDays: 0
        }
      }
    },
    created: async function () {
      try {
        const userData = await this.$axios.$post('/users/getUserData', {
          name: this.$auth.user.name
        });
        this.userData = userData;
        this.habit.userId = userData.id;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      async create (habit) {
        try {
          await this.$axios.$post('/users/createNewHabit', {
            createHabit: habit
          });
          this.$router.push({ path: '/dashboard' });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style scoped>
  .create {
    height: 100%;
    color: white;
    font-family: Hiragino Mincho Pro;
    background-color: #48698E;
  }
  .content {
    width: 460px;
    margin: auto;
    font-size: 18px;
  }
  .title {
    margin-top: 40px;
  }
  #title {
    margin: 0;
  }
  .tags {
    margin-top: 40px;
  }
  #tag {
    margin: 20px 0 0 0;
  }
  .ingenuity {
    margin-top: 40px;
  }
  #ingenuity {
    margin: 0;
  }
  #create-title {
    width: 25em;
  }
  .create-text {
    background-color: #fff;
    color: #858585;
    border: none;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 18px;
    width: 12.5em;
    max-width: 100%;
    height: 35px;
  }
  #create-ingenuity {
    width: 25em;
    margin-bottom: 40px;
  }
  .create-form {
    text-align: center;
  }
  #create {
    border-style: none;
    background-color: #FF0000;
    font-family: Hiragino Mincho Pro;
    font-size: 15px;
    color: #FFF;
    width: 100px;
    height: 40px;
    border-radius: 0.5rem;
    margin-bottom: 100px;
  }
  #create:hover {
    cursor: pointer;
    background-color: #EE0000;
  }
</style>
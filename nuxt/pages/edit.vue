<template>
  <div class="edit">
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
        <input type="text" class="edit-text" id="edit-title" v-model="habit.title">
      </div>
      <div class="tags">
        <div class="tag">
          <p id="tag">タグ1</p>
          <input type="text" class="edit-text" v-model="habit.tag1">
        </div>
        <div class="tag">
          <p id="tag">タグ2</p>
          <input type="text" class="edit-text" v-model="habit.tag2">
        </div>
        <div class="tag">
          <p id="tag">タグ3</p>
          <input type="text" class="edit-text" v-model="habit.tag3">
        </div>
      </div>
      <div class="ingenuity">
        <p id="ingenuity">工夫</p>
        <input class="edit-text" id="edit-ingenuity" type="text" v-model="habit.ingenuity">
      </div>
      <div class="forms">
        <form class="update-form" @submit.prevent="update(habit)">
          <input type="submit" id="update" value="変更する">
        </form>
        <form class="erase-form" @submit.prevent="erase(habit)">
          <input type="submit" id="erase" value="削除する">
        </form>
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
        habit: {}
      }
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
        const habit = await this.$axios.$post('/users/editHabit', {
          id: this.$route.params.id
        });
        this.habit = habit;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      async update (habit) {
        try {
          await this.$axios.$post('/users/updateHabit', {
            newHabit: habit
          });
          this.$router.push({ path: '/dashboard' });
        } catch (error) {
          console.log(error);
        }
      },
      async erase (habit) {
        try {
          await this.$axios.$post('/users/eraseHabit', {
            eraseHabit: habit
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
  .edit {
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
  #edit-title {
    width: 25em;
  }
  .edit-text {
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
  #edit-ingenuity {
    width: 25em;
    margin-bottom: 40px;
  }
  .forms {
    display: flex;
    justify-content: space-between;
  }
  #update {
    border-style: none;
    background-color: #55ACEE;
    font-family: Hiragino Mincho Pro;
    font-size: 15px;
    color: #FFF;
    width: 100px;
    height: 40px;
    border-radius: 0.5rem;
    margin-bottom: 100px;
  }
  #update:hover {
    background-color: #53AACC;
    cursor: pointer;
  }
  #erase {
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
  #erase:hover {
    cursor: pointer;
    background-color: #EE0000;
  }
</style>
<template>
  <div class="dashboard">
    <header>
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false"
        :user="user"
        :degree="degree" />
    </header>
    <div class="contents" v-for="habit in habits" :key="habit">
      <div class="content">
        <table class="habits-header">
          <tr>
            <h2 class="title">{{ habit.title }}</h2>
            <div class="tags">
              <Icon id="icon" icon="ant-design:tag-outlined" />
              <p id="tag" v-show="habit.tag1">#{{ habit.tag1 }}</p>
              <p id="tag" v-show="habit.tag2">#{{ habit.tag2 }}</p>
              <p id="tag" v-show="habit.tag3">#{{ habit.tag3 }}</p>
            </div>
          </tr>
        </table>
        <div class="habits-contents">
          <div class="date">
            <p class="day">7/1<br>(金)</p>
            <p class="day">7/2<br>(土)</p>
            <p class="day">7/3<br>(日)</p>
            <p class="day">7/4<br>(月)</p>
            <p class="day">7/5<br>(火)</p>
            <p class="day">7/6<br>(水)</p>
            <p class="day">7/7<br>(木)</p>
          </div>
          <div class="status">
            <p id="combos">コンボ倍数：{{ habit.combos }}倍</p>
            <p id="success">進捗状況：現在{{ habit.continue_days }}日連続成功、合計10日成功</p>
          </div>
        </div>
      </div>
    </div>
    {{ userData }}
    <div class="add-contents">
      <Icon id="add-icon" icon="ant-design:plus-circle-outlined" />
    </div>
  </div>
</template>

<script>
  import TheHeader from '../components/navigations/TheHeader.vue';
  import TheSideNav from '../components/navigations/TheSideNav.vue';
  import { Icon } from '@iconify/vue2';
  
  export default {
    middleware: 'auth',
    components: {
      TheHeader,
      TheSideNav,
      Icon
    },
    data () {
      return {
        displaySidenav: false,
        user: {},
        habits: [],
        degree: {},
        userData: []
      }
    },
    created: async function () {
      try {
        // const user = await this.$axios.$post('/users/getUser', {
        //   name: this.$auth.user.name
        // });
        // this.user = user;
        // const habits = await this.$axios.$post('/users/getHabit', {
        //   name: this.$auth.user.name
        // });
        // habits.forEach(habit => {
        //   this.habits.push(habit);
        // });
        // const degree = await this.$axios.$post('/users/getDegree', {
        //   name: this.$auth.user.name
        // });
        // this.degree = degree;
        const userData = await this.$axios.$post('/users/getUserData', {
          name: this.$auth.user.name
        });
        this.userData = userData;
      } catch (error) {
        console.log(error);
      }
    }
  }
</script>

<style scoped>
  .dashboard {
    height: 100%;
    color: white;
    font-family: Hiragino Mincho Pro;
    background-color: #48698E;
  }
  .content {
    width: 70vw;
    margin: auto;
  }
  .title {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .tags {
    display: flex;
    align-items: center;
  }
  #icon {
    font-size: 30px;
  }
  #tag {
    margin-left: 10px;
  }
  .habits-contents {
    color: black;
    background-color: white;
    border-radius: 20px;
  }
  .date {
    display: flex;
    justify-content: space-around;
  }
  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #55ACEE;
  }
  #combos, #success {
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .add-contents {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }
  #add-icon {
    font-size: 40px;
    margin-bottom: 130px;
  }
</style>
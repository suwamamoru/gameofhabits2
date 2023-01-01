<template>
  <div class="dashboard">
    <header>
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false"
        :toDashboardShow="displayToDashboard"
        :userData="userData" />
    </header>
    <div class="contents">
      <div class="content" v-for="(habit, index) in Habits" :key="habit">
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
            <div v-for="week in thisWeek" :key="week">  <!-- 今週1週間のカレンダーを生成する -->
              <p class="day"
                v-if="changeDayColor[index]"
                :style="(changeDayColor[index][week.id] === true) ? 'background-color:#55ACEE'
                :'background-color:#D9D9D9'">
                {{ week.month }}/{{ week.day }} <!-- 達成日を青色にする。 -->
                <span
                  :style="(week.week === '土') ? 'color:#005DB9'
                  :(week.week === '日') ? 'color:#FF0000'
                  :'color:#000000'">  <!-- 土日の色をそれぞれ青赤にする。それ以外は黒 -->
                  ({{ week.week }})
                </span>
              </p>
            </div>
          </div>
          <div class="status">
            <p id="ingenuity">工夫：{{ habit.ingenuity }}</p>
            <div class="success">
              <p id="success">累計{{ habit.successDays }}日成功</p>
            </div>
          </div>
          <div class="forms">
            <form class="gacha-form" @submit.prevent="gacha(habit)">
              <input
                type="submit" id="gacha" value="目標達成！"
                :disabled="(checkTodayAchieved[index] === true)"
                :style="(checkTodayAchieved[index] === true) ? 'background-color:#D9D9D9'
                :'background-color:#FF0000'">
            </form>
            <form class="edit-form" @submit.prevent="edit(habit)">
              <input type="submit" id="edit" value="編集する！">
            </form>
          </div>
        </div>
      </div>
    </div>
    <form class="add-contents" @submit.prevent="create()" v-show="(habitsLength < 3)">
      <button class="add-button" type="submit"><Icon id="add-icon" icon="ant-design:plus-circle-outlined" /></button>
    </form>
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
        displayToDashboard: false,
        userData: [],
        Habits: [],
        habitsLength: '',
        thisWeek: [],
        changeDayColor: [],
        checkTodayAchieved: []
      }
    },
    created: async function () {
      try {
        await this.$axios.$get('/users/checkThisYear');
      } catch (error) {
        console.log(error);
      }
      try {
        const userData = await this.$axios.$post('/users/getUserData', {
          name: this.$auth.user.name
        });
        this.userData = userData;
        this.Habits = userData.Habits;
        this.habitsLength = userData.Habits.length;
      } catch (error) {
        console.log(error);
      }
      try {
        const thisWeek = await this.$axios.$get('/users/getThisWeek');
        this.thisWeek = thisWeek;
      } catch (error) {
        console.log(error);
      }
      try {
        const changeDayColor = await this.$axios.$post('/users/changeDayColor', {
          userData: this.userData,
          thisWeek: this.thisWeek
        });
        this.changeDayColor = changeDayColor;
      } catch (error) {
        console.log(error);
      }
      try {
        const checkTodayAchieved = await this.$axios.$post('/users/checkTodayAchieved', {
          userData: this.userData
        });
        this.checkTodayAchieved = checkTodayAchieved;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      create () {
        this.$router.push({ path: '/create' });
      },
      edit (habit) {
        this.$router.push({
          path: '/edit',
          name: 'edit',
          params: {
            id: habit.id
          }
        });
      },
      gacha (habit) {
        this.$router.push({
          path: '/gacha',
          name: 'gacha',
          params: {
            id: habit.id
          }
        });
      }
    }
  }
</script>

<style scoped>
  .dashboard {
    height: 1100px;
    color: white;
    font-family: Hiragino Mincho Pro;
    background-color: #48698E;
  }
  .contents {
    width: 470px;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #D9D9D9;
  }
  .success {
    display: flex;
  }
  #ingenuity, #combos, #success {
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .forms {
    display: flex;
    justify-content: space-between;
  }
  .gacha-form {
    margin-left: 10px;
  }
  #gacha {
    border-style: none;
    background-color: #FF0000;
    font-family: Hiragino Mincho Pro;
    color: #FFF;
    width: 90px;
    height: 30px;
    border-radius: 0.5rem;
    margin-bottom: 10px;
  }
  #gacha:hover {
    background-color: #EE0000;
    cursor: pointer;
  }
  .edit-form {
    margin-right: 10px;
  }
  #edit {
    border-style: none;
    background-color: #55ACEE;
    font-family: Hiragino Mincho Pro;
    color: #FFF;
    width: 90px;
    height: 30px;
    border-radius: 0.5rem;
    margin-bottom: 10px;
  }
  #edit:hover {
    background-color: #53AACC;
    cursor: pointer;
  }
  .add-contents {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }
  .add-button {
    background-color: #48698E;
    border: none;
    width: 40px;
    height: 40px;
    margin-bottom: 150px;
  }
  #add-icon {
    color: #FFF;
    font-size: 40px;
  }
  #add-icon:hover {
    cursor: pointer;
  }
</style>
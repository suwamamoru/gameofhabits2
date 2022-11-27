<template>
  <div class="dashboard">
    <header>
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false"
        :userData="userData" />
    </header>
    <div class="contents" v-for="habit in userData.Habits" :key="habit">
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
            <div v-for="week in thisWeek" :key="week">  <!-- 今週1週間のカレンダーを生成する -->
              <div v-for="achieveDay in habit.HabitAchieveDays" :key="achieveDay">  <!-- 達成日を持ってくる -->
                <p class="day"
                  :style="(week.day === achieveDay.AchieveDay.day)
                  ? 'background-color:#55ACEE':'display:none'">  <!-- 達成日を青色にする。それ以外は非表示 -->
                  {{ week.month }}/{{ week.day }}
                  <span
                    :style="(week.week === '土') ? 'color:#005DB9'
                    :(week.week === '日') ? 'color:#FF0000'
                    :'color:#000000'">  <!-- 土日の色をそれぞれ青赤にする。それ以外は黒 -->
                    ({{ week.week }})
                  </span>
                </p>
              </div>
              <div v-for="achieveDay in habit.HabitAchieveDays" :key="achieveDay">  <!-- 達成日を持ってくる -->
                <p class="day"
                  :style="(week.day !== achieveDay.AchieveDay.day)
                  ? 'background-color:#D9D9D9':'display:none'">  <!-- 達成日でない日を灰色にする。それ以外は非表示 -->
                  {{ week.month }}/{{ week.day }}
                  <span
                    :style="(week.week === '土') ? 'color:#005DB9'
                    :(week.week === '日') ? 'color:#FF0000'
                    :'color:#000000'">
                    ({{ week.week }})
                  </span>
                </p>
              </div>
              <!-- <p class="day">{{ week.month }}/{{ week.day }}
                <span
                  :style="(week.week === '土') ? 'color:#005DB9'
                  :(week.week === '日') ? 'color:#FF0000'
                  :'color:#000000'">
                  ({{ week.week }})
                </span>
              </p> -->
            </div>
          </div>
          <div class="status">
            <p id="combos">コンボ倍数：{{ habit.combos }}倍</p>
            <p id="success">累計{{ habit.successDays }}日成功</p>
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
        userData: {},
        thisWeek: []
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
        const thisWeek = await this.$axios.$get('/users/thisWeek');
        this.thisWeek = thisWeek;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #D9D9D9;
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
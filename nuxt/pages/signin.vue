<template>
  <div class="signin">
    <header>
      <NuxtLink to="/signup" class="header-btn">新規登録</NuxtLink>
    </header>
    <div class="contents">
      <div class="title">
        <h1>習慣大富豪</h1>
        <h1 class="game-of-habits">− GAME OF HABITS −</h1>
      </div>
      <form class="login-form" @submit.prevent="signin">
        <div class="div-info">
          <p id="username">ユーザー名</p>
          <input type="text" v-model="login.username" class="info" placeholder="User Name">
          <p class="errors">{{ errors.usernameError }}</p>
          <p id="password">パスワード</p>
          <input type="text" v-model="login.password" class="info" placeholder="Password">
          <p class="errors">{{ errors.passwordError }}</p>
        </div>
        <div class="login">
          <button type="submit" class="login-btn">ログイン</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        login: {
          username: '',
          password: ''
        },
        errors: {
          usernameError: "",
          passwordError: ""
        }
      }
    },
    methods: {
      async signin () {
        this.errors = {
          usernameError: "",
          passwordError: ""
        };
        try {
          await this.$auth.loginWith('local', {
            data: this.login
          })
          this.$router.push({ path: '/dashboard' });
        } catch (error) {
          const errorResponse = error.response.data;
          if (errorResponse === 'このユーザーは存在しません。') {
            this.errors.usernameError = errorResponse;
          } else {
            this.errors.passwordError = errorResponse;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .signin {
    height: 100vh;
    color: white;
    font-family: Hiragino Mincho Pro;
    background-color: #48698E;
  }
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
  .title {
    text-align: center;
    font-size: 18px;
  }
  .game-of-habits {
    font-family: Iowan Old Style;
  }
  .div-info {
    text-align: center;
  }
  #username, #password {
    position: relative;
    right: 90px;
    font-size: 18px;
  }
  .info {
    background-color: #fff;
    color: #858585;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 18px;
    width: 15em;
    max-width: 100%;
    height: 50px;
  }
  .errors {
    color: #FF3300;
  }
  .login {
    display: flex;
    justify-content: center;
  }
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-style: none;
    width: 170px;
    height: 50px;
    background-color: #FF0000;
    font-family: Hiragino Mincho Pro;
    color: white;
    border-radius: 100vh;
    font-size: 16px;
  }
  .login-btn:hover {
    background-color: #EE0000;
  }
</style>
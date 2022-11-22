<template>
  <div class="signup">
    <header>
      <NuxtLink to="/signin" class="header-btn">ログイン</NuxtLink>
    </header>
    <form @submit.prevent="signup">
      <div class="title">
        <h1 class="millionaire">習慣大富豪</h1>
        <h1 class="game-of-habits">− GAME OF HABITS −</h1>
      </div>
      <div class="div-info">
        <p id="new-username">新規ユーザー名</p>
        <input type="text" v-model="register.username" class="info" placeholder="User Name">
        <p class="errors">{{ errors.usernameError }}</p>
        <p id="new-password">新規パスワード</p>
        <input type="text" v-model="register.password" class="info" placeholder="Password">
        <p class="errors">{{ errors.passwordError }}</p>
      </div>
      <div class="register">
        <button type="submit" class="register-btn">新規登録</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        register: {
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
      async signup () {
        this.errors = {
          usernameError: "",
          passwordError: ""
        };
        await this.$axios.$post("/auth/register", {
          username: this.register.username,
          password: this.register.password
        })
        .then(() => {
          this.$auth.loginWith('local', {
            data: this.register
          })
        })
        .catch((error) => {
          const errorResponse = error.response.data;
          errorResponse.forEach(error => {
            if (error.param === "username") {
              this.errors.usernameError = error.msg
            } else {
              this.errors.passwordError = error.msg
            }
          })
        });
      }
    }
  }
</script>

<style scoped>
  .signup {
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
  #new-username, #new-password {
    margin-top: 1em;
    position: relative;
    right: 70px;
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
  .register {
    display: flex;
    justify-content: center;
  }
  .register-btn {
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
  .register-btn:hover {
    background-color: #EE0000;
  }
</style>
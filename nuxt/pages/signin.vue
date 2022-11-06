<template>
  <section class="container">
    <header>
      <router-link to="/signup" class="header-btn">新規登録</router-link>
    </header>
    <div class="title">
      <h1 class="millionaire">習慣大富豪</h1>
      <h1 class="game-of-habits">− GAME OF HABITS −</h1>
    </div>
    <div class="div-info">
      <p id="username">ユーザー名</p>
      <input type="text" v-model="username" class="info" placeholder="  User Name"><br>
      <p id="password">パスワード</p>
      <input type="text" v-model="password" class="info" placeholder="  Password">
    </div>
    <div class="keep-signin">
      <div class="keep-check1">ログインしたままにする</div>
      <div class="keep-check2"><input type="checkbox" class="keep-check3" /></div>
    </div>
    <footer>
      <button type="button" class="footer-btn" @click="signin">ログイン</button>
    </footer>
  </section>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      signin: async function () {
        await axios.post("/api/users/login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style>
  .header-btn {
    display: inline-block;
    background-color: #474747;
    border: none;
    text-decoration: none;
    position: relative;
    top: 10px;
    left: 200px;
    font-size: 15px;
  }

  .title {
    margin: 1em 0px;
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
    margin-top: 1em;
    position: relative;
    right: 80px;
    font-size: 18px;
  }
  .info {
    background-color: #fff;
    color: #858585;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    width: 15em;
    max-width: 100%;
    height: 50px;
  }

  .keep-signin {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .keep-check1 {
    width: 180px;
    height: 20px;
    line-height: 22px;
  }
  .keep-check2 {
    width: 20px;
    height: 20px;
  }
  .keep-check3 {
    width: 15px;
    height: 15px;
  }
  
  .footer-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-style: none;
    width: 170px;
    height: 50px;
    background-color: #FF0000;
    border-radius: 100vh;
    font-size: 16px;
  }
  .footer-btn:hover {
    background-color: #EE0000;
  }
</style>
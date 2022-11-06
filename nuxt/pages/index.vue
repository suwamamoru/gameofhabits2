<template>
  <section class="container">
    <header>
      <router-link to="/signin" class="header-btn">ログイン</router-link>
    </header>
    <div class="title">
      <h1 class="millionaire">習慣大富豪</h1>
      <h1 class="game-of-habits">− GAME OF HABITS −</h1>
      <h2 id="slogan">良い習慣は 成功を生む</h2>
    </div>
    <div id="explanation">
      <p id="explanation-contents">仕事、趣味、人間関係で成功するには</p>
      <p id="explanation-contents">何が必要なのだろう？</p>
      <p id="explanation-contents">綿密な計画か、</p>
      <p id="explanation-contents">豊富な知識か、</p>
      <p id="explanation-contents">それとも、強い意志か？</p>
      <p id="explanation-contents">答えは、良い習慣を身につけることだ。</p>
      <p id="explanation-contents">さあ、成功への扉を開こう。</p>
    </div>
    <footer>
      <router-link to="/signup" class="footer-btn">新規登録はこちら</router-link>
    </footer>
  </section>
</template>

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
  #slogan {
    margin: 1em 0px;
  }

  #explanation {
    text-align: center;
    font-size: 15px;
  }
  #explanation-contents {
    margin: 0.5em 0px;
  }

  .footer-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
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
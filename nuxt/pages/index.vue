<template>
  <div class="index">
    <header>
      <NuxtLink to="/signin" class="header-btn">ログイン</NuxtLink>
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
    <div class="register-guide">
      <NuxtLink to="/signup" class="register-guide-btn">新規登録はこちら</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .index {
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

  .register-guide {
    display: flex;
    justify-content: center;
  }
  .register-guide-btn {
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
  .register-guide-btn:hover {
    background-color: #EE0000;
  }
</style>
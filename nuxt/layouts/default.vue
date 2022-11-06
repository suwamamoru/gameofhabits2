<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    width: 100vw;
    background-color: #48698E;
    font-family: Hiragino Mincho Pro;
    color: #fff;
  }

  header {
    height: 42px;
    background-color: #474747;
    color: #fff;
    text-align: center;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0px;
  }

  @media screen and (min-width: 959px) {
    #app {
      width: 959px;
    }
  }

  @media screen and (min-width: 480px) {
    #app {
      width: 480px;
    }
  }
</style>

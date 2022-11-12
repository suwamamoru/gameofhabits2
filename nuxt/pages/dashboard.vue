<template>
  <div class="container">
    <header>
      <button type="button" class="header-btn" @click="logout">ログアウト</button>
    </header>
    <h1>ダッシュボード</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push('/signin');
    }
  }
}
</script>
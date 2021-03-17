<template>
  <div class="tabbar">
  </div>
</template>
<script>


export default {
  name: 'layout',

  methods: {
  },
  created () {
  },
  watch: {
    $route () {
      this.paths = this.$route.meta.path;
      // console.error('页面权限列表', curAuth)
    }
  }
}
</script>
<style lang="less">
  // @import url('../assets/icon/iconfont.css');
  .tabbar {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
  }
</style>

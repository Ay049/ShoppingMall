<template>
  <div id="app" class="wrapper">
    <router-view/>
    <MainTabBar></MainTabBar>
  </div>
</template>
<script>
// 引入通用底部导航
import MainTabBar from '@/components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>
<style>
  /* 引入通用的css样式 */
  @import "~@/assets/css/base.css";
</style>

<template>
  <div class="hm-header">
    <div class="left" @click="$router.go(-1)">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hm-header {
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 30px;
  line-height: 30px;
  .left,
  .right {
    width: 30px;
    text-align: center;
  }
  .center {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
}
</style>

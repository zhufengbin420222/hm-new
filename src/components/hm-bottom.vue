<template>
  <div class="hm-bottom" @click="click">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="less" scoped>
.hm-bottom {
  margin: 20px;
  background-color: red;
  color: #fff;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  border-radius: 20px;
}
</style>

<template>
  <div class="hm-input">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="input"
      :class="{ success: status === 'success', error: status === 'error' }"
    />
    <div class="tips" v-show="status === 'error'">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: ''
    };
  },
  //   props: ['type', 'placeholder', 'value'],
  //我们定义组件的时候，可以给接收的props添加类型的校验，保证接收到的数据的格式是正确的。
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入正确内容'
    },
    value: String,
    rule: RegExp,
    message: String
  },
  methods: {
    input(e) {
      // console.log(e.target.value);
      //   this.$emit('input', document.querySelector('input').value);
      let value = e.target.value;
      this.$emit('input', value);
      this.validate(value);
    },
    validate(value) {
      if (this.rule) {
        if (this.rule.test(value)) {
          // console.log(this.rule.test(value));
          this.status = 'success';
          return true;
        } else {
          this.status = 'error';
          return false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hm-input {
  margin: 0 10px;
  height: 45px;
  input {
    height: 30px;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #666;
    font-size: 12px;
    &.success {
      border-color: green;
    }
    &.error {
      border-color: red;
    }
  }
  .tips {
    color: red;
    height: 15px;
    line-height: 15px;
  }
}
</style>

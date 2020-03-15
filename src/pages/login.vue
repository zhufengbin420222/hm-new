<template>
  <div>
    <hm-header>登录</hm-header>

    <hm-logo></hm-logo>

    <hm-input
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式错误"
      ref="username"
    ></hm-input>

    <hm-input
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></hm-input>

    <hm-bottom @click="click">登录</hm-bottom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    click() {
      //先进行表单校验 校验成功才发生ajax请求
      let status1 = this.$refs.username.validate(this.username);
      let status2 = this.$refs.password.validate(this.password);
      if (!status1 || !status2) {
        return;
      }

      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res.data);
        if (res.data.statusCode === 200) {
          this.$toast.success('登陆成功');
          this.$router.push('/userinfo');
        } else {
          this.$toast.fail('用户名或者密码错误');
        }
      });
    }
  }
};
</script>

<style></style>

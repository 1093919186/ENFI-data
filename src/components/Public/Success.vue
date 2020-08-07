<template>
  <div id="loginBJ" class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6" style="margin-top: 60px">
        <h1 style="text-align: center;color: rgba(36, 139, 210, 0.9);" v-text="message"></h1>
        <div id="login">
          <h4 style="text-align: center">
            页面将在&nbsp;
            <span id="timeSpan" v-text="time"></span>&nbsp;秒后跳转
          </h4>
          <h4 style="text-align: center">
            如果没有请&nbsp;
            <a @click="fn">点击这里</a>
          </h4>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      jumpUrl: this.$store.state.baseUrl + "/" + this.$route.query.url,
      time: this.$store.state.time,
      timer: null,
      timer2: null,
    };
  },
  created() {
    this.timer2 = setInterval(this.changeTime, 1000);
  },
  mounted() {
    let isok = this.$store.state.isok
    let time = this.time * 1000;
    if (isok === "0") {
      this.message = "操作失败";
      this.timer = setTimeout(() => {
        this.$router.go(-1);
      }, time);
    } else {
      this.message = "操作成功";
      this.timer = setTimeout(() => {
        this.$router.push("/" + this.$route.query.url);
      }, time);
    }
  },
  methods: {
    fn() {
      clearTimeout(this.timer);
      this.$router.push("/" + this.$route.query.url);
    },
    changeTime() {
      this.time--;
      if (this.time < 0) {
        clearInterval(this.timer2);
      }
    },
  },
  components: {},
};
</script>
<style lang='less' scoped>
#login {
  height: auto;
  margin: 30px 7px 0 7px;
  padding: 20px 20px 10px 20px;
  background-color: #ffffff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}
@media (max-width: 767px) {
  #login {
    padding: 20px 20px 10px 20px;
  }
}
</style>
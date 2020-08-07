<template>
  <el-form ref="form" label-width="80px" size="small">
    <el-form-item label="用户名">
      <el-input v-model="name" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="pwd" placeholder="请输入密码" type="password"></el-input>
    </el-form-item>
    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="type">
        <el-radio label="超级管理员"></el-radio>
        <el-radio label="普通管理员"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="fn">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getRegistInfo } from "@/api/api";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      type: "",
      power: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.type === "" || this.name === "" || this.pwd === "") {
        this.$store.state.isok = "0";
        this.$store.state.show = 11;
        this.$router.push({ path: "/success", query: { url: "home" } });
      } else {
        if (this.type === "超级管理员") {
          this.power = 0;
        } else {
          this.power = 1;
        }
        getRegistInfo({
          params: {
            adminname: this.name,
            adminpwd: this.pwd,
            placeid: this.power,
          },
        }).then((res) => {
          if (res === "-1") {
            this.$store.state.isok = "0";
            this.$store.state.show = 11;
            this.$router.push({ path: "/success", query: { url: "home" } });
          } else {
            this.$store.state.isok = "1";
            this.$store.state.show = 11;
            this.$router.push({ path: "/success", query: { url: "home" } });
          }
        });
      }
    },
    fn() {
      this.name = "";
      this.pwd = "";
      this.type = "";
    },
  },
};
</script>
<style>
.el-form {
  background-color: white;
  padding: 0.152rem 0.152rem 0.08rem 0.104rem;
  width: 71.8%;
  margin-top: 0.104rem;
}
</style>
<template>
  <div id="login">
      <div class="form-group">
        <label style="font-family: 'arial', '微软雅黑'">用户名</label>
        <input
          class="form-control"
          placeholder="请输入用户名"
          style="font-family: '微软雅黑', '黑体'"
          name="username"
          v-model="uname"
        />
      </div>
      <div class="form-group">
        <label style="font-family: 'arial', '微软雅黑'">密码</label>
        <input
          id="pwd"
          class="form-control"
          v-model="pwdval"
          style="font-family: '微软雅黑', '黑体'"
          name="password"
          placeholder="请输入密码"
          type="password"
        />
      </div>
      <button @click="fn" class="btn btn-info" style="width: 100%;font-family: 'arial', '微软雅黑'">登录</button>
  </div>
</template>

<script>
import {getLoginInfo} from '@/api/api';
export default {
  data(){
    return {
      pwdval : '',
      uname: ''
    }
  },
  methods:{
    fn(){
      getLoginInfo({params:{username:this.uname, password: this.pwdval}}).then(res=>{
        if(res === -1){
          this.$store.state.isok = '0'
          this.$router.push({path:'/success', query:{url: 'login'}});
        }else{
          res = String(res);
          this.$store.state.isok = '1'
          setCookie('token', hex_md5(res), 1);
          this.$router.push({path:'/success', query:{url: 'home'}});
        }
      })
    }
  },
  components: {},

};
</script>
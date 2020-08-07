<template>
  <el-table :data="tableData" style="width: 71.8%" height="400" v-if="tableData.length !== 0">
    <el-table-column fixed prop="adminname" label="用户名" width="150"></el-table-column>
    <el-table-column prop="adminpwd" label="密码" width="120"></el-table-column>
    <el-table-column prop="placeid" label="权限" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getAdminInfo } from "@/api/api";
import { deleteadmin } from "@/api/api";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    getAdminInfo().then((res) => {
      for (let i = 0; i < res.length; i++) {
        res[i].placeid = res[i].placeid === "0" ? "超级管理员" : "普通管理员";
        this.tableData.push(res[i]);
      }
    });
  },
  methods: {
    handleClick(e) {
      deleteadmin({ params: { id: e.id } }).then((res) => {
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
    },
  },
};
</script>
<style>
.el-table__fixed::before{
  display: none;
}
.el-table__fixed-right::before{
  display: none;
}
</style>
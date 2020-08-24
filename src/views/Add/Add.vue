<template>
  <el-container style="height:100%">
    <!-- 头部 -->
    <el-header style="height:0.66667rem">
      ENFI设计数据管理后台
      <span style="font-size:0.052rem; right:0.304rem; position:absolute">你好!{{power}}</span>
    </el-header>
    <el-container>
      <!-- 主搜索框 -->
      <el-aside width="1.266667rem" style="height:700px">
        <el-card class="box-card" body-style="padding:0">
          <div
            v-for="(o,index) in searchList"
            :key="index"
            @click="changeTab(index, $event)"
            class="text item"
          >{{o}}</div>
        </el-card>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <!-- 搜索框 -->
        <el-input
          v-model="input"
          placeholder="搜索项目编号"
          style="width:60%; margin-right:20px;margin-bottom:20px"
        ></el-input>
        <el-button
          style="padding: 12px 18px; height:38px;line-height:8px"
          type="success"
          @click="search()"
        >搜 索</el-button>
        <el-button @click="goout" style="padding: 12px 18px; height:38px;line-height:8px">退出登录</el-button>
        <el-button
          @click="dataCopy"
          type="success"
          plain
          style="padding: 12px 18px; height:38px;line-height:8px"
        >数据备份</el-button>
        <my-table
          :issearch="issearch"
          @clearSearch="clearSearch"
          v-show="index <= 38"
          :index="index"
          :input="input"
        ></my-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Table from "@/components/Add/Table";
import { Copy } from "@/api/api";
export default {
  name: "Add",
  data() {
    return {
      power: "",
      searchList: [
        "项目表",
        "子项表",
        "原矿性质表",
        "精矿性质表",
        "项目指标表",
        "图纸量表",
        "电能消耗",
        "材料消耗",
        "定员表",
        "药剂消耗表",
        "药剂消耗药剂",
        "破碎机高压辊磨机",
        "振动筛表",
        "磨机表",
        "旋流器表",
        "浮选机表",
        "浮选柱表",
        "磁选机表",
        "跳汰机表",
        "摇床表",
        "溜槽表",
        "浓缩机表",
        "过滤机表",
        "干燥机表",
        "鼓风机表",
        "空压机表",
        "给料及放矿机",
        "皮带表",
        "螺旋运输机表",
        "泵表",
        "搅拌槽及矿浆箱表",
        "起重机表",
        "葫芦表",
        "药剂制备添加",
        "其它设备表",
        "金属结构件表",
        "管道表",
        "阀门表",
        "管材,管件,法兰等",
      ],
      input: "",
      index: 0,
      issearch: 0,
    };
  },
  components: {
    "my-table": Table,
  },
  created() {
    this.index = this.$store.state.delIndex ? this.$store.state.delIndex : 0;
  },
  mounted() {
    let token = getCookie("token");
    if (hex_md5("0") === token) {
      this.power = "超级管理员";
      let tableNameList = document.querySelectorAll(".item");
      tableNameList[this.index].className = "text item active";
    } else if (hex_md5("1") === token) {
      this.power = "管理员";
      let tableNameList = document.querySelectorAll(".item");
      tableNameList[this.index].className = "text item active";
    }
  },
  methods: {
    goout() {
      clearCookie();
      this.$router.push({ path: "/success", query: { url: "login" } });
    },
    changeTab(key, e) {
      this.index = key;
      this.$store.state.delIndex = this.index;
      this.input = "";
      let tableNameList = document.querySelectorAll(".item");
      for (let i = 0; i < tableNameList.length; i++) {
        tableNameList[i].className = "text item";
      }
      e.target.className = "text item active";
    },
    search() {
      this.issearch = 1;
    },
    clearSearch() {
      this.issearch = 0;
    },
    dataCopy() {
      Copy().then((res) => {
        if (res === 1) {
          window.location.href = `http://localhost:80/ENFI-data/enfi.sql`;
          this.$store.state.isok = "1";
          this.$router.push({ path: "/success", query: { url: "Add" } });
        } else {
          this.$store.state.isok = "0";
          this.$router.push({ path: "/success", query: { url: "Add" } });
        }
      });
    },
  },
};
</script>
<style scoped>
.item:nth-child(11) {
  background-color: white;
}
.item:nth-child(12) {
  background-color: white;
}
.item:hover {
  background-color: #c6e2ff;
}
.active {
  background-color: #c6e2ff !important;
}
</style>
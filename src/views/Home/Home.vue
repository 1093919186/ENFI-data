<template>
  <el-container style="height:100%">
    <!-- 头部 -->
    <el-header style="height:0.66667rem">
      ENFI设计数据管理后台
      <span style="font-size:0.052rem; right:0.304rem; position:absolute">你好!{{power}}</span>
    </el-header>
    <el-container>
      <!-- 主搜索框 -->
      <el-aside width="1.266667rem">
        <el-card class="box-card" body-style="padding:0">
          <div
            @click="fn(index)"
            v-for="(o,index) in searchList"
            :key="index"
            class="text item"
            :style="color[index]"
          >{{o}}</div>
        </el-card>
      </el-aside>
      <!-- 设备列表 -->
      <el-card v-show="status===1" class="box-card-equip" body-style="padding:0">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            v-for="(value,key,index) in machineList"
            :key="index"
            :title="key"
            :name="index"
          >
            <span v-for="(item, index) in value" :key="index">
              <div @click="changeMachineSearch(key,item, $event)" :class="sonItem">{{item[0]}}</div>-------------------------
            </span>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 主体 -->
      <el-main>
        <!-- 搜索框 -->
        <el-input
          style="width:60%; margin-right:20px;margin-bottom:20px"
          v-model="input"
          :placeholder="holderVal"
        ></el-input>
        <el-button
          @click="search(input)"
          style="padding: 12px 18px; height:36px;line-height:8px"
          type="success"
        >搜 索</el-button>
        <el-button @click="goout" style="padding: 12px 18px; height:38px;line-height:8px">退出登录</el-button>
        <el-button v-if="power==='超级管理员'" @click="toAdd" type="primary" style="padding: 12px 18px; height:36px;line-height:8px">数据管理</el-button>
        <!-- 搜索列表 -->
        <my-table
          v-show="index <= 10"
          :index="index"
          :refresh="refresh"
          :input="input"
          :issearch="issearch"
          @clearSearch="clearSearch"
          @clearInput="clearInput"
          v-if="tableShow"
          @switch="changeDetail($event)"
          :switchToTable="switchToTable"
          @changeIsSearch="changeIsSearch"
          :machineid="machineid"
        ></my-table>
        <!-- 人员管理 -->
        <my-people v-show="index === 11"></my-people>
        <!-- 详情 -->
        <my-detail v-if="!tableShow&&index<11" :searchId="searchId"></my-detail>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Table from "@/components/Home/Table";
import People from "@/views/Home/People";
import Detail from "@/components/Home/Detail";
export default {
  name: "Home",
  data() {
    return {
      name:0,
      power: "",
      searchList: [],
      status: 0,
      input: "",
      color: ["backgroundColor:#c6e2ff"],
      index: 0,
      issearch: 0,
      refresh: 0,
      tableShow: true,
      holderVal: "",
      searchId: 0,
      switchToTable: 0,
      // 设备表中默认打开子项的项目
      activeName: 0,
      machineList: {
        破碎机及高压辊: [["处理能力",0], ["型号",1], ["给矿粒度",2]],
        振动筛: [["处理能力",3], ["型号",4]],
        磨机: [["处理能力",5], ["型号",6], ["产品粒度",7], ["有效容积",8]],
        水力旋流器: [["处理量",9], ["给矿矿浆量",10], ["直径",11], ["分级细度",12]],
        浮选机: [["处理量",13], ["矿浆量",14], ["实际浮选时间",15], ["规格型号",16]],
        浮选柱: [["处理量",17], ["细度",18], ["实际浮选时间",19], ["规格型号",20]],
        磁选机: [["处理量",21], ["细度",22], ["磁场强度",23], ["规格型号",24]],
        浓缩机: [["处理量",25], ["入料细度",26], ["底流浓度",27], ["直径",28]],
        过滤机: [["处理量",29], ["细度",30], ["滤饼水分",31], ["过滤面积",32]],
        鼓风机: [["流量",33], ["出口压力",34], ["规格型号",35]],
        空压机: [["排气量",36], ["压力",37], ["型号",38]],
        给料机及放矿机: [["处理量",39]],
        带式输送机: [["输送量",40], ["最大粒度",41], ["高度",42], ["长度",43], ["带速",44]],
        螺旋输送机: [["设计输送量",45], ["螺旋直径",46], ["规格型号",47]],
        泵: [["泵处理量",48], ["扬程",49], ["粒度",50], ["规格型号",51]],
        搅拌槽: [["矿浆量",52], ["实际搅拌时间",53], ["规格型号",54]],
        起重机: [["设备名称",55],["主钩起重量",56], ["抓斗斗容",57]],
        葫芦: [["起重重量",58]],
        药剂制备与添加: [["药剂名称",59], ["药剂种类",60], ["制备浓度",61]],
        其它设备: [["设备名称",62]],
        金属结构件: [["金属结构件名称",63]],
        管道: [["管道规格",64]],
        阀门: [["阀门规格",65], ["工作压力",66]],
      },
      machine: "",
      machineKey: "",
      sonItem: "sonItem",
      // 判定machineList是否是初始状态
      isMachineStart: 0,
      machineid: 0,
      machineKey: '',
      machineInfo: ''
    };
  },
  components: {
    "my-table": Table,
    "my-people": People,
    "my-detail": Detail,
  },
  created() {
    this.index = this.$store.state.show;
  },
  mounted() {
    let token = getCookie("token");
    if (hex_md5("0") === token) {
      this.power = "超级管理员";
      this.searchList = [
        "矿石类型",
        "处理量",
        "破碎工艺",
        "磨矿工艺",
        "浮选工艺",
        "脱水工艺",
        "碎矿功率",
        "磨矿功率",
        "钢耗",
        "定员",
        "设备选型",
        "人员管理",
      ];
    } else if (hex_md5("1") === token) {
      this.power = "管理员";
      this.searchList = [
        "矿石类型",
        "处理量",
        "破碎工艺",
        "磨矿工艺",
        "浮选工艺",
        "脱水工艺",
        "碎矿功率",
        "磨矿功率",
        "钢耗",
        "定员",
        "设备选型",
      ];
    }
  },
  updated() {
    if (this.index < 10) {
      this.holderVal = "请输入" + this.searchList[this.index];
    } else if (this.index === 11) {
      this.holderVal = "人员管理暂时没必要搜索";
    } else if(this.index === 10){
      if(this.isMachineStart === 0){
      this.holderVal = "请输入破碎机及高压辊的处理能力"
      let machineParams = document.querySelectorAll('.sonItem');
      machineParams[0].className = 'sonItem active'
      }else{
        this.holderVal = `请输入${this.machineKey}的${this.machineInfo[0]}`;
      }
    }
  },
  methods: {
    fn(index) {
      for (let i = 0; i < 11; i++) {
        this.color[i] = "";
      }
      if (this.index === index) {
        this.refresh++;
      }
      this.index = index;
      if (index === 10) {
        this.status = 1;
      } else if (index === 11) {
        this.status = 0;
      } else {
        this.color[index] = "backgroundColor:#c6e2ff";
        this.color.push(0);
        this.color.pop();
        this.status = 0;
      }
    },
    goout() {
      clearCookie();
      this.$store.state.show = 0;
      this.$router.push({ path: "/success", query: { url: "login" } });
    },
    toAdd(){
      window.open(this.$store.state.baseUrl + '/dist/#/Add','_blank')
    },
    search() {
      if (this.tableShow === true) {
        this.issearch = 1;
      } else {
        this.tableShow = true;
        this.switchToTable = 1;
      }
    },
    clearSearch() {
      this.issearch = 0;
      this.switchToTable = 0;
    },
    clearInput() {
      this.input = "";
    },
    changeDetail(id) {
      this.tableShow = false;
      this.searchId = id;
    },
    changeIsSearch() {
      this.issearch = 1;
    },
    changeMachineSearch(key, info, e) {
      this.machineKey = key;
      this.machineInfo = info;

      this.isMachineStart = 1;
      this.holderVal = `请输入${key}的${info[0]}`;
      this.input = '';
      let machineParams = document.querySelectorAll('.sonItem');
      for(let i = 0; i < machineParams.length; i++){
        machineParams[i].className = 'sonItem';
      }
      e.target.className = "sonItem active";
      // 传送要搜索的设备及其关键字id
      this.machineid = info[1];
    },
  },
};
</script>
<style>
.el-header {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 0.66667rem;
  font-size: 0.2rem;
  color: white;
}

.el-aside {
  background-color: #c6e2ff;
  color: #333;
  text-align: center;
  line-height: 0.15rem;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  width: 80%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<style>
.text {
  font-size: 0.0729rem;
}

.item {
  padding: 0.08375rem;
  cursor: pointer;
}
.item:nth-child(-n + 10):hover {
  background-color: #c6e2ff;
}
.item:nth-child(11) {
  background-color: #fde2e2;
}
.item:nth-child(12) {
  background-color: #e1f3d8;
}

.box-card {
  width: 100%;
}
</style>
<style>
.box-card-equip {
  width: 1.266667rem;
  text-align: center;
}
.sonItem{
  cursor: pointer;
}
.sonItem:hover {
  background-color: #fde2e2;
}
.active {
  background: #fde2e2;
}
</style>
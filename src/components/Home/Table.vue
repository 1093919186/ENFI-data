<template>
  <el-table :data="tableData" style="width: 100%" height="600" lazy v-if="tableData.length !== 0">
    <el-table-column fixed prop="projectid" label="项目编号" width="300"></el-table-column>
    <el-table-column
      v-for="(item,i) in tableHeader"
      :key="i"
      :prop="attributes[i]"
      :label="item"
      width="300"
      show-overflow-tooltip
    ></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getAdminInfo } from "@/api/api";
import { getRawInfo } from "@/api/api";
import { getAllRawInfo } from "@/api/api";
import { getAllProcessInfo } from "@/api/api";
import { getCrushInfo } from "@/api/api";
import { getGrindInfo } from "@/api/api";
import { getSelectInfo } from "@/api/api";
import { getDehydrationInfo } from "@/api/api";
import { getGhInfo } from "@/api/api";
import { getDyInfo } from "@/api/api";
import { getSMInfo } from "@/api/api";
// 设备信息
import { getPsjgyginfo } from "@/api/api";
import { getZdsinfo } from "@/api/api";
import { getMjinfo } from "@/api/api";
import { getXlqinfo } from "@/api/api";
import { getFxjinfo } from "@/api/api";
import { getFxzinfo } from "@/api/api";
import { getCxjinfo } from "@/api/api";
import { getNsjinfo } from "@/api/api";
import { getGljinfo } from "@/api/api";
import { getGfjinfo } from "@/api/api";
import { getKyjinfo } from "@/api/api";
import { getGljfkjinfo } from "@/api/api";
import { getDsssjinfo } from "@/api/api";
import { getLxssjinfo } from "@/api/api";
import { getBinfo } from "@/api/api";
import { getJbcinfo } from "@/api/api";
import { getQzjinfo } from "@/api/api";
import { getHlinfo } from "@/api/api";
import { getYjzbtjinfo } from "@/api/api";
import { getQtinfo } from "@/api/api";
import { getJsjgjinfo } from "@/api/api";
import { getGdinfo } from "@/api/api";
import { getFminfo } from "@/api/api";
// 设备搜索api
import { searchPsjgygXhinfo } from "@/api/api";
import { searchZdsXhinfo } from "@/api/api";
import { searchMjXhinfo } from "@/api/api";
import { searchFxjXhinfo } from "@/api/api";
import { searchFxzXhinfo } from "@/api/api";
import { searchCxjXhinfo } from "@/api/api";
import { searchGfjXhinfo } from "@/api/api";
import { searchKyjXhinfo } from "@/api/api";
import { searchLxssjXhinfo } from "@/api/api";
import { searchBXhinfo } from "@/api/api";
import { searchJbcXhinfo } from "@/api/api";
import { searchQzjinfo } from "@/api/api";
import { searchQtinfo } from "@/api/api";
import { searchJsjgjinfo } from "@/api/api";
import { searchFminfo } from "@/api/api";
import { searchYjzbtjinfo } from "@/api/api";
import { searchYjzlinfo } from "@/api/api";
import { searchYjPzndinfo } from "@/api/api";
export default {
  data() {
    return {
      tableData: [],
      tableHeader: [],
      attributes: [],
      copyTableData: [],
      machineData: [],
    };
  },
  props: [
    "index",
    "input",
    "issearch",
    "refresh",
    "switchToTable",
    "machineid",
  ],
  created() {
    if (this.switchToTable === 1) {
      this.$emit("changeIsSearch");
    } else {
      this.dataStartAgain();
      this.copyTableData = this.tableData;
    }
  },
  watch: {
    index(newVal, oldVal) {
      this.index = newVal;
      this.clear();
      this.dataStartAgain();
      this.$emit("clearInput");
      this.copyTableData = this.tableData;
    },
    input(newVal, oldVal) {
      this.input = newVal;
    },
    issearch(newVal, oldVal) {
      if (this.issearch === 1) {
        if (this.input === "") {
          this.clear();
          this.dataStartAgain();
        } else {
          this.clear();
          if (this.index === 0) {
            this.dataSearch(
              ["矿石类型", "最大给矿粒度", "硬度"],
              ["mineralstype", "maxgivesize", "hardness"],
              getRawInfo,
              "raw"
            );
          } else if (this.index === 1) {
            this.tableHeader = ["项目名称", "项目规模", "投产年份", "项目投资"];
            this.attributes = [
              "projectname",
              "projectscale",
              "productionyear",
              "projectinvestment",
            ];
            getAllProcessInfo().then((res) => {
              this.tableData = this.numSearch(this.input, res, "projectscale");
            });
          } else if (this.index === 2) {
            this.dataSearch(
              ["项目名称", "项目规模", "破碎工艺"],
              ["projectname", "projectscale", "crushprocess"],
              getCrushInfo,
              "crush"
            );
          } else if (this.index === 3) {
            this.dataSearch(
              ["项目名称", "项目规模", "磨矿工艺"],
              ["projectname", "projectscale", "grindprocess"],
              getGrindInfo,
              "grind"
            );
          } else if (this.index === 4) {
            this.dataSearch(
              ["项目名称", "项目规模", "选别工艺"],
              ["projectname", "projectscale", "selectprocess"],
              getSelectInfo,
              "select"
            );
          } else if (this.index === 5) {
            this.dataSearch(
              ["项目名称", "项目规模", "脱水工艺"],
              ["projectname", "projectscale", "dehydration"],
              getDehydrationInfo,
              "dehydration"
            );
          } else if (this.index === 6) {
            this.tableHeader = ["实际处理能力", "碎矿装机功率", "磨矿装机功率"];
            this.attributes = ["sjclnl", "skzjkw", "mkzjkw"];
            getSMInfo().then((res) => {
              this.tableData = this.numSearch(this.input, res, "skzjkw");
            });
          } else if (this.index === 7) {
            this.tableHeader = ["实际处理能力", "碎矿装机功率", "磨矿装机功率"];
            this.attributes = ["sjclnl", "skzjkw", "mkzjkw"];
            getSMInfo().then((res) => {
              this.tableData = this.numSearch(this.input, res, "mkzjkw");
            });
          } else if (this.index === 8) {
            this.tableHeader = ["实际处理能力", "钢耗"];
            this.attributes = ["sjclnl", "gh"];
            getGhInfo().then((res) => {
              this.tableData = this.numSearch(this.input, res, "gh");
            });
          } else if (this.index === 9) {
            this.tableHeader = ["设计定员", "实际定员", "总定员"];
            this.attributes = ["sjdy", "shijidy", "zdy"];
            getDyInfo().then((res) => {
              this.tableData = this.numSearch(this.input, res, "shijidy");
            });
          } else if (this.index === 10) {
            let machineid = this.machineid;
            if (machineid === 0) {
              this.numSearchMachine(
                ["设备名称", "处理能力", "型号", "给矿粒度"],
                ["equipmentname", "processnum", "xh", "dmax"],
                getPsjgyginfo,
                "processnum"
              );
            } else if (machineid === 1) {
              this.dataSearch(
                ["设备名称", "处理能力", "型号", "给矿粒度"],
                ["equipmentname", "processnum", "xh", "dmax"],
                searchPsjgygXhinfo,
                "xh"
              );
            } else if (machineid === 2) {
              this.numSearchMachine(
                ["设备名称", "处理能力", "型号", "给矿粒度"],
                ["equipmentname", "processnum", "xh", "dmax"],
                getPsjgyginfo,
                "dmax"
              );
            } else if (machineid === 3) {
              this.numSearchMachine(
                ["设备名称", "处理能力", "型号"],
                ["equipmentname", "processnum", "xh"],
                getZdsinfo,
                "processnum"
              );
            } else if (machineid === 4) {
              this.dataSearch(
                ["设备名称", "处理能力", "型号"],
                ["equipmentname", "processnum", "xh"],
                searchZdsXhinfo,
                "xh"
              );
            } else if (machineid === 5) {
              this.numSearchMachine(
                ["设备名称", "处理能力", "型号", "磨矿细度", "有效容积"],
                ["equipmentname", "newgkl", "xh", "mkxd", "yxrj"],
                getMjinfo,
                "newgkl"
              );
            } else if (machineid === 6) {
              this.dataSearch(
                ["设备名称", "处理能力", "型号", "磨矿细度", "有效容积"],
                ["equipmentname", "newgkl", "xh", "mkxd", "yxrj"],
                searchMjXhinfo,
                "xh"
              );
            } else if (machineid === 7) {
              this.numSearchMachine(
                ["设备名称", "处理能力", "型号", "磨矿细度", "有效容积"],
                ["equipmentname", "newgkl", "xh", "mkxd", "yxrj"],
                getMjinfo,
                "mkxd"
              );
            } else if (machineid === 8) {
              this.numSearchMachine(
                ["设备名称", "处理能力", "型号", "磨矿细度", "有效容积"],
                ["equipmentname", "newgkl", "xh", "mkxd", "yxrj"],
                getMjinfo,
                "yxrj"
              );
            } else if (machineid === 9) {
              this.numSearchMachine(
                ["设备名称", "处理量", "给矿矿浆量", "直径", "分级细度"],
                ["equipmentname", "processnum", "gkkjl", "diameter", "fjxd"],
                getXlqinfo,
                "processnum"
              );
            } else if (machineid === 10) {
              this.numSearchMachine(
                ["设备名称", "处理量", "给矿矿浆量", "直径", "分级细度"],
                ["equipmentname", "processnum", "gkkjl", "diameter", "fjxd"],
                getXlqinfo,
                "gkkjl"
              );
            } else if (machineid === 11) {
              this.numSearchMachine(
                ["设备名称", "处理量", "给矿矿浆量", "直径", "分级细度"],
                ["equipmentname", "processnum", "gkkjl", "diameter", "fjxd"],
                getXlqinfo,
                "diameter"
              );
            } else if (machineid === 12) {
              this.numSearchMachine(
                ["设备名称", "处理量", "给矿矿浆量", "直径", "分级细度"],
                ["equipmentname", "processnum", "gkkjl", "diameter", "fjxd"],
                getXlqinfo,
                "fjxd"
              );
            } else if (machineid === 13) {
              this.numSearchMachine(
                ["设备名称", "处理量", "矿浆量", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "kjl", "shijifxsj", "xh"],
                getFxjinfo,
                "processnum"
              );
            } else if (machineid === 14) {
              this.numSearchMachine(
                ["设备名称", "处理量", "矿浆量", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "kjl", "shijifxsj", "xh"],
                getFxjinfo,
                "kjl"
              );
            } else if (machineid === 15) {
              this.numSearchMachine(
                ["设备名称", "处理量", "矿浆量", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "kjl", "shijifxsj", "xh"],
                getFxjinfo,
                "shijifxsj"
              );
            } else if (machineid === 16) {
              this.dataSearch(
                ["设备名称", "处理量", "矿浆量", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "kjl", "shijifxsj", "xh"],
                searchFxjXhinfo,
                "xh"
              );
            } else if (machineid === 17) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "fineness", "shijifxsj", "xh"],
                getFxzinfo,
                "processnum"
              );
            } else if (machineid === 18) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "fineness", "shijifxsj", "xh"],
                getFxzinfo,
                "fineness"
              );
            } else if (machineid === 19) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "fineness", "shijifxsj", "xh"],
                getFxzinfo,
                "shijifxsj"
              );
            } else if (machineid === 20) {
              this.dataSearch(
                ["设备名称", "处理量", "细度", "实际浮选时间", "规格型号"],
                ["equipmentname", "processnum", "fineness", "shijifxsj", "xh"],
                searchFxzXhinfo,
                "xh"
              );
            } else if (machineid === 21) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "磁场强度", "规格型号"],
                ["equipmentname", "processnum", "fineness", "ccqd", "xh"],
                getCxjinfo,
                "processnum"
              );
            } else if (machineid === 22) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "磁场强度", "规格型号"],
                ["equipmentname", "processnum", "fineness", "ccqd", "xh"],
                getCxjinfo,
                "fineness"
              );
            } else if (machineid === 23) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "磁场强度", "规格型号"],
                ["equipmentname", "processnum", "fineness", "ccqd", "xh"],
                getCxjinfo,
                "ccqd"
              );
            } else if (machineid === 24) {
              this.dataSearch(
                ["设备名称", "处理量", "细度", "磁场强度", "规格型号"],
                ["equipmentname", "processnum", "fineness", "ccqd", "xh"],
                searchCxjXhinfo,
                "xh"
              );
            } else if (machineid === 25) {
              this.numSearchMachine(
                ["设备名称", "处理量", "入料细度", "底流浓度", "直径"],
                ["equipmentname", "processnum", "rlxd", "dlnd", "diameter"],
                getNsjinfo,
                "processnum"
              );
            } else if (machineid === 26) {
              this.numSearchMachine(
                ["设备名称", "处理量", "入料细度", "底流浓度", "直径"],
                ["equipmentname", "processnum", "rlxd", "dlnd", "diameter"],
                getNsjinfo,
                "rlxd"
              );
            } else if (machineid === 27) {
              this.numSearchMachine(
                ["设备名称", "处理量", "入料细度", "底流浓度", "直径"],
                ["equipmentname", "processnum", "rlxd", "dlnd", "diameter"],
                getNsjinfo,
                "dlnd"
              );
            } else if (machineid === 28) {
              this.numSearchMachine(
                ["设备名称", "处理量", "入料细度", "底流浓度", "直径"],
                ["equipmentname", "processnum", "rlxd", "dlnd", "diameter"],
                getNsjinfo,
                "diameter"
              );
            } else if (machineid === 29) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "滤饼水分", "过滤面积"],
                ["equipmentname", "processnum", "xd", "lbsf", "glmj"],
                getGljinfo,
                "processnum"
              );
            } else if (machineid === 30) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "滤饼水分", "过滤面积"],
                ["equipmentname", "processnum", "xd", "lbsf", "glmj"],
                getGljinfo,
                "xd"
              );
            } else if (machineid === 31) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "滤饼水分", "过滤面积"],
                ["equipmentname", "processnum", "xd", "lbsf", "glmj"],
                getGljinfo,
                "lbsf"
              );
            } else if (machineid === 32) {
              this.numSearchMachine(
                ["设备名称", "处理量", "细度", "滤饼水分", "过滤面积"],
                ["equipmentname", "processnum", "xd", "lbsf", "glmj"],
                getGljinfo,
                "glmj"
              );
            } else if (machineid === 33) {
              this.numSearchMachine(
                ["设备名称", "流量", "出口压力", "规格型号"],
                ["equipmentname", "ll", "ckyl", "xh"],
                getGfjinfo,
                "ll"
              );
            } else if (machineid === 34) {
              this.numSearchMachine(
                ["设备名称", "流量", "出口压力", "规格型号"],
                ["equipmentname", "ll", "ckyl", "xh"],
                getGfjinfo,
                "ckyl"
              );
            } else if (machineid === 35) {
              this.dataSearch(
                ["设备名称", "流量", "出口压力", "规格型号"],
                ["equipmentname", "ll", "ckyl", "xh"],
                searchGfjXhinfo,
                "xh"
              );
            } else if (machineid === 36) {
              this.numSearchMachine(
                ["设备名称", "排气量", "压力", "型号"],
                ["equipmentname", "pql", "yl", "xh"],
                getKyjinfo,
                "pql"
              );
            } else if (machineid === 37) {
              this.numSearchMachine(
                ["设备名称", "排气量", "压力", "型号"],
                ["equipmentname", "pql", "yl", "xh"],
                getKyjinfo,
                "yl"
              );
            } else if (machineid === 38) {
              this.dataSearch(
                ["设备名称", "排气量", "压力", "型号"],
                ["equipmentname", "pql", "yl", "xh"],
                searchKyjXhinfo,
                "xh"
              );
            } else if (machineid === 39) {
              this.numSearchMachine(
                ["设备名称", "处理量"],
                ["equipmentname", "processnum"],
                getGljfkjinfo,
                "processnum"
              );
            } else if (machineid === 40) {
              this.numSearchMachine(
                ["输送量", "最大粒度", "高度", "长度", "带速"],
                ["ssongl", "zdld", "high", "length", "ds"],
                getDsssjinfo,
                "ssongl"
              );
            } else if (machineid === 41) {
              this.numSearchMachine(
                ["输送量", "最大粒度", "高度", "长度", "带速"],
                ["ssongl", "zdld", "high", "length", "ds"],
                getDsssjinfo,
                "zdld"
              );
            } else if (machineid === 42) {
              this.numSearchMachine(
                ["输送量", "最大粒度", "高度", "长度", "带速"],
                ["ssongl", "zdld", "high", "length", "ds"],
                getDsssjinfo,
                "high"
              );
            } else if (machineid === 43) {
              this.numSearchMachine(
                ["输送量", "最大粒度", "高度", "长度", "带速"],
                ["ssongl", "zdld", "high", "length", "ds"],
                getDsssjinfo,
                "length"
              );
            } else if (machineid === 44) {
              this.numSearchMachine(
                ["输送量", "最大粒度", "高度", "长度", "带速"],
                ["ssongl", "zdld", "high", "length", "ds"],
                getDsssjinfo,
                "ds"
              );
            } else if (machineid === 45) {
              this.numSearchMachine(
                ["设备名称", "设计输送量", "螺旋直径", "型号"],
                ["equipmentname", "sjssl", "lxzj", "xh"],
                getLxssjinfo,
                "sjssl"
              );
            } else if (machineid === 46) {
              this.numSearchMachine(
                ["设备名称", "设计输送量", "螺旋直径", "型号"],
                ["equipmentname", "sjssl", "lxzj", "xh"],
                getLxssjinfo,
                "lxzj"
              );
            } else if (machineid === 47) {
              this.dataSearch(
                ["设备名称", "设计输送量", "螺旋直径", "型号"],
                ["equipmentname", "sjssl", "lxzj", "xh"],
                searchLxssjXhinfo,
                "xh"
              );
            } else if (machineid === 48) {
              this.numSearchMachine(
                ["设备名称", "泵处理量", "扬程", "粒度", "规格型号"],
                ["equipmentname", "bcll", "yc", "ld", "xh"],
                getBinfo,
                "bcll"
              );
            } else if (machineid === 49) {
              this.numSearchMachine(
                ["设备名称", "泵处理量", "扬程", "粒度", "规格型号"],
                ["equipmentname", "bcll", "yc", "ld", "xh"],
                getBinfo,
                "yc"
              );
            } else if (machineid === 50) {
              this.numSearchMachine(
                ["设备名称", "泵处理量", "扬程", "粒度", "规格型号"],
                ["equipmentname", "bcll", "yc", "ld", "xh"],
                getBinfo,
                "ld"
              );
            } else if (machineid === 51) {
              this.dataSearch(
                ["设备名称", "泵处理量", "扬程", "粒度", "规格型号"],
                ["equipmentname", "bcll", "yc", "ld", "xh"],
                searchBXhinfo,
                "xh"
              );
            } else if (machineid === 52) {
              this.numSearchMachine(
                ["设备名称", "矿浆量", "实际搅拌时间", "规格型号"],
                ["equipmentname", "kjl", "shijijbsj", "xh"],
                getJbcinfo,
                "kjl"
              );
            } else if (machineid === 53) {
              this.numSearchMachine(
                ["设备名称", "矿浆量", "实际搅拌时间", "规格型号"],
                ["equipmentname", "kjl", "shijijbsj", "xh"],
                getJbcinfo,
                "shijijbsj"
              );
            } else if (machineid === 54) {
              this.dataSearch(
                ["设备名称", "矿浆量", "实际搅拌时间", "规格型号"],
                ["equipmentname", "kjl", "shijijbsj", "xh"],
                searchJbcXhinfo,
                "xh"
              );
            } else if (machineid === 55) {
              this.dataSearch(
                ["设备名称", "主钩起重量", "抓斗斗容"],
                ["equipmentname", "zgqzl", "zddr"],
                searchQzjinfo,
                "equipmentname"
              );
            } else if (machineid === 56) {
              this.numSearchMachine(
                ["设备名称", "主钩起重量", "抓斗斗容"],
                ["equipmentname", "zgqzl", "zddr"],
                getQzjinfo,
                "zgqzl"
              );
            } else if (machineid === 57) {
              this.numSearchMachine(
                ["设备名称", "主钩起重量", "抓斗斗容"],
                ["equipmentname", "zgqzl", "zddr"],
                getQzjinfo,
                "zddr"
              );
            } else if (machineid === 58) {
              this.numSearchMachine(
                ["设备名称", "起重重量"],
                ["equipmentname", "qzzl"],
                getHlinfo,
                "qzzl"
              );
            } else if (machineid === 59) {
              this.dataSearch(
                ["药剂名称", "药剂种类", "制备浓度"],
                ["yjmc", "yjzl", "pznd"],
                searchYjzbtjinfo,
                "yjmc"
              );
            } else if (machineid === 60) {
              this.dataSearch(
                ["药剂名称", "药剂种类", "制备浓度"],
                ["yjmc", "yjzl", "pznd"],
                searchYjzlinfo,
                "yjzl"
              );
            } else if (machineid === 61) {
              if (/\d+/.test(this.input)) {
                this.numSearchMachine(
                  ["药剂名称", "药剂种类", "制备浓度"],
                  ["yjmc", "yjzl", "pznd"],
                  getYjzbtjinfo,
                  "pznd"
                );
              } else {
                this.dataSearch(
                  ["药剂名称", "药剂种类", "制备浓度"],
                  ["yjmc", "yjzl", "pznd"],
                  searchYjPzndinfo,
                  "pznd"
                );
              }
            } else if (machineid === 62) {
              this.dataSearch(
                ["设备名称"],
                ["equipmentname"],
                searchQtinfo,
                "equipmentname"
              );
            } else if (machineid === 63) {
              this.dataSearch(
                ["金属结构件名称"],
                ["jsjgjmc"],
                searchJsjgjinfo,
                "jsjgjmc"
              );
            } else if (machineid === 64) {
              this.numSearchMachine(["管道规格"], ["gdgg"], getGdinfo, "gdgg");
            } else if (machineid === 65) {
              this.dataSearch(
                ["阀门规格", "工作压力"],
                ["fmgg", "gzyl"],
                searchFminfo,
                "fmgg"
              );
            } else if (machineid === 66) {
              this.numSearchMachine(
                ["阀门规格", "工作压力"],
                ["fmgg", "gzyl"],
                getFminfo,
                "gzyl"
              );
            }
          }
        }
        this.$emit("clearSearch");
      }
    },
    refresh(newVal, oldVal) {
      this.clear();
      this.dataStartAgain();
      this.$emit("clearInput");
    },
    machineid(newVal, oldVal) {
      this.machineid = newVal;
      this.clear();
      this.dataStartAgain();
      // console.log(this.machineid);
    },
  },
  methods: {
    clear() {
      this.tableData = [];
      this.machineData = [];
    },
    handleClick(e) {
      this.$emit("switch", e.projectid);
    },
    // 搜索像钢耗、处理量、这样的数字信息用这个函数
    // 负数会取到相反的结果,后续有需求在此处优化
    numSearch(input, res, key) {
      // let reg = /[+-]?(0|([1-9]\d*))(\.\d+)?/g;
      let reg = /(0|([1-9]\d*))(\.\d+)?/g;
      let ipt = "0";
      let tableData = [];
      let ids = [];
      if (input.match(reg)) {
        ipt = input.match(reg)[0];
        for (let i = 0; i < res.length; i++) {
          if (res[i][key] === "") continue;
          let arr = res[i][key].match(reg);
          if (arr) {
            for (let j = 0; j < arr.length; j++) {
              if (
                parseFloat(arr[j]) <= parseFloat(ipt) * 1.5 &&
                parseFloat(arr[j]) >= parseFloat(ipt) * 0.5 &&
                ids.indexOf(res[i]["id"]) === -1
              ) {
                ids.push(res[i]["id"]);
                tableData.push(res[i]);
              }
            }
          }
        }
      }
      return tableData;
    },
    numSearchMachine(tableHeader, attributes, fn, propName) {
      this.tableHeader = tableHeader;
      this.attributes = attributes;
      fn().then((res) => {
        this.tableData = this.numSearch(this.input, res, propName);
      });
    },
    // 页面刚出来的数据请求、刷新
    dataStart(tableHeader, attributes, fn) {
      this.tableHeader = tableHeader;
      this.attributes = attributes;
      fn().then((res) => {
        for (let i = 0; i < res.length; i++) {
          this.tableData.push(res[i]);
        }
      });
    },
    // 对页面渲染和刷新再次进行封装
    dataStartAgain() {
      if (this.index === 0) {
        this.dataStart(
          ["矿石类型", "最大给矿粒度", "硬度"],
          ["mineralstype", "maxgivesize", "hardness"],
          getAllRawInfo
        );
      } else if (this.index === 1) {
        this.dataStart(
          ["项目名称", "项目规模", "投产年份", "项目投资"],
          [
            "projectname",
            "projectscale",
            "productionyear",
            "projectinvestment",
          ],
          getAllProcessInfo
        );
      } else if (this.index === 2) {
        this.dataStart(
          ["项目名称", "项目规模", "破碎工艺"],
          ["projectname", "projectscale", "crushprocess"],
          getAllProcessInfo
        );
      } else if (this.index === 3) {
        this.dataStart(
          ["项目名称", "项目规模", "磨矿工艺"],
          ["projectname", "projectscale", "grindprocess"],
          getAllProcessInfo
        );
      } else if (this.index === 4) {
        this.dataStart(
          ["项目名称", "项目规模", "选别工艺"],
          ["projectname", "projectscale", "selectprocess"],
          getAllProcessInfo
        );
      } else if (this.index === 5) {
        this.dataStart(
          ["项目名称", "项目规模", "脱水工艺"],
          ["projectname", "projectscale", "dehydration"],
          getAllProcessInfo
        );
      } else if (this.index === 6) {
        this.dataStart(
          ["实际处理能力", "碎矿装机功率", "磨矿装机功率"],
          ["sjclnl", "skzjkw", "mkzjkw"],
          getSMInfo
        );
      } else if (this.index === 7) {
        this.dataStart(
          ["实际处理能力", "碎矿装机功率", "磨矿装机功率"],
          ["sjclnl", "skzjkw", "mkzjkw"],
          getSMInfo
        );
      } else if (this.index === 8) {
        this.dataStart(["实际处理能力", "钢耗"], ["sjclnl", "gh"], getGhInfo);
      } else if (this.index === 9) {
        this.dataStart(
          ["设计定员", "实际定员", "总定员"],
          ["sjdy", "shijidy", "zdy"],
          getDyInfo
        );
      } else if (this.index === 10) {
        let machineid = this.machineid;
        if (machineid === 0 || machineid === 1 || machineid === 2) {
          this.dataStart(
            ["设备名称", "处理能力", "型号", "给矿粒度"],
            ["equipmentname", "processnum", "xh", "dmax"],
            getPsjgyginfo
          );
        } else if (machineid === 3 || machineid === 4) {
          this.dataStart(
            ["设备名称", "处理能力", "型号"],
            ["equipmentname", "processnum", "xh"],
            getZdsinfo
          );
        } else if (
          machineid === 5 ||
          machineid === 6 ||
          machineid === 7 ||
          machineid === 8
        ) {
          this.dataStart(
            ["设备名称", "处理能力", "型号", "磨矿细度", "有效容积"],
            ["equipmentname", "newgkl", "xh", "mkxd", "yxrj"],
            getMjinfo
          );
        } else if (
          machineid === 9 ||
          machineid === 10 ||
          machineid === 11 ||
          machineid === 12
        ) {
          this.dataStart(
            ["设备名称", "处理量", "给矿矿浆量", "直径", "分级细度"],
            ["equipmentname", "processnum", "gkkjl", "diameter", "fjxd"],
            getXlqinfo
          );
        } else if (
          machineid === 13 ||
          machineid === 14 ||
          machineid === 15 ||
          machineid === 16
        ) {
          this.dataStart(
            ["设备名称", "处理量", "矿浆量", "实际浮选时间", "规格型号"],
            ["equipmentname", "processnum", "kjl", "shijifxsj", "xh"],
            getFxjinfo
          );
        } else if (
          machineid === 17 ||
          machineid === 18 ||
          machineid === 19 ||
          machineid === 20
        ) {
          this.dataStart(
            ["设备名称", "处理量", "细度", "实际浮选时间", "规格型号"],
            ["equipmentname", "processnum", "fineness", "shijifxsj", "xh"],
            getFxzinfo
          );
        } else if (
          machineid === 21 ||
          machineid === 22 ||
          machineid === 23 ||
          machineid === 24
        ) {
          this.dataStart(
            ["设备名称", "处理量", "细度", "磁场强度", "规格型号"],
            ["equipmentname", "processnum", "fineness", "ccqd", "xh"],
            getCxjinfo
          );
        } else if (
          machineid === 25 ||
          machineid === 26 ||
          machineid === 27 ||
          machineid === 28
        ) {
          this.dataStart(
            ["设备名称", "处理量", "入料细度", "底流浓度", "直径"],
            ["equipmentname", "processnum", "rlxd", "dlnd", "diameter"],
            getNsjinfo
          );
        } else if (
          machineid === 29 ||
          machineid === 30 ||
          machineid === 31 ||
          machineid === 32
        ) {
          this.dataStart(
            ["设备名称", "处理量", "细度", "滤饼水分", "过滤面积"],
            ["equipmentname", "processnum", "xd", "lbsf", "glmj"],
            getGljinfo
          );
        } else if (machineid === 33 || machineid === 34 || machineid === 35) {
          this.dataStart(
            ["设备名称", "流量", "出口压力", "规格型号"],
            ["equipmentname", "ll", "ckyl", "xh"],
            getGfjinfo
          );
        } else if (machineid === 36 || machineid === 37 || machineid === 38) {
          this.dataStart(
            ["设备名称", "排气量", "压力", "型号"],
            ["equipmentname", "pql", "yl", "xh"],
            getKyjinfo
          );
        } else if (machineid === 39) {
          this.dataStart(
            ["设备名称", "处理量"],
            ["equipmentname", "processnum"],
            getGljfkjinfo
          );
        } else if (
          machineid === 40 ||
          machineid === 41 ||
          machineid === 42 ||
          machineid === 43 ||
          machineid === 44
        ) {
          this.dataStart(
            ["输送量", "最大粒度", "高度", "长度", "带速"],
            ["ssongl", "zdld", "high", "length", "ds"],
            getDsssjinfo
          );
        } else if (machineid === 45 || machineid === 46 || machineid === 47) {
          this.dataStart(
            ["设备名称", "设计输送量", "螺旋直径", "型号"],
            ["equipmentname", "sjssl", "lxzj", "xh"],
            getLxssjinfo
          );
        } else if (
          machineid === 48 ||
          machineid === 49 ||
          machineid === 50 ||
          machineid === 51
        ) {
          this.dataStart(
            ["设备名称", "泵处理量", "扬程", "粒度", "规格型号"],
            ["equipmentname", "bcll", "yc", "ld", "xh"],
            getBinfo
          );
        } else if (machineid === 52 || machineid === 53 || machineid === 54) {
          this.dataStart(
            ["设备名称", "矿浆量", "实际搅拌时间", "规格型号"],
            ["equipmentname", "kjl", "shijijbsj", "xh"],
            getJbcinfo
          );
        } else if (machineid === 55 || machineid === 56 || machineid === 57) {
          this.dataStart(
            ["设备名称", "主钩起重量", "抓斗斗容"],
            ["equipmentname", "zgqzl", "zddr"],
            getQzjinfo
          );
        } else if (machineid === 58) {
          this.dataStart(
            ["设备名称", "起重重量"],
            ["equipmentname", "qzzl"],
            getHlinfo
          );
        } else if (machineid === 59 || machineid === 60 || machineid === 61) {
          this.dataStart(
            ["药剂名称", "药剂种类", "制备浓度"],
            ["yjmc", "yjzl", "pznd"],
            getYjzbtjinfo
          );
        } else if (machineid === 62) {
          this.dataStart(["设备名称"], ["equipmentname"], getQtinfo);
        } else if (machineid === 63) {
          this.dataStart(["金属结构件名称"], ["jsjgjmc"], getJsjgjinfo);
        } else if (machineid === 64) {
          this.dataStart(["管道规格"], ["gdgg"], getGdinfo);
        } else if (machineid === 65 || machineid === 66) {
          this.dataStart(["阀门规格", "工作压力"], ["fmgg", "gzyl"], getFminfo);
        }
      }
    },
    dataSearch(tableHeader, attributes, fn, key) {
      this.tableHeader = tableHeader;
      this.attributes = attributes;
      let obj = {
        params: {},
      };
      obj["params"][key] = this.input;
      fn(obj).then((res) => {
        for (let i = 0; i < res.length; i++) {
          this.tableData.push(res[i]);
        }
      });
    },
  },
};
</script>
<style>
.el-table__fixed::before {
  display: none;
}
.el-table__fixed-right::before {
  display: none;
}
</style>
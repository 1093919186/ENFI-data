<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    项目编号：{{searchId}}
    <el-collapse-item v-for="(item,index) in tableData" :key="index" :title="item[0]" :name="index">
      <span v-for="(a,b) in item[1]" :key="b">
        <div v-for="(c,d) in a[1]" :key="d"><span style="color:#F56C6C">{{a[2][d]}}:</span>  {{a[0][c]}}</div>------------------------------------------------------------
        ------------------------------------------------------------
      </span>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import { getDetailInfo } from "@/api/api";
export default {
  data() {
    return {
      activeNames: [0],
      tableData: [],
      headers: [
        "项目信息",
        "子项信息",
        "原矿性质",
        "精矿性质",
        "项目指标",
        "项目指标元素",
        "图纸量",
        "电能消耗",
        "材料消耗",
        "定员",
        "药剂消耗",
        "破碎机及高压辊磨机",
        "振动筛",
        "磨机",
        "水力旋流器",
        "浮选机",
        "浮选柱",
        "磁选机",
        "跳汰机",
        "摇床",
        "溜槽",
        "浓缩机",
        "过滤机",
        "干燥机",
        "鼓风机",
        "空压机",
        "给料机及放矿机",
        "皮带",
        "螺旋运输机",
        "泵",
        "搅拌槽及矿浆箱",
        "起重机",
        "葫芦",
        "药剂制备与添加",
        "其它设备",
        "金属结构件",
        "管道",
        "阀门",
        "管材、管件、法兰等",
      ],
      comparisonTable: {
        "projectname":'项目名称',
        "projectscale": '项目规模',
        "projectclient": "客户名称",
        "projectdescription": "项目描述",
        "productionyear": "投产年份",
        "projectlocation": "项目地点",
        "projectstage": "项目阶段",
        "projectinvestment":"选厂投资",
        "minerals": "主要金属矿物",
        "gangueminerals": "主要脉石矿物",
        "crushprocess": "破碎工艺",
        "grindprocess": "磨矿工艺",
        "selectprocess": "选别工艺",
        "dehydration": "脱水工艺",
        "particularity": "项目特殊性",
        "childprojectid": "子项编号",
        "childprojectname": "子项名称",
        "designer": "设计者",
        "mineralstype": "矿石类型",
        "maxgivesize": "最大给矿粒度",
        "waterpercentage": "水分",
        "truedensity": "真密度",
        "heapdensity": "堆密度",
        "staticaccumulation": "静堆积角",
        "sinkangle": "陷落角",
        "hardness": "硬度",
        "bondballworknum": "邦德球磨功指数",
        "bondballp80": "邦德球磨P80",
        "bondsagworknum": "邦德半自磨功指数",
        "a": "A",
        "b": "b",
        "ab": "A*b",
        "ta": "ta",
        "mic": "Mix",
        "dwi": "Dwi",
        "remarks": "备注",
        "concentratename": "精矿名称",
        "productionname": "产品名称",
        "yield": "产率",
        "element": "元素",
        "percentage": "品味",
        "recoveryrate": "回收率",
        "papernum": "图纸量(折合A1)",
        "sjclnl": "实际处理能力",
        "skzjkw": "碎矿装机功率",
        "mkzjkw": "磨矿装机功率",
        "fxzjkw": "浮选装机功率",
        "tszjkw": "脱水装机功率",
        "gh": "钢耗",
        "jdxh": "胶带消耗",
        "rhy": "润滑油",
        "sjdy": "设计定员",
        "shijidy": "实际定员",
        "zdy": "总定员",
        "yj": "药剂",
        "operationname": "作业名称",
        "equipmentname": "设备名称",
        "xh": "型号",
        "processnum": "处理量",
        "dmax": "给矿Dmax",
        "coolwaternum": "冷却水量",
        "coolwaterpa": "冷却水压",
        "maxfixweight": "最大检修件重量",
        "num": "数量",
        "singleweight": "单重",
        "totalweight": "总重",
        "factory": "制造厂",
        "motornum": "电机数量",
        "motorcapacity": "电机容量",
        "length": "长度",
        "width": "宽度",
        "kzlj": "控制粒径",
        "upsize": "上层筛孔",
        "downsize": "下层筛孔",
        "wetordry": "湿式或干式",
        "wetwaternum": "湿式筛分水量",
        "wetwaterpa": "湿式筛分水压",
        "sieveqj": "筛分倾角",
        "newgkl": "新给矿量",
        "bdxs": "波动系数",
        "xhfh": "循环负荷",
        "mkxd": "磨矿细度",
        "yxrj": "有效容积",
        "zdzql": "最大装球量",
        "lqsl": "冷却水量",
        "lqspa": "冷却水压力",
        "yskql": "压缩空气量",
        "yskqpa": "压缩空气压力",
        "zdjxz": "最大检修重",
        "motorxh": "电机型号",
        "motortype": "电机类型",
        "isbp": "电机变频",
        "gkkjl": "给矿矿浆量",
        "fjxd": "分级细度",
        "cycnum": "旋流器数量",
        "diameter": "直径",
        "cskzj": "沉沙口直径",
        "ylkzj": "溢流口直径",
        "qj": "倾角",
        "d50": "d50",
        "fjyl": "分级压力",
        "gknd": "给矿浓度",
        "ylnd": "溢流浓度",
        "csnd": "沉沙浓度",
        "fhl": "负荷率",
        "kjl": "矿浆量",
        "density": "浓度",
        "ph": "作业PH",
        "sjfxsj": "设计浮选时间",
        "fxjxs":"浮选机系数",
        "shijifxsj": "实际浮选时间",
        "fineness": "细度",
        "fxzcznl": "浮选柱承载能力",
        "fxzjscznl": "浮选柱计算承载能力",
        "xysbscnl": "选用设备生产能力",
        "tj": "筒径",
        "ccqd": "磁场强度",
        "zytime": "作业时间",
        "gkld": "给矿粒度",
        "sjcll": "设计处理量",
        "shijicll": "实际处理量",
        "area": "面积",
        "rlnd": "入料浓度",
        "rlxd": "入料细度",
        "dlnd": "底流浓度",
        "sjde": "设计定额",
        "shijide": "实际定额",
        "sbfhl":"设备负荷率",
        "xnjtjl": "絮凝剂添加量",
        "xnjtjkw": "絮凝剂添加功率",
        "xd": "细度",
        "glmj":"过滤面积",
        "lbsf": "滤饼水分",
        "pknd": "排矿浓度",
        "ll": "流量",
        "sjscyql": "实际生产用气量",
        "jkyl": "进口压力",
        "ckyl": "出口压力",
        "rhyzgl": "润滑油站功率",
        "fsdjrl": "风扇电机容量",
        "dtzkw": "单台总功率",
        "pql": "排气量",
        "yl": "压力",
        "kqjhzz": "空气净化装置",
        "ldsgzq": "冷冻式干燥器",
        "sfbp": "是否变频",
        "high": "高度",
        "qtoz": "起点-终点",
        "code": "编号",
        "gg": "规格",
        "ssongl": "输送量",
        "zdld":"最大粒度",
        "ds": "带速",
        "tycd":"投影长度",
        "ahbj":"凹弧半径",
        "thbj":"凸弧半径",
        "ljfs": "拉紧方式",
        "ljxc": "拉紧行程",
        "sjssl": "设计输送量",
        "lxzj": "螺旋直径",
        "bcll": "泵处理量",
        "yc": "扬程",
        "zs": "转速",
        "xl": "效率",
        "cdfs": "传动方式",
        "ld": "粒度",
        "zyph": "作业PH",
        "sjjbsj":"设计搅拌时间",
        "shijijbsj": "实际搅拌时间",
        "nmffyq": "耐磨防腐要求",
        "gzdj":"工作等级",
        "zgqzl":"主钩起重重量",
        "fgqzzl":"副钩起重重量",
        "zddr":"抓斗斗容",
        "kj":"跨距",
        "tsgd": "提升高度",
        "zgqsdjsl": "主钩起升电机数量",
        "zgqsdjrl":"主钩起升电机容量",
        "zgqsdjxh":"主钩起升电机型号",
        "fgqsdjsl":"副钩起升电机数量",
        "fgqsdjrl":"副钩起升电机容量",
        "fgqsdjxh":"副钩起升电机型号",
        "dcyxdjsl":"大车运行电机数量",
        "dcyxdjrl": "大车运行电机容量",
        "dcyxdjxh":"大车运行电机型号",
        "xcyxdjsl":"小车运行电机数量",
        "xcyxdjrl":"小车运行电机容量",
        "xcyxdjxh":"小车运行电机型号",
        "qzjyxdjsl":"起重机运行电机数量",
        "qzjyxdjrl": "起重机运行电机容量",
        "qzjyxdjxh":"起重机运行电机型号",
        "zkw": "总功率",
        "qzzl":"起重重量",
        "tsdjsl":"提升电机数量",
        "tsdjrl":"提升电机容量",
        "tsdjxh":"提升电机型号",
        "yxdjsl":"运行电机数量",
        "yxdjrl":"运行电机容量",
        "yxdjxh":"运行电机型号",
        "yjzl":"药剂种类",
        "yjmc":"药剂名称",
        "yjyl":"药剂用量(g/t)",
        "pznd":"配置浓度",
        "yjyld":"药剂用量(m3/d)",
        "zbcs":"制备次数",
        "zbcsl":"制备槽数量",
        "zbcgg":"制备槽规格",
        "ccsl":"储槽数量",
        "ccc":"储槽长",
        "cck":"储槽宽",
        "ccg":"储槽高",
        "tjds":"添加点数",
        "jsjgjmc":"金属结构件名称",
        "glqd":"管路起点",
        "glzd":"管路终点",
        "gdjz":"管道介质",
        "bz":"标准",
        "gdcz":"管道材质",
        "szyl":"设计压力",
        "gdgg":"管道规格",
        "gdcd":"管道长度",
        "gdzl":"管道重量",
        "fmmc":"阀门名称",
        "jz":"介质",
        "fmgg":"阀门规格",
        "cz":"材质",
        "gzyl":"工作压力",
        "zxjg":"执行机构",
        "glmc":"管路名称",
        "jcmc":"件材名称",
        "cl":"材料"
      },
    };
  },
  props: ["searchId"],
  mounted() {
    getDetailInfo({ params: { projectid: this.searchId } }).then((res) => {
      // console.log(res);
      for (let i = 0; i < res.length; i++) {
        if (res[i].length !== 0) {
          var rs = [];
          var rskey = [];
          for (let k = 0; k < res[i].length; k++) {
            var keyss = Object.keys(res[i][k]);
            for (let z = 0; z < keyss.length; z++) {
              if (
                res[i][k][keyss[z]] === "" ||
                keyss[z] === "dateandtime" ||
                keyss[z] === "id" ||
                keyss[z] === "projectid"||
                res[i][k][keyss[z]] === null
              ) {
                delete res[i][k][keyss[z]];
              }
            }
            keyss = Object.keys(res[i][k]);
            for(let x = 0; x < keyss.length; x++){
              if(this.comparisonTable[keyss[x]]){
                rskey.push(this.comparisonTable[keyss[x]]);
              }else{
                rskey.push(keyss[x]);
              }
            }
            if (keyss.length !== 0) {
              rs.push([res[i][k], keyss, rskey]);
            }
          }
          this.tableData.push([this.headers[i], rs]);
        }
      }
    });
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    },
  },
};
</script>
<style>
.el-collapse {
  padding: 0.066667rem 0.133333rem 0.133333rem 0.133333rem;
  background: white;
  border-bottom: none!important;
}
.el-collapse-item__header {
  color: #409eff !important;
}
</style>

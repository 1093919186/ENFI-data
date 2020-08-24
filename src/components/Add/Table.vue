<template>
  <span>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="600"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40" fixed></el-table-column>
      <el-table-column
        v-for="(item,i) in tableHeader"
        :key="i"
        :prop="attributes[i]"
        :label="item"
        width="150"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="操作" width="100" fixed="right">
        <template slot-scope="scope">
          <el-button type="danger" @click="handleClick(scope.row)" size="small">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <nav class="pull-right" style="margin-top: 10px">
      <el-pagination
        background
        layout="prev, pager, next"
        :pager-count="pageCount"
        :total="total"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </nav>
    <div style="margin: 10px 0 0 0;" v-if="tableData.length!==0">
      <el-button type="danger" @click="deleteSelection()">删除选中</el-button>
    </div>
    <div style="margin: 10px 0 10px 0;">
      <el-button type="success" plain @click="download()">模板文件下载</el-button>
    </div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://localhost:80/ENFI-data/index.php/?s=Upload/index"
      name="files"
      :data="{k:index}"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="handleSuccess"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传xlsx/xls文件,不要修改模板文件的名字,尽量不要太大哈!!!</div>
    </el-upload>
  </span>
</template>

<script>
import { tableProjectinfo } from "@/api/api";
import { tableChildinfo } from "@/api/api";
import { tableRawinfo } from "@/api/api";
import { tableConcentrateoreinfo } from "@/api/api";
import { tableIcatorsinfo } from "@/api/api";
import { tableDrawinginfo } from "@/api/api";
import { tablePowerconsumption } from "@/api/api";
import { tableMaterialconsumption } from "@/api/api";
import { tablePeople } from "@/api/api";
import { tableYjconsumption } from "@/api/api";
import { tableYjconsumptionyj } from "@/api/api";
import { tableMachineposui } from "@/api/api";
import { tableMachinesieve } from "@/api/api";
import { tableMachinemill } from "@/api/api";
import { tableMachinecyclone } from "@/api/api";
import { tableMachineflotation } from "@/api/api";
import { tableMachineflocolumn } from "@/api/api";
import { tableMachinecxj } from "@/api/api";
import { tableMachinett } from "@/api/api";
import { tableMachineyc } from "@/api/api";
import { tableMachinelc } from "@/api/api";
import { tableMachinensj } from "@/api/api";
import { tableMachineglj } from "@/api/api";
import { tableMachinegzj } from "@/api/api";
import { tableMachinegfj } from "@/api/api";
import { tableMachinekyj } from "@/api/api";
import { tableMachinegljfkj } from "@/api/api";
import { tableMachinepd } from "@/api/api";
import { tableMachinelxysj } from "@/api/api";
import { tableMachineb } from "@/api/api";
import { tableMachinejbckjx } from "@/api/api";
import { tableMachineqzj } from "@/api/api";
import { tableMachinehl } from "@/api/api";
import { tableMachineyj } from "@/api/api";
import { tableMachineother } from "@/api/api";
import { tableMachinejsjgj } from "@/api/api";
import { tableMachinegd } from "@/api/api";
import { tableMachinefm } from "@/api/api";
import { tableMachineetc } from "@/api/api";
import { Delete } from "@/api/api";
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      tableHeader: [],
      attributes: [],
      fileList: [],
      total: 0,
      pageSize: 11,
      pageCount: 5,
      pid: 1,
    };
  },
  props: ["index", "input", "issearch", "refresh"],
  created() {
    this.dataStartAgain();
  },
  watch: {
    index(newVal, oldVal) {
      this.index = newVal;
      this.clear();
      this.dataStartAgain();
      this.$emit("clearInput");
      // this.copyTableData = this.tableData;
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
              this.tableHeader,
              this.attributes,
              tableProjectinfo
            );
          } else if (this.index === 1) {
            this.dataSearch(this.tableHeader, this.attributes, tableChildinfo);
          } else if (this.index === 2) {
            this.dataSearch(this.tableHeader, this.attributes, tableRawinfo);
          } else if (this.index === 3) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableConcentrateoreinfo
            );
          } else if (this.index === 4) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableIcatorsinfo
            );
          } else if (this.index === 5) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableDrawinginfo
            );
          } else if (this.index === 6) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tablePowerconsumption
            );
          } else if (this.index === 7) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMaterialconsumption
            );
          } else if (this.index === 8) {
            this.dataSearch(this.tableHeader, this.attributes, tablePeople);
          } else if (this.index === 9) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableYjconsumption
            );
          } else if (this.index === 10) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableYjconsumptionyj
            );
          } else if (this.index === 11) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachineposui
            );
          } else if (this.index === 12) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinesieve
            );
          } else if (this.index === 13) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinemill
            );
          } else if (this.index === 14) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinecyclone
            );
          } else if (this.index === 15) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachineflotation
            );
          } else if (this.index === 16) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachineflocolumn
            );
          } else if (this.index === 17) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinecxj);
          } else if (this.index === 18) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinett);
          } else if (this.index === 19) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachineyc);
          } else if (this.index === 20) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinelc);
          } else if (this.index === 21) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinensj);
          } else if (this.index === 22) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachineglj);
          } else if (this.index === 23) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinegzj);
          } else if (this.index === 24) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinegfj);
          } else if (this.index === 25) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinekyj);
          } else if (this.index === 26) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinegljfkj
            );
          } else if (this.index === 27) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinepd);
          } else if (this.index === 28) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinelxysj
            );
          } else if (this.index === 29) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachineb);
          } else if (this.index === 30) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinejbckjx
            );
          } else if (this.index === 31) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachineqzj);
          } else if (this.index === 32) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinehl);
          } else if (this.index === 33) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachineyj);
          } else if (this.index === 34) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachineother
            );
          } else if (this.index === 35) {
            this.dataSearch(
              this.tableHeader,
              this.attributes,
              tableMachinejsjgj
            );
          } else if (this.index === 36) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinegd);
          } else if (this.index === 37) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachinefm);
          } else if (this.index === 38) {
            this.dataSearch(this.tableHeader, this.attributes, tableMachineetc);
          }
        }
      }
      this.$emit("clearSearch");
    },
  },
  methods: {
    deleteSelection() {
      Delete({
        params: {
          tableid: this.index,
          id: JSON.stringify(this.multipleSelection),
        },
      }).then((res) => {
        if (res === 1) {
          this.$store.state.isok = "1";
          this.$router.push({ path: "/success", query: { url: "Add" } });
        } else {
          this.$store.state.isok = "0";
          this.$router.push({ path: "/success", query: { url: "Add" } });
        }
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(e) {
      this.deleteItem(this.index, e.id);
    },
    deleteItem(tableID, id) {
      if (tableID === 0) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 1) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 2) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 3) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 4) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 5) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 6) {
        Delete({
          params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
        }).then((res) => {
          if (res === 1) {
            this.$store.state.isok = "1";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          } else {
            this.$store.state.isok = "0";
            this.$router.push({ path: "/success", query: { url: "Add" } });
          }
        });
      } else if (tableID === 7) {
        this.delOperation(tableID, id);
      } else if (tableID === 8) {
        this.delOperation(tableID, id);
      } else if (tableID === 9) {
        this.delOperation(tableID, id);
      } else if (tableID === 10) {
        this.delOperation(tableID, id);
      } else if (tableID === 11) {
        this.delOperation(tableID, id);
      } else if (tableID === 12) {
        this.delOperation(tableID, id);
      } else if (tableID === 13) {
        this.delOperation(tableID, id);
      } else if (tableID === 14) {
        this.delOperation(tableID, id);
      } else if (tableID === 15) {
        this.delOperation(tableID, id);
      } else if (tableID === 16) {
        this.delOperation(tableID, id);
      } else if (tableID === 17) {
        this.delOperation(tableID, id);
      } else if (tableID === 18) {
        this.delOperation(tableID, id);
      } else if (tableID === 19) {
        this.delOperation(tableID, id);
      } else if (tableID === 20) {
        this.delOperation(tableID, id);
      } else if (tableID === 21) {
        this.delOperation(tableID, id);
      } else if (tableID === 22) {
        this.delOperation(tableID, id);
      } else if (tableID === 23) {
        this.delOperation(tableID, id);
      } else if (tableID === 24) {
        this.delOperation(tableID, id);
      } else if (tableID === 25) {
        this.delOperation(tableID, id);
      } else if (tableID === 26) {
        this.delOperation(tableID, id);
      } else if (tableID === 27) {
        this.delOperation(tableID, id);
      } else if (tableID === 28) {
        this.delOperation(tableID, id);
      } else if (tableID === 29) {
        this.delOperation(tableID, id);
      } else if (tableID === 30) {
        this.delOperation(tableID, id);
      } else if (tableID === 31) {
        this.delOperation(tableID, id);
      } else if (tableID === 32) {
        this.delOperation(tableID, id);
      } else if (tableID === 33) {
        this.delOperation(tableID, id);
      } else if (tableID === 34) {
        this.delOperation(tableID, id);
      } else if (tableID === 35) {
        this.delOperation(tableID, id);
      } else if (tableID === 36) {
        this.delOperation(tableID, id);
      } else if (tableID === 37) {
        this.delOperation(tableID, id);
      } else if (tableID === 38) {
        this.delOperation(tableID, id);
      }
    },
    delOperation(tableID, id) {
      Delete({
        params: { tableid: tableID, id: JSON.stringify([{ id: id }]) },
      }).then((res) => {
        if (res === 1) {
          this.$store.state.isok = "1";
          this.$router.push({ path: "/success", query: { url: "Add" } });
        } else {
          this.$store.state.isok = "0";
          this.$router.push({ path: "/success", query: { url: "Add" } });
        }
      });
    },
    clear() {
      this.tableData = [];
    },
    dataStart(tableHeader, attributes, fn, pid) {
      this.tableHeader = tableHeader;
      this.attributes = attributes;
      fn({ params: { page: pid } }).then((res) => {
        this.total = parseInt(res.shift());
        for (let i = 0; i < res.length; i++) {
          this.tableData.push(res[i]);
        }
      });
    },
    dataStartAgain(pid) {
      if (this.index === 0) {
        this.dataStart(
          [
            "项目编号",
            "项目名称",
            "项目规模",
            "客户名称",
            "项目描述",
            "项目投产年份",
            "项目地点",
            "项目阶段",
            "选厂投资",
            "主要金属矿物",
            "主要脉石矿物",
            "破碎工艺",
            "磨矿工艺",
            "选别工艺",
            "脱水工艺",
            "项目特殊性",
          ],
          [
            "projectid",
            "projectname",
            "projectscale",
            "projectclient",
            "projectdescription",
            "productionyear",
            "projectlocation",
            "projectstage",
            "projectinvestment",
            "minerals",
            "gangueminerals",
            "crushprocess",
            "grindprocess",
            "selectprocess",
            "dehydration",
            "particularity",
          ],
          tableProjectinfo,
          pid
        );
      } else if (this.index === 1) {
        this.dataStart(
          ["项目编号", "子项编号", "子项名称", "设计者"],
          ["projectid", "childprojectid", "childprojectname", "designer"],
          tableChildinfo,
          pid
        );
      } else if (this.index === 2) {
        this.dataStart(
          [
            "项目编号",
            "矿石类型",
            "最大给矿粒度",
            "水分",
            "真密度",
            "堆密度",
            "静堆积角",
            "陷落角",
            "硬度",
            "邦德球磨功指数",
            "邦德球磨P80",
            "邦德半自磨功指数",
            "A",
            "b",
            "A*b",
            "ta",
            "Mix",
            "Dwi",
            "备注",
          ],
          [
            "projectid",
            "mineralstype",
            "maxgivesize",
            "waterpercentage",
            "truedensity",
            "heapdensity",
            "staticaccumulation",
            "sinkangle",
            "hardness",
            "bondballworknum",
            "bondballp80",
            "bondsagworknum",
            "a",
            "b",
            "ab",
            "ta",
            "mic",
            "dwi",
            "remarks",
          ],
          tableRawinfo,
          pid
        );
      } else if (this.index === 3) {
        this.dataStart(
          [
            "项目编号",
            "精矿名称",
            "真密度",
            "堆密度",
            "静堆积角",
            "陷落角",
            "水分",
            "备注",
          ],
          [
            "projectid",
            "concentratename",
            "truedensity",
            "heapdensity",
            "staticaccumulation",
            "sinkangle",
            "waterpercentage",
            "remarks",
          ],
          tableConcentrateoreinfo,
          pid
        );
      } else if (this.index === 4) {
        this.dataStart(
          ["项目编号", "产品名称", "产率", "元素名称", "品位", "回收率"],
          [
            "projectid",
            "productionname",
            "yie",
            "element",
            "percentage",
            "recoveryrate",
          ],
          tableIcatorsinfo,
          pid
        );
      } else if (this.index === 5) {
        this.dataStart(
          ["项目编号", "子项编号", "图纸量折合A1"],
          ["projectid", "childprojectid", "papernum"],
          tableDrawinginfo,
          pid
        );
      } else if (this.index === 6) {
        this.dataStart(
          [
            "项目编号",
            "实际处理能力",
            "碎矿装机功率",
            "磨浮装机功率",
            "浮选装机功率",
            "脱水装机功率",
          ],
          ["projectid", "sjclnl", "skzjkw", "mkzjkw", "fxzjkw", "tszjkw"],
          tablePowerconsumption,
          pid
        );
      } else if (this.index === 7) {
        this.dataStart(
          ["项目编号", "实际处理能力", "钢耗", "胶带消耗", "润滑油"],
          ["projectid", "sjclnl", "gh", "jdxh", "rhy"],
          tableMaterialconsumption,
          pid
        );
      } else if (this.index === 8) {
        this.dataStart(
          ["项目编号", "子项编号", "设计定员", "实际定员", "总定员"],
          ["projectid", "childprojectid", "sjdy", "shijidy", "zdy"],
          tablePeople,
          pid
        );
      } else if (this.index === 9) {
        this.dataStart(
          ["项目编号", "实际处理能力"],
          ["projectid", "sjclnl"],
          tableYjconsumption,
          pid
        );
      } else if (this.index === 10) {
        this.dataStart(
          ["项目编号", "药剂"],
          ["projectid", "yj"],
          tableYjconsumptionyj,
          pid
        );
      } else if (this.index === 11) {
        this.dataStart(
          [
            "项目编号",
            "子项编号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "给矿Dmax",
            "冷却水量",
            "冷却水压",
            "最大检修件重量",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "dmax",
            "coolwaternum",
            "coolwaterpa",
            "maxfixweight",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "remarks",
          ],
          tableMachineposui,
          pid
        );
      } else if (this.index === 12) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "长度",
            "宽度",
            "设计处理量",
            "控制粒径",
            "上层筛孔",
            "下层筛孔",
            "湿式或干式",
            "湿式筛分水量",
            "湿式筛分水压",
            "筛分倾角",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "length",
            "width",
            "processnum",
            "dmax",
            "upsize",
            "downsize",
            "wetordry",
            "wetwaternum",
            "wetwaterpa",
            "sieveqj",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "remarks",
          ],
          tableMachinesieve,
          pid
        );
      } else if (this.index === 13) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "新给矿量",
            "波动系数",
            "循环负荷",
            "磨矿细度",
            "有效容积",
            "最大装球量",
            "冷却水量",
            "冷却水压力",
            "压缩空气量",
            "压缩空气压力",
            "数量",
            "单重",
            "总重",
            "最大检修重",
            "制造厂",
            "电动机数量",
            "电机容量",
            "电机型号",
            "电机类型",
            "是否变频",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "newgkl",
            "bdxs",
            "xhfh",
            "mkxd",
            "yxrj",
            "zdzql",
            "lqsl",
            "lqspa",
            "yskql",
            "yskqpa",
            "num",
            "singleweight",
            "totalweight",
            "zdjxz",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "motortype",
            "isbp",
            "remarks",
          ],
          tableMachinemill,
          pid
        );
      } else if (this.index === 14) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "处理量",
            "给矿矿浆量",
            "波动系数",
            "分级细度",
            "型号",
            "旋流器数量(备用)",
            "直径",
            "沉沙口直径",
            "溢流口直径",
            "倾角",
            "d50",
            "分级压力",
            "给矿浓度",
            "溢流浓度",
            "沉沙浓度",
            "循环负荷",
            "负荷率",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "processnum",
            "gkkjl",
            "bdxs",
            "fjxd",
            "xh",
            "cycnum",
            "diameter",
            "cskzj",
            "ylkzj",
            "qj",
            "d50",
            "fjyl",
            "gknd",
            "ylnd",
            "csnd",
            "xhfh",
            "fhl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "remarks",
          ],
          tableMachinecyclone,
          pid
        );
      } else if (this.index === 15) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "矿浆量",
            "浓度",
            "作业PH",
            "波动系数",
            "设计浮选时间",
            "浮选机系数",
            "实际浮选时间",
            "数量",
            "单重",
            "总重",
            "最大检修重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "kjl",
            "density",
            "ph",
            "bdxs",
            "sjfxsj",
            "fxjxs",
            "shijifxsj",
            "num",
            "singleweight",
            "totalweight",
            "zdjxz",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachineflotation,
          pid
        );
      } else if (this.index === 16) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "浓度",
            "矿浆量",
            "细度",
            "设计浮选时间",
            "波动系数",
            "浮选机系数",
            "实际浮选时间",
            "浮选柱承载能力",
            "浮选柱计算承载能力",
            "负荷率",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "density",
            "kjl",
            "fineness",
            "sjfxsj",
            "bdxs",
            "fxjxs",
            "shijifxsj",
            "fxzcznl",
            "fxzjscznl",
            "fhl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachineflocolumn,
          pid
        );
      } else if (this.index === 17) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "浓度",
            "物理细度",
            "波动系数",
            "矿浆量",
            "选用设备生产能力",
            "筒径",
            "长度",
            "磁场强度",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "density",
            "fineness",
            "bdxs",
            "kjl",
            "xysbscnl",
            "tj",
            "length",
            "ccqd",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachinecxj,
          pid
        );
      } else if (this.index === 18) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "浓度",
            "作业时间",
            "数量",
            "单重",
            "总重",
            "最大检修重",
            "制造厂",
            "电机数量",
            "电机容量",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "density",
            "zytime",
            "num",
            "singleweight",
            "totalweight",
            "zdjxz",
            "factory",
            "motornum",
            "motorcapacity",
            "remarks",
          ],
          tableMachinett,
          pid
        );
      } else if (this.index === 19) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "给矿粒度",
            "波动系数",
            "浓度",
            "作业时间",
            "设计处理量",
            "实际处理量",
            "负荷率",
            "数量",
            "单重",
            "总重",
            "最大检修重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "gkld",
            "bdxs",
            "density",
            "zytime",
            "sjcll",
            "shijicll",
            "fhl",
            "num",
            "singleweight",
            "totalweight",
            "zdjxz",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachineyc,
          pid
        );
      } else if (this.index === 20) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "给矿粒度",
            "波动系数",
            "浓度",
            "作业时间",
            "设计处理量",
            "实际处理量",
            "负荷率",
            "数量",
            "单重",
            "总重",
            "最大检修重",
            "制造厂",
            "电机数量",
            "电机容量",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "gkld",
            "bdxs",
            "density",
            "zytime",
            "sjcll",
            "shijicll",
            "fhl",
            "num",
            "singleweight",
            "totalweight",
            "zdjxz",
            "factory",
            "motornum",
            "motorcapacity",
            "remarks",
          ],
          tableMachinelc,
          pid
        );
      } else if (this.index === 21) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "直径",
            "面积",
            "处理量",
            "波动系数",
            "入料浓度",
            "入料细度",
            "底流浓度",
            "设计定额",
            "实际定额",
            "设备负荷率",
            "絮凝剂添加量",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "絮凝剂添加功率",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "diameter",
            "area",
            "processnum",
            "bdxs",
            "rlnd",
            "rlxd",
            "dlnd",
            "sjde",
            "shijide",
            "sbfhl",
            "xnjtjl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "xnjtjkw",
            "remarks",
          ],
          tableMachinensj,
          pid
        );
      } else if (this.index === 22) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "细度",
            "过滤面积",
            "入料浓度",
            "底流浓度",
            "滤饼水分",
            "设计定额",
            "实际定额",
            "设备负荷率",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "xd",
            "glmj",
            "rlnd",
            "dlnd",
            "lbsf",
            "sjde",
            "shijide",
            "sbfhl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachineglj,
          pid
        );
      } else if (this.index === 23) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "细度",
            "入料浓度",
            "排矿浓度",
            "设计定额",
            "实际定额",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电动机数量",
            "电动机容量",
            "电动机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "xd",
            "rlnd",
            "pknd",
            "sjde",
            "shijide",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachinegzj,
          pid
        );
      } else if (this.index === 24) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "流量",
            "实际生产用气量",
            "进口压力",
            "出口压力",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "润滑油站功率",
            "风扇电机容量",
            "单台总功率",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "ll",
            "sjscyql",
            "jkyl",
            "ckyl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "rhyzgl",
            "fsdjrl",
            "dtzkw",
            "remarks",
          ],
          tableMachinegfj,
          pid
        );
      } else if (this.index === 25) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "排气量",
            "压力",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "空气净化装置",
            "冷冻式干燥器",
            "是否变频",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "pql",
            "yl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "kqjhzz",
            "ldsgzq",
            "sfbp",
            "remarks",
          ],
          tableMachinekyj,
          pid
        );
      } else if (this.index === 26) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "宽度",
            "长度",
            "高度",
            "处理量",
            "Dmax",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "是否变频",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "width",
            "length",
            "high",
            "processnum",
            "dmax",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "sfbp",
            "remarks",
          ],
          tableMachinegljfkj,
          pid
        );
      } else if (this.index === 27) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "起点-终点",
            "编号",
            "规格",
            "输送量",
            "最大粒度",
            "长度",
            "倾角",
            "高度",
            "带速",
            "投影长度",
            "凹弧半径",
            "凸弧半径",
            "拉紧方式",
            "拉紧行程",
            "数量",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "qtoz",
            "code",
            "gg",
            "ssongl",
            "zdld",
            "length",
            "qj",
            "high",
            "ds",
            "tycd",
            "ahbj",
            "thbj",
            "ljfs",
            "ljxc",
            "num",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachinepd,
          pid
        );
      } else if (this.index === 28) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "编号",
            "设备名称",
            "型号",
            "设计输送量",
            "螺旋直径",
            "长度",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "code",
            "equipmentname",
            "xh",
            "sjssl",
            "lxzj",
            "length",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "remarks",
          ],
          tableMachinelxysj,
          pid
        );
      } else if (this.index === 29) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "处理量",
            "泵处理量",
            "扬程",
            "转速",
            "效率",
            "传动方式",
            "粒度",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "是否变频",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "processnum",
            "bcll",
            "yc",
            "zs",
            "xl",
            "cdfs",
            "ld",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "sfbp",
            "remarks",
          ],
          tableMachineb,
          pid
        );
      } else if (this.index === 30) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "浓度",
            "作业ph",
            "矿浆量",
            "设计搅拌时间",
            "实际搅拌时间",
            "波动系数",
            "直径",
            "高度",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "耐磨防腐要求",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "density",
            "zyph",
            "kjl",
            "sjjbsj",
            "shijijbsj",
            "bdxs",
            "diameter",
            "high",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "nmffyq",
            "remarks",
          ],
          tableMachinejbckjx,
          pid
        );
      } else if (this.index === 31) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "工作等级",
            "主钩起重量",
            "副钩起重重量",
            "抓斗斗容",
            "跨距",
            "提升高度",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "主钩起升电机数量",
            "主钩起升电机容量",
            "主钩起升电机型号",
            "副钩起升电机数量",
            "副钩起升电机容量",
            "副钩起升电机型号",
            "大车运行电机数量",
            "大车运行电机容量",
            "大车运行电机型号",
            "小车运行电机数量",
            "小车运行电机容量",
            "小车运行电机型号",
            "起重机运行电机数量",
            "起重机运行电机容量",
            "起重机运行电机型号",
            "总功率",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "gzdj",
            "zgqzl",
            "fgqzzl",
            "zddr",
            "kj",
            "tsgd",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "zgqsdjsl",
            "zgqsdjrl",
            "zgqsdjxh",
            "fgqsdjsl",
            "fgqsdjrl",
            "fgqsdjxh",
            "dcyxdjsl",
            "dcyxdjrl",
            "dcyxdjxh",
            "xcyxdjsl",
            "xcyxdjrl",
            "xcyxdjxh",
            "qzjyxdjsl",
            "qzjyxdjrl",
            "qzjyxdjxh",
            "zkw",
            "remarks",
          ],
          tableMachineqzj,
          pid
        );
      } else if (this.index === 32) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "起重重量",
            "提升高度",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "提升电机数量",
            "提升电机容量",
            "提升电机型号",
            "运行电机数量",
            "运行电机容量",
            "运行电机型号",
            "总功率",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "qzzl",
            "tsgd",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "tsdjsl",
            "tsdjrl",
            "tsdjxh",
            "yxdjsl",
            "yxdjrl",
            "yxdjxh",
            "zkw",
            "remarks",
          ],
          tableMachinehl,
          pid
        );
      } else if (this.index === 33) {
        this.dataStart(
          [
            "项目编号",
            "药剂种类",
            "药剂名称",
            "药剂用量",
            "配置浓度",
            "药剂用量(m3/d)",
            "制备次数",
            "制备槽数量",
            "制备槽规格",
            "储槽数量",
            "储槽长",
            "储槽宽",
            "储槽高",
            "添加点数",
          ],
          [
            "projectid",
            "yjzl",
            "yjmc",
            "yjyl",
            "pznd",
            "yjyld",
            "zbcs",
            "zbcsl",
            "zbcgg",
            "ccsl",
            "ccc",
            "cck",
            "ccg",
            "tjds",
          ],
          tableMachineyj,
          pid
        );
      } else if (this.index === 34) {
        this.dataStart(
          [
            "工程代号",
            "子项代号",
            "作业名称",
            "设备名称",
            "型号",
            "规格",
            "数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "电机型号",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "equipmentname",
            "xh",
            "gg",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "motorxh",
            "remarks",
          ],
          tableMachineother,
          pid
        );
      } else if (this.index === 35) {
        this.dataStart(
          [
            "项目编号",
            "子项编号",
            "金属结构件名称",
            "金属结构件数量",
            "单重",
            "总重",
          ],
          [
            "projectid",
            "childprojectid",
            "jsjgjmc",
            "num",
            "singleweight",
            "totalweight",
          ],
          tableMachinejsjgj,
          pid
        );
      } else if (this.index === 36) {
        this.dataStart(
          [
            "项目编号",
            "子项编号",
            "作业名称",
            "标号",
            "管路起点",
            "管路终点",
            "数量",
            "管道介质",
            "标准",
            "管道材质",
            "设计压力",
            "管道规格",
            "管道长度",
            "管道重量",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "operationname",
            "code",
            "glqd",
            "glzd",
            "num",
            "gdjz",
            "bz",
            "gdcz",
            "szyl",
            "gdgg",
            "gdcd",
            "gdzl",
            "remarks",
          ],
          tableMachinegd,
          pid
        );
      } else if (this.index === 37) {
        this.dataStart(
          [
            "项目编号",
            "子项编号",
            "阀门名称",
            "介质",
            "阀门规格",
            "材质",
            "工作压力",
            "阀门数量",
            "单重",
            "总重",
            "制造厂",
            "电机数量",
            "电机容量",
            "执行机构",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "fmmc",
            "jz",
            "fmgg",
            "cz",
            "gzyl",
            "num",
            "singleweight",
            "totalweight",
            "factory",
            "motornum",
            "motorcapacity",
            "zxjg",
            "remarks",
          ],
          tableMachinefm,
          pid
        );
      } else if (this.index === 38) {
        this.dataStart(
          [
            "项目编号",
            "子项编号",
            "管路名称",
            "件材名称",
            "规格",
            "材料",
            "数量",
            "单重",
            "总重",
            "标准",
            "备注",
          ],
          [
            "projectid",
            "childprojectid",
            "glmc",
            "jcmc",
            "gg",
            "cl",
            "num",
            "singleweight",
            "totalweight",
            "bz",
            "remarks",
          ],
          tableMachineetc,
          pid
        );
      }
    },
    dataSearch(tableHeader, attributes, fn) {
      this.tableHeader = tableHeader;
      this.attributes = attributes;
      let reg = new RegExp(this.input);
      fn().then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (reg.test(res[i]["projectid"])) {
            this.tableData.push(res[i]);
          }
        }
      });
    },
    download() {
      window.location.href = `http://localhost:80/ENFI-data/public/files/${this.index}.xlsx`;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response) {
      if (response === 1) {
        this.$store.state.isok = "1";
        this.$router.push({ path: "/Success", query: { url: "Add" } });
      } else {
        this.$store.state.isok = "0";
        this.$router.push({ path: "/Success", query: { url: "Add" } });
      }
    },
    handleCurrentChange(pid) {
      this.clear();
      this.dataStartAgain(pid);
    },
  },
};
</script>
<style>
.el-upload__input {
  display: none !important;
}
</style>
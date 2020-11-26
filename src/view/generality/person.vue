<template>
  <el-row>
    <appHeader pageTitle="从业人员共性安全可视化"></appHeader>
    <el-row class="generality-company flex-between">
      <!-- left -->
      <el-col class="div-border person-column flex-column-between" :span="7">
        <el-col class="person-left-item">
          <el-col class="echarts-title-bg">广州市交通运输行业的从业人员数据(2019年)</el-col>
          <el-col class="person-left-top-subtitle">全市交通运输从业人员：<span>1.2万</span></el-col>
          <el-col class="echarts-col">
            <chart :options="pieOption" style="width: 100%; height: 100%" :autoresize="true"></chart>
          </el-col>
        </el-col>
        <el-col class="person-left-item">
          <el-col>
            <el-col class="person-left-bottom-title" :span="18">白云区交通运输从业人员：<span>2000</span></el-col>
            <el-col :span="6">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col class="echart-area">
            <chart style="width: 100%; height: 100%" :options="barOption" :autoresize="true"></chart>
          </el-col>
        </el-col>
      </el-col>
      <!-- center -->
      <el-col class="div-border person-column" :span="12">
        <el-col class="person-center-top">
          <el-col>
            <el-col class="echarts-title-bg" :span="16">广州市交通运输行业从业人员状态信息(2019年)</el-col>
            <el-col class="flex" :span="8">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col class="person-center-top-t flex">
            <el-col :span="4">正常: 300人</el-col>
            <el-col :span="4">锁定: 300人</el-col>
            <el-col :span="4">吊销: 300人</el-col>
            <el-col :span="4">注销: 300人</el-col>
            <el-col :span="4">待上岗: 300人</el-col>
          </el-col>
          <el-col class="person-center-top-m flex">
            <el-col class="item item1">30</el-col>
            <el-col class="item item2">30</el-col>
            <el-col class="item item3">30</el-col>
            <el-col class="item item4">30</el-col>
            <el-col class="item item5">30</el-col>
            <el-col class="item item6">30</el-col>
            <el-col class="item item7">30</el-col>
          </el-col>
          <el-col class="person-center-top-b flex">
            <el-col class="flex">
              <span class="block-icon item1"></span>
              <span class="legend-txt">人车对应</span>
            </el-col>
            <el-col class="flex">
              <span class="block-icon item2"></span>
              <span class="legend-txt">交通违法</span>
            </el-col>
            <el-col class="flex">
              <span class="block-icon item3"></span>
              <span class="legend-txt">营运违章</span>
            </el-col>
            <el-col class="flex">
              <span class="block-icon item4"></span>
              <span class="legend-txt">交通事故</span>
            </el-col>
            <el-col class="flex">
              <span class="block-icon item5"></span>
              <span class="legend-txt">动态监控违规</span>
            </el-col>
            <el-col class="flex">
              <span class="block-icon item6"></span>
              <span class="legend-txt">酒驾</span>
            </el-col>
            <el-col class="flex">
              <span class="block-icon item7"></span>
              <span class="legend-txt">醉驾</span>
            </el-col>
          </el-col>
        </el-col>
        <el-col class="person-center-middle">
          <el-col>
            <el-col :span="16" class="echarts-title-bg">隐患驾驶员数量情况(2019年)</el-col>
            <el-col :span="8" class="flex">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col class="echart-area">
            <chart style="width: 100%; height: 100%" :options="singleLine" :autoresize="true"></chart>
          </el-col>
        </el-col>
        <el-col class="person-center-bottom">
          <el-col>
            <el-col :span="12" class="echarts-title-bg">交通运输行业业务的发展变化趋势</el-col>
            <el-col :span="12" class="flex">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col :span="12" class="echart-area">
            <el-col class="flex" style="height: 40px">
              <span style="font-size: 12px; margin-right: 10px">环比</span>
              <el-date-picker v-model="date1" placeholder="请选择"></el-date-picker>
            </el-col>
            <el-col class="echarts-box">
              <chart style="width: 100%; height: 100%" :options="chainRatio" :autoresize="true"></chart>
            </el-col>
          </el-col>
          <el-col :span="12" class="echart-area">
            <el-col class="flex" style="height: 40px">
              <span style="font-size: 12px; margin-right: 10px">同比</span>
              <el-date-picker v-model="date1" placeholder="请选择"></el-date-picker>
            </el-col>
            <el-col class="echarts-box">
              <chart style="width: 100%; height: 100%" :options="chainRatio" :autoresize="true"></chart>
            </el-col>
          </el-col>
        </el-col>
      </el-col>
      <!-- right -->
      <el-col class="person-column" :span="4">
        <el-col class="echarts-title-bg"> 重点关注企业 </el-col>
        <el-col class="conpany-left-col2">
          <el-table style="width: 100%" :data="tableData" height="100%" size="mini" :showHeader="false">
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="name"></el-table-column>
          </el-table>
        </el-col>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import globalPerson from "@/mixin/globalPerson.js";
export default {
  mixins: [globalPerson],
  data() {
    return {
      date1: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      tableData: [
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
        {
          name: "公司名称企业名称",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.generality-company {
  height: calc(100vh - 120px);
  padding: 15px 20px 10px;
}

.person-column {
  height: 100%;
}

.person-left-item {
  height: 49%;
}

.echarts-col {
  height: calc(100% - 60px);
}

.echarts-box {
  height: calc(100% - 40px);
}

.person-left-top-subtitle {
  height: 30px;
  line-height: 30px;
  color: #48ffc9;
  font-size: 12px;

  span {
    font-size: 20px;
  }
}

.person-left-bottom-title {
  height: 30px;
  line-height: 30px;
  color: #48ffc9;
  font-size: 14px;

  span {
    font-size: 22px;
  }
}

.echart-area {
  height: calc(100% - 30px);
}

.conpany-left-col2 {
  height: calc(100% - 30px);
  background: rgba(0, 45, 145, 0.5);
}

.person-center-top {
  height: 26%;

  .item1 {
    background: #3054d9;
  }

  .item2 {
    background: #00d3f9;
  }

  .item3 {
    background: #67a57b;
  }

  .item4 {
    background: #9cc54e;
  }

  .item5 {
    background: #d5b16d;
  }

  .item6 {
    background: #ffaf9f;
  }

  .item7 {
    background: #ff5050;
  }
}

.person-center-top-t {
  height: 40px;
  font-size: 14px;
}

.person-center-top-m {
  height: 30px;
  background: #fff;

  .item {
    line-height: 30px;
    text-align: center;
  }
}

.person-center-top-b {
  height: 30px;

  .block-icon {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
  }

  .legend-txt {
    font-size: 12px;
  }
}

.person-center-middle,
.person-center-bottom {
  height: 37%;
}

.el-table {
  font-size: 12px;
  color: #fff;
  background: transparent !important;

  /deep/ td {
    border: 0 none !important;
  }

  /deep/ .cell {
    line-height: normal !important;
  }

  /deep/ th,
  /deep/ tr,
  /deep/ .el-table__row:hover > td,
  /deep/ .el-table__expanded-cell {
    background: transparent !important;
  }
}

.el-table:before {
  height: 0;
}

.el-select {
  .el-input {
    width: auto !important;
  }

  /deep/ .el-input__icon {
    line-height: 24px !important;
  }

  /deep/ .el-input__inner {
    height: 24px !important;
    line-height: 24px !important;
    background-color: #021132 !important;
    font-size: 12px !important;
    color: #fff !important;
  }
}

.el-date-editor.el-input,
.el-date-editor.el-input.el-input__inner {
  width: 40% !important;
}

.el-date-editor {
  /deep/ .el-input__inner {
    height: 24px !important;
    line-height: 24px !important;
    background-color: #021132 !important;
    font-size: 12px !important;
    color: #fff !important;
  }

  /deep/ .el-input__icon {
    line-height: 24px !important;
  }
}
</style>

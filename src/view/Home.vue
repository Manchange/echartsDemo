<template>
  <el-row>
    <appHeader pageTitle="安全生产数据分析"></appHeader>
    <el-row class="home">
      <el-col class="home-col flex-column-between" :span="9">
        <el-col class="div-border echarts-box" :span="24">
          <el-row class="echarts-title">
            <el-col class="echarts-title-col echarts-title-bg" :span="16">交通违法分析(2019年)</el-col>
            <el-col class="echarts-title-col flex-end" :span="8">
              <el-select v-model="value" placeholder="请选择辖区">
                <el-option v-for="(item, index) in selectOption" :key="index" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-col>
          </el-row>
          <chart style="width: 100%; height: 86%" :options="barOption" :autoresize="true"></chart>
        </el-col>
        <el-col class="div-border echarts-box" :span="24">
          <el-row class="echarts-title">
            <el-col class="echarts-title-col echarts-title-bg" :span="11">隐患分析(2019年)</el-col>
            <el-col class="echarts-title-col flex-end" :span="13">
              <el-select v-model="value" placeholder="请选择行业" style="margin-right: 5px">
                <el-option v-for="(item, index) in selectOption" :key="index" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-date-picker type="month" v-model="checkMonth" placeholder="选择月份"></el-date-picker>
            </el-col>
          </el-row>
          <chart style="width: 100%; height: 86%" :options="pictorialBarOption" :autoresize="true"></chart>
        </el-col>
      </el-col>

      <el-col class="home-col flex-column-between echarts-right" :span="15">
        <el-col class="div-border echarts-right-top">
          <el-row class="echarts-title">
            <el-col class="echarts-title-col echarts-title-bg" :span="14">营运违章分析(2019年)</el-col>
            <el-col class="echarts-title-col flex-end" :span="10">
              <el-select v-model="value" placeholder="请选择行业" style="margin-right: 5px">
                <el-option v-for="(item, index) in selectOption" :key="index" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-date-picker type="month" v-model="checkMonth" placeholder="选择月份"></el-date-picker>
            </el-col>
          </el-row>
          <chart style="width: 100%; height: 86%" :options="lineOptions" :autoresize="true"></chart>
        </el-col>
        <el-col class="div-border echarts-right-bottom">
          <el-row class="echarts-title">
            <el-col class="echarts-title-col echarts-title-bg" :span="12">安全生产事故和违法分析(2019年)</el-col>
            <el-col class="echarts-title-col flex-end" :span="12">
              <el-select v-model="value" placeholder="请选择行业" style="margin-right: 5px">
                <el-option v-for="(item, index) in selectOption" :key="index" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择辖区" style="margin-right: 5px">
                <el-option v-for="(item, index) in selectOption" :key="index" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择季度" style="margin-right: 5px">
                <el-option v-for="(item, index) in selectOption" :key="index" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="flex" style="height: 87%">
            <el-col :span="18" style="height: 100%">
              <el-table class="echarts-table" style="width: 100%" :data="tableData" height="100%" size="mini">
                <el-table-column type="index" label="排名" align="center"></el-table-column>
                <el-table-column prop="address" label="辖区" align="center"> </el-table-column>
                <el-table-column prop="industry" label="行业" align="center"> </el-table-column>
                <el-table-column prop="weifala" label="违法立案" align="center"> </el-table-column>
                <el-table-column prop="weifazl" label="违法总量" align="center"> </el-table-column>
                <el-table-column prop="shigula" label="事故立案" align="center"> </el-table-column>
                <el-table-column prop="shiguzl" label="事故总量" align="center"> </el-table-column>
              </el-table>
            </el-col>
            <el-col class="flex-column-center" :span="6" style="height: 100%">
              <el-col style="height: 50%">
                <chart style="width: 100%; height: 80%" :options="pieOption1" :autoresize="true"></chart>
                <el-col class="pie-name">违法占比</el-col>
              </el-col>
              <el-col style="height: 50%">
                <chart style="width: 100%; height: 80%" :options="pieOption1" :autoresize="true"></chart>
                <el-col class="pie-name">事故占比</el-col>
              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import echartsMixin from "@/mixin/echartsMixin.js";
export default {
  name: "Home",
  mixins: [echartsMixin],
  data() {
    return {
      checkMonth: null,
      selectOption: [
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
    };
  },
};
</script>

<style lang="less">
.home {
  height: calc(100vh - 120px);
  padding: 0 20px;

  .home-col {
    padding: 10px 0;
    height: 100%;
  }

  .echarts-right {
    padding-left: 10px;
  }
}

.echarts-box {
  height: 49%;
}

.echarts-right-top {
  height: 44%;
}

.echarts-right-bottom {
  height: 55%;
}

.echarts-title {
  height: 40px;
  font-size: 14px;
  color: #fff;
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

.echarts-title-bg {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 14px;
  background: linear-gradient(90deg, rgba(48, 83, 175, 1), rgba(2, 17, 50, 1));
}

.el-date-editor.el-input,
.el-date-editor.el-input.el-input__inner {
  width: auto !important;
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

.el-table {
  font-size: 12px;
  color: #fff;
  background: transparent !important;
  /deep/ th,
  /deep/ tr,
  /deep/ .el-table__row:hover > td,
  /deep/ .el-table__expanded-cell {
    color: #fff;
    background: transparent !important;
  }
}
.pie-name {
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.cell-class-name {
  text-align: center;
}
</style>

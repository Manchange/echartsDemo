<template>
  <el-row>
    <appHeader pageTitle="企业共性安全可视化"></appHeader>
    <!-- content -->
    <el-row class="generality-company flex-between">
      <!-- left -->
      <el-col class="div-border company-col flex-column-between" :span="6">
        <!-- left-top -->
        <el-col class="company-right-top">
          <el-col class="echarts-title-bg">全市的交通运输营运企业数量(2019年)</el-col>
          <el-col class="company-right-top-content flex">
            <el-col class="company-right-top-item" :class="{ 'company-right-top-item-border': (index + 1) % 4 != 0 }" v-for="(item, index) in blockList" :key="index">
              <el-col class="company-right-top-item-num">{{ item.value }}</el-col>
              <el-col class="company-right-top-item-name">{{ item.name }}</el-col>
            </el-col>
          </el-col>
        </el-col>
        <!-- left-middle -->
        <el-col class="company-right-middle">
          <el-col class="flex">
            <el-select class="area-select" v-model="value" placeholder="请选择辖区">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
            <el-select class="industry-select" v-model="value" placeholder="请选择行业">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-col>
          <el-col class="company-right-middle-content">
            <el-col class="item flex-between">
              <div class="item-box flex-center">
                <div style="text-align: center; font-size: 12px">
                  <div>123</div>
                  <div class="item-box-title">营业中</div>
                </div>
              </div>
              <div class="item-box item-box2 flex-center">
                <div style="text-align: center; font-size: 12px">
                  <div>123</div>
                  <div class="item-box-title">整改中</div>
                </div>
              </div>
              <div class="item-box item-box3 flex-center">
                <div style="text-align: center; font-size: 12px">
                  <div>123</div>
                  <div class="item-box-title">歇业</div>
                </div>
              </div>
            </el-col>
            <el-col class="item flex-between">
              <div class="item-box item-box4 flex-center">
                <div style="text-align: center; font-size: 12px">
                  <div>123</div>
                  <div class="item-box-title">停业</div>
                </div>
              </div>
              <div class="item-box item-box5 flex-center">
                <div style="text-align: center; font-size: 12px">
                  <div>123</div>
                  <div class="item-box-title">已注销</div>
                </div>
              </div>
              <div class="item-box item-box6 flex-center">
                <div style="text-align: center; font-size: 12px">
                  <div>123</div>
                  <div class="item-box-title">违法未处理</div>
                </div>
              </div>
            </el-col>
          </el-col>
        </el-col>
        <!-- right-bottom -->
        <el-col class="company-right-bottom">
          <el-col class="flex">
            <el-select class="area-select" v-model="value" placeholder="请选择辖区">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
            <el-select class="industry-select" v-model="value" placeholder="请选择行业">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-col>
          <el-col class="company-right-bottom-content">
            <el-col class="bottom-content-top">
              <el-col :span="12" class="item">
                <chart style="width: 100%; height: 100%" :options="liquidFill" :autoresize="true"></chart>
              </el-col>
              <el-col :span="12" class="item flex-column-between">
                <el-col>
                  <el-col>
                    <el-col :span="12">
                      <div class="label-icon label-icon-use"></div>
                    </el-col>
                    <el-col :span="12">已分配指标</el-col>
                  </el-col>
                  <el-col>
                    <el-col :span="12">
                      <div class="label-icon"></div>
                    </el-col>
                    <el-col :span="12">空余指标</el-col>
                  </el-col>
                </el-col>
                <el-col>
                  <el-col>
                    <el-col :span="12">总指标数:</el-col>
                    <el-col :span="12">1000</el-col>
                  </el-col>
                  <el-col>
                    <el-col :span="12">已分配指标:</el-col>
                    <el-col :span="12">700</el-col>
                  </el-col>
                  <el-col>
                    <el-col :span="12">空余指标:</el-col>
                    <el-col :span="12">300</el-col>
                  </el-col>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="12" class="bottom-content-bottom">营运指标分配情况</el-col>
          </el-col>
        </el-col>
      </el-col>
      <!-- center -->
      <el-col class="company-col flex-column-between" :span="13">
        <el-col class="div-border company-center-col">
          <el-col style="height: 100%" :span="12">
            <el-col class="echarts-title-bg"> 企业安全责任书签订数据(2019年) </el-col>
            <el-col class="company-center-chart">
              <chart style="width: 100%; height: 100%" :options="jzbOptions" :autoresize="true"></chart>
            </el-col>
            <el-col class="bottom-content-bottom">企业安全责任书签订完成率</el-col>
          </el-col>
          <el-col style="height: 100%" :span="12">
            <el-col class="echarts-title-bg"> 企业诚信考评等级数据(2019年) </el-col>
            <el-col class="flex">
              <el-select class="area-select" v-model="value" placeholder="请选择辖区">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select class="industry-select" v-model="value" placeholder="请选择行业">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-col>
            <el-col class="company-center-right-chart">
              <chart style="width: 100%; height: 100%" :options="gaugeOptions" :autoresize="true"></chart>
            </el-col>
            <el-col class="bottom-content-bottom">企业诚信考评等级</el-col>
          </el-col>
        </el-col>
        <el-col class="div-border company-center-col">
          <el-col style="height: 100%" :span="12">
            <el-col class="echarts-title-bg"> 企业安全情况(2019年) </el-col>
            <el-col class="company-center-bottom-left-content">
              <el-col class="item flex">
                <el-col>
                  <div class="title">安全行政处罚数量</div>
                  <div class="num">
                    9856
                    <span class="num-txt">次</span>
                  </div>
                </el-col>
                <el-col>
                  <div class="title">致人死亡交通事故数量</div>
                  <div class="num">
                    9856
                    <span class="num-txt">万</span>
                  </div>
                </el-col>
              </el-col>
              <el-col class="item flex">
                <el-col>
                  <div class="title">严重影响的恶劣事件</div>
                  <div class="num">
                    9856
                    <span class="num-txt">件</span>
                  </div>
                </el-col>
                <el-col>
                  <div class="title">安全生产奖惩数量</div>
                  <div class="num">
                    9856
                    <span class="num-txt">万</span>
                  </div>
                </el-col>
              </el-col>
              <el-col class="item noborder flex">
                <el-col>
                  <div class="title">投诉举报数量</div>
                  <div class="num">
                    9856
                    <span class="num-txt">万</span>
                  </div>
                </el-col>
                <el-col>
                  <div class="title">年度考核</div>
                  <div class="num num-color">一般</div>
                </el-col>
              </el-col>
            </el-col>
          </el-col>
          <el-col style="height: 100%" :span="12">
            <el-col class="echarts-title-bg"> 企业增长趋势 </el-col>
            <el-col class="company-center-right-select">
              <el-select class="area-select" v-model="value" placeholder="请选择辖区">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select class="industry-select" v-model="value" placeholder="请选择行业">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select class="area-select" v-model="value" placeholder="请选择辖区">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select class="industry-select" v-model="value" placeholder="请选择行业">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-col>
            <el-col class="company-center-right-content">
              <chart style="width: 100%; height: 100%" :options="lineOptions" :autoresize="true"></chart>
            </el-col>
          </el-col>
        </el-col>
      </el-col>
      <!-- right -->
      <el-col class="company-col" :span="4">
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
import globalCompany from "@/mixin/globalCompany.js";
export default {
  mixins: [globalCompany],
  data() {
    return {
      blockList: [
        {
          name: "客运",
          value: 123,
        },
        {
          name: "普货",
          value: 123,
        },
        {
          name: "危运",
          value: 123,
        },
        {
          name: "公交",
          value: 123,
        },
        {
          name: "出租车",
          value: 123,
        },
        {
          name: "客运站场",
          value: 123,
        },
        {
          name: "货运站场",
          value: 123,
        },
      ],
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
  padding: 10px 0px;
}

.company-col {
  height: 100%;
}

.company-center-col {
  height: 49%;
}

.conpany-left-col2 {
  height: calc(100% - 30px);
  background: rgba(0, 45, 145, 0.5);
}

.company-right-top {
  height: 26%;
}

.company-right-middle,
.company-right-bottom {
  height: 37%;
  padding-top: 20px;
}

.company-right-top-content {
  flex-wrap: wrap;
  height: calc(100% - 30px);
}

.company-right-top-item {
  text-align: center;
  width: 25%;

  .company-right-top-item-num {
    color: #00cfa1;
    font-weight: bold;
    font-size: 18px;
  }

  .company-right-top-item-name {
    font-size: 12px;
    color: #84e1ff;
  }
}

.company-right-top-item-border {
  border-right: 1px solid rgba(0, 255, 252, 0.5);
}

.area-select {
  width: 30%;
}

.industry-select {
  width: 40%;
}

.company-right-bottom-content,
.company-right-middle-content {
  height: calc(100% - 30px);
}

.company-right-middle-content {
  .item {
    height: 50%;

    .item-box {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      box-shadow: 0px 0px 24px 0px rgba(19, 187, 90, 1) inset;
      animation: opacitybox 2s linear infinite alternate;

      .item-box-title {
        color: rgba(19, 187, 90, 1);
      }
    }

    .item-box2 {
      box-shadow: 0px 0px 24px 0px rgba(210, 255, 0, 1) inset;
      animation: opacitybox2 2s linear infinite alternate;

      .item-box-title {
        color: rgba(210, 255, 0, 1);
      }
    }

    .item-box3 {
      box-shadow: 0px 0px 24px 0px rgba(84, 205, 255, 1) inset;
      animation: opacitybox3 2s linear infinite alternate;

      .item-box-title {
        color: rgba(84, 205, 255, 1);
      }
    }

    .item-box4 {
      box-shadow: 0px 0px 24px 0px rgba(255, 64, 64, 1) inset;
      animation: opacitybox4 2s linear infinite alternate;

      .item-box-title {
        color: rgba(255, 64, 64, 1);
      }
    }

    .item-box5 {
      box-shadow: 0px 0px 24px 0px rgba(255, 150, 0, 1) inset;
      animation: opacitybox5 2s linear infinite alternate;

      .item-box-title {
        color: rgba(255, 150, 0, 1);
      }
    }

    .item-box6 {
      box-shadow: 0px 0px 24px 0px rgba(199, 47, 255, 1) inset;
      animation: opacitybox6 2s linear infinite alternate;

      .item-box-title {
        color: rgba(199, 47, 255, 1);
      }
    }
  }
}

.company-right-bottom-content {
  .bottom-content-top {
    height: calc(100% - 30px);

    .item {
      height: 100%;
      padding-top: 20px;
      font-size: 12px;

      .label-icon {
        width: 50%;
        height: 16px;
        background: #061f56;
      }

      .label-icon-use {
        background: #fff106;
      }
    }
  }
}

.bottom-content-bottom {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #40d4f5;
  font-size: 12px;
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

.company-center-chart {
  height: calc(100% - 60px);
}

.company-center-right-chart {
  height: calc(100% - 90px);
}

.company-center-bottom-left-content {
  height: calc(100% - 30px);
  padding: 0 20px;

  .item {
    border-bottom: 1px solid #fff;
    height: 33.333%;

    .title {
      font-size: 12px;
      color: #0096ff;
    }

    .num {
      font-size: 30px;
      padding-top: 4px;
      color: #ff6c6c;
    }

    .num-txt {
      font-size: 12px;
    }

    .num-color {
      color: #f8f248;
    }
  }

  .noborder {
    border-bottom: 0 none;
  }
}

.company-center-right-select {
  padding-top: 10px;

  .area-select,
  .industry-select {
    width: 24%;
  }
}

.company-center-right-content {
  height: calc(100% - 70px);
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

@keyframes opacitybox {
  0% {
    box-shadow: 0px 0px 24px 0px rgba(19, 187, 90, 0.5) inset;
    transform: translateY(0%);
  }

  100% {
    box-shadow: 0px 0px 24px 0px rgba(19, 187, 90, 1) inset;
    transform: translateY(10%);
  }
}

@keyframes opacitybox2 {
  0% {
    box-shadow: 0px 0px 24px 0px rgba(210, 255, 0, 0.5) inset;
    transform: translateY(0%);
  }

  100% {
    box-shadow: 0px 0px 24px 0px rgba(210, 255, 0, 1) inset;
    transform: translateY(10%);
  }
}

@keyframes opacitybox3 {
  0% {
    box-shadow: 0px 0px 24px 0px rgba(84, 205, 255, 0.5) inset;
    transform: translateY(0%);
  }

  100% {
    box-shadow: 0px 0px 24px 0px rgba(84, 205, 255, 1) inset;
    transform: translateY(10%);
  }
}

@keyframes opacitybox4 {
  0% {
    box-shadow: 0px 0px 24px 0px rgba(255, 64, 64, 0.5) inset;
    transform: translateY(0%);
  }

  100% {
    box-shadow: 0px 0px 24px 0px rgba(255, 64, 64, 1) inset;
    transform: translateY(10%);
  }
}

@keyframes opacitybox5 {
  0% {
    box-shadow: 0px 0px 24px 0px rgba(255, 150, 0, 0.5) inset;
    transform: translateY(0%);
  }

  100% {
    box-shadow: 0px 0px 24px 0px rgba(255, 150, 0, 1) inset;
    transform: translateY(10%);
  }
}

@keyframes opacitybox6 {
  0% {
    box-shadow: 0px 0px 24px 0px rgba(199, 47, 255, 0.5) inset;
    transform: translateY(0%);
  }

  100% {
    box-shadow: 0px 0px 24px 0px rgba(199, 47, 255, 1) inset;
    transform: translateY(10%);
  }
}
</style>

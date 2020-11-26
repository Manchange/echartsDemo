<template>
  <el-row class="app-header">
    <el-col class="table-left" :span="8" :xs="8" :sm="8">
      2019年12月1日 星期二 上午11:05 8℃
    </el-col>
    <el-col class="table-title" :span="8" :xs="8" :sm="8">{{pageTitle}}</el-col>
    <el-col class="table-right" :span="8" :xs="8" :sm="8"></el-col>
  </el-row>
</template>

<script>
  export default{
    props:{
      pageTitle:{
        type: String,
        default: '安全生产数据分析'
      }
    },
    data(){
      return{

      };
    },
  }
</script>

<style scoped>
  .app-header {
    height: 90px;
    background: linear-gradient(0deg, rgba(48, 83, 175, 1), rgba(2, 17, 50, 1));
    background: url('../../static/images/header-bg.png');
    background-size: 100% 90px;
    color: #fff;
  }

  .table-left,
  .table-right{
    line-height: 50px;
    padding: 0 30px;
  }
  .table-right{
    text-align: right;
  }

  .table-title {
    line-height: 90px;
    font-size: 30px;
    text-align: center;
    text-align: center;
  }
</style>

<template>
  <div id="app">
    <el-row class="app-content">
      <router-view />
      <el-row class="app-footer">
        <el-col class="flex" :span="14" :class="'tabActive'+activeTab">
          <div class="footer-tab" :class="{footerTabActive: activeTab===1}" @click="toPage(1)">安全生产数据分析</div>
          <div class="footer-tab" :class="{footerTabActive: activeTab===2}" @click="toPage(2)">企业共性安全可视化</div>
          <div class="footer-tab" :class="{footerTabActive: activeTab===3}" @click="toPage(3)">从业人员共性安全可视化</div>
          <div class="footer-tab" :class="{footerTabActive: activeTab===4}" @click="toPage(4)">车辆共性安全可视化</div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeTab: 1,
      }
    },
    created() {
      let activeTab = sessionStorage.getItem('activeTab')*1;
      this.activeTab = activeTab?activeTab:1;
    },
    methods:{
      toPage(activeTab){
        this.activeTab = activeTab;
        sessionStorage.setItem('activeTab',activeTab)
        if(activeTab === 1){
          this.$router.push({
            path: '/'
          })
        }else if(activeTab === 2){
          this.$router.push({
            path: '/generalityCompany'
          })
        }else if(activeTab === 3){
          this.$router.push({
            path: '/generalityperson'
          })
        }else if(activeTab === 4){
          this.$router.push({
            path: '/generalityCart'
          })
        }
      }
    }
  }
</script>

<style>
  @import"./styles/common.css";

  .app-content {
    background: url('../static/images/all-bg.png') no-repeat;
    background-size: 100vw 100%;
    background-position: 0 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #021132;
    background-size: 100vw 100%;
    background-position: 0 0;
  }

  .app-footer {
    height: 30px;
  }

  .footer-tab{
    height: 30px;
    line-height: 30px;
    color: #618CFF;
    font-size: 12px;
    flex: 1;
    text-align: center;
  }
  .footerTabActive{
    color: #fff;
  }
  .tabActive1{
    background: url('../static/images/tab-active1.png');
    background-size: 100% 30px;
  }
  .tabActive2{
    background: url('../static/images/tab-active2.png');
    background-size: 100% 30px;
  }
  .tabActive3{
    background: url('../static/images/tab-active3.png');
    background-size: 100% 30px;
  }
  .tabActive4{
    background: url('../static/images/tab-active4.png');
    background-size: 100% 30px;
  }
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)
//引入vuex和状态管理

const store = new Vuex.Store({
  state: {
    checkProblemList:[]
  },
  mutations:{
     // 草稿保存 第三步 因为数据是单独分开的 所以需要用到vuex
    getProblemList(state,value) {
       state.checkProblemList = value
    }
  },
  modules: {
    tagsView
  },
  getters
})

export default store

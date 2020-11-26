
import Cookies from 'js-cookie'

const state = {
  activeTab: 1,
}

const mutations = {
	CHANGE_ACTIVE_TAB: (state,activeTab) => {
		state.activeTab = activeTab;
	    if (state.sidebar.opened) {
	      Cookies.set('sidebarStatus', 1)
	    } else {
	      Cookies.set('sidebarStatus', 0)
	    }
	}
}

const actions = { //修改侧边栏状态
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
}


export default {
  namespaced: true,
  actions,
  mutations,
  state,
}

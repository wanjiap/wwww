import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//配置持久化
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,//存储的位置
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  modules: {
    
  },
  //引入插件
  plugins: [vuexLocal.plugin]
})

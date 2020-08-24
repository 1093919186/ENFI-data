import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 这里放置公用数据
        baseUrl: 'http://localhost:80/ENFI-data',
        time: 3,
        // 记录页面初始状态
        show: 0,
        // 记录删除页面的初始index
        delIndex: 0,
        // 确定细节页面谁开头
        machineStart: -1
    },
    mutations: {},
    actions: {},
    modules: {}
})
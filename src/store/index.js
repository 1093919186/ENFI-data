import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 这里放置公用数据
        baseUrl: 'http://localhost:8081/#',
        time: 3,
        show: 0
    },
    mutations: {},
    actions: {},
    modules: {}
})
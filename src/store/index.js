import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: '首页',
        total: 0
    },
    mutations: {
        changeTitle(state, title) {
            state.title = title
        },
        getTotal(state, num) {
            state.total = state.total + num
        }
    }
})

export default store
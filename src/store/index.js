import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tag from './modules/tag'
import menu from "@/store/modules/menu";

Vue.use(Vuex)

export default new Vuex.Store({
    getters: {
        token: (state) => state.user.token,
        userInfo: (state) => state.user.userInfo,
        nav: (state) => state.user.nav,
        tags: (state) => state.tag.tagsArr,
        menu: (state) => state.menu.collapse,
        isCollapse: state => state.menu.collapse,
        // col: (state) => state.tagModule.coll
    },
    modules: {
        user,
        tag,
        menu
    }

})

import Vue from "vue";
import Vuex from "vuex"
import {app} from '../main';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        lang: ''
    },
    mutations: {
        setLanguage(state, language) {
            app.$i18n.locale = language;
            state.lang = language;
            localStorage.setItem('language', language);
        }
    },
    actions: {
        SET_LANGUAGE( { commit }, language) {
            commit('setLanguage', language);
        },
    }
})
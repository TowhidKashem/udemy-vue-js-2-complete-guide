import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // counter: 0,
        value: 0
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
    // getters: {
    //     // doubleCounter(state) {
    //     //     return state.counter * 2;
    //     // },
    //     // clickCounter(state) {
    //     //     return state.counter + ' Clicks';
    //     // },
    //     value(state) {
    //         return state.value;
    //     }
    // },
    // mutations: {
    //     // increment(state, payload) {
    //     //     state.counter += payload;
    //     // },
    //     // decrement(state, payload) {
    //     //     state.counter -= payload;
    //     // },
    //     updateValue(state, payload) {
    //         state.value = payload;
    //     }
    // },
    // actions: {
    //     // // Gets passed in "context" object, which has methods in it like commit
    //     // increment(context, payload) {
    //     //     context.commit('increment', payload);
    //     // },
    //     // decrement({ commit }, payload) {
    //     //     commit('decrement', payload);
    //     // },
    //     // asyncIncrement({ commit }, payload) {
    //     //     setTimeout(() => {
    //     //         commit('increment', payload.by)
    //     //     }, payload.duration);
    //     // },
    //     // asyncDecrement({ commit }, payload) {
    //     //     setTimeout(() => {
    //     //         commit('decrement', payload.by)
    //     //     }, payload.duration);
    //     // },
    //     updateValue({ commit }, payload) {
    //         commit('updateValue', payload);
    //     }
    // },
    modules: {
        counter
    }
});

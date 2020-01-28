import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sentToSon: false,
    sentToGrandson: false,
    sonCardDelivered: false,
    grandsonCardDelivered: false
  },
  mutations: {
    SET_SENT_TO_SON(state, payload) {
      state.sentToSon = payload;
    },
    SET_SENT_TO_GRANDSON(state, payload) {
      state.sentToGrandson = payload;
    },
    SET_DELIVERED_STATUS(state, payload) {
      state[payload.child] = payload.isDelivered;
    }
  },
  actions: {
    sendToSon(context, payload) {
      context.commit("SET_SENT_TO_SON", payload);
    },
    sendToGrandson(context, payload) {
      context.commit("SET_SENT_TO_GRANDSON", payload);
    },
    cardReceived({ commit }, payload) {
      commit("SET_DELIVERED_STATUS", payload);
    }
  },
  getters: {
    sentToSon: state => state.sentToSon,
    sentToGrandson: state => state.sentToGrandson,
    sonCardDelivered: state => state.sonCardDelivered,
    grandsonCardDelivered: state => state.grandsonCardDelivered
  },
  modules: {}
});

import {
  getChartsData
} from './api'


export default {
  namespaced: true,
  state: {
    pages:{}
  },
  mutations: {
    SHOWLOADING (state) {
    },
    HIDELOADING (state) {
    },
    SETDATAS (state, {data}) {
      
    },
    CLEARSTATE (state) {
    }
  },
  actions: {
    async getPageCache ({ commit, state }, payload) {
      const { data } = await getChartsData(payload);
      console.log(data);
      state.pages = data;

    },
    async getCacheOriginData ({ commit, state }, payload) {
      const { data } = await getChartsData(payload);

    }
  }
}

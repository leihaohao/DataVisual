import {
  getChartsData
} from './api'


export default {
  namespaced: true,
  state: {
  },
  mutations: {
    SHOWLOADING (state) {
      state.loading = true;
    },
    HIDELOADING (state) {
      state.loading = false;
    }
  },
  actions: {
    //搜索-装备态势
    async getSearchZbts ({ commit, state }, payload) {
      const { data } = await api.getSearchZbts(payload);
      state.SearchZbts.one = dataFilter.filterSearchZbts(data) ;
      state.SearchZbts.two = await api.getSearchZbtsTwo({pmnm:data[0]['pmnm']});
    },
    //搜索-装备态势二级
    async getSearchZbtsTwo ({ commit, state }, payload) {
      const { data } = await api.getSearchZbtsTwo(payload);
      state.SearchZbts.two = dataFilter.filterSearchZbtsTwo(data);
    }
  }
}

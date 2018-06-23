
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
    async getData ({ commit, state }, payload) {
      
    },
  }
}

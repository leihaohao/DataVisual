import api from './api';
import dataFilter from '@/libs/dataFilter';


export default {
  namespaced: true,
  state: {
    //页面缓存
    pageCache:[],
    //页面拼装好的数据
    pageComponents:[],
    //下面都是不同组件的数据
    ZbslBzs:{
      data:'',
      chartMain:'',
      chartBprate:'',
      chartKyrate:'',
      chartZbrate:'',
    },
    ZcslZbs:{
      data:'',
      chartMain:'',
    },
    ZcslQcs:{
      data:'',
      chartMain:'',
    }
  },
  mutations: {
    SETPAGESCACHE(state,{data}){
      state.pageCache = data;
    },
    //拼装页面数据，数据在state上
    SETPAGECOMPONENTS(state,{data}){
      const cloneData =  JSON.parse(JSON.stringify(state.pageCache));
      const setComponents =  (data)=>{
        for(let i=0;i<data.length;i++){
          if(data[i]['origin']){
           data[i]['data'] = state[data[i]['origin']][data[i]['ex']];
           /*if(data[i]['ex'] === 'title'){
            data[i]['top'] = state[data[i]['origin']][data[i]['ex']];
           }
           if(data[i]['ex2'] === 'bottom'){
            data[i]['bottom'] = state[data[i]['origin']][data[i]['ex2']];
           }*/
          }
          if(data[i]['components']){
             setComponents(data[i]['components']);
          }
        }
      }
      setComponents(cloneData);
      state.pageComponents = cloneData;
    },
  },
  actions: {
    //获取页面数据缓存及分发请求
    async getPageCache ({dispatch, commit, state }, payload) {
      const { data } = await api.getPageCache(payload);
      commit({type:'SETPAGESCACHE',data});
    },
    //根据页面数据分发请求
    async getPageComponents ({dispatch, commit, state }, payload) {
      const reswait = [];
      let cloneData;
      const reqOrigin =  (data)=>{
        for(let i=0;i<data.length;i++){
          if(data[i]['origin']){
            reswait.push(dispatch('get'+data[i]['origin']));
          }
          if(data[i]['components']){
             reqOrigin(data[i]['components']);
          }
        }
      }
      reqOrigin(state.pageCache);
      await Promise.all(reswait);
      window.sessionStorage.setItem('pageCache',JSON.stringify(state.pageCache));
      commit({type:'SETPAGECOMPONENTS',data:state.pageCache});
    },
    async setPageCache(){
      const { status } = await api.getPageCache(payload);
    },
    //装备实力-编制数量
    async getZbslBzs ({ commit, state }, payload) {
      const { data } = await api.getZbslBzs(payload);
      state.ZbslBzs = dataFilter.filterZbslBzs(data);
    },
    //装备实力-战储装备数
    async getZcslZbs ({ commit, state }, payload) {
      const { data } = await api.getZcslZbs(payload);
      state.ZcslZbs = dataFilter.filterZcslZbs(data);
    },
    //装备实力-战储器材数
    async getZcslQcs ({ commit, state }, payload) {
      const { data } = await api.getZcslQcs(payload);
      state.ZcslQcs = dataFilter.filterZcslQcs(data);
    }
  }
}

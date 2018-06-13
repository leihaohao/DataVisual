import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import dataFilter from '@/libs/dataFilter';
Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced: true,
	state: {
		//页面缓存
		pageCache:[],
		//页面拼装好的数据
		pageComponents:[],
		//下面都是不同组件的数据
		Foot:{
			data:''
		},
		SearchCheckbox:{},
		SearchList:{},
		ZbslBzs:{
		  data:'',
		  chartMain:'',
		  chartBprate:'',
		  chartKyrate:'',
		  chartZbrate:'',
		},
		ZcslZbs:{
		  data:{},
		  chartMain:{},
		},
		ZcslQcs:{
		  data:'',
		  chartMain:'',
		},
		BznlRy:{
			data:'',
			chartMain:''
		}
		,BznlSbs:{
			data:'',
			chartMain:''
		}
		,BznlQcs:{
			data:'',
			chartMain:''
		}
		,JhzxDg:{
			data:'',
			chartMain:''
		}
		,JhzxWx:{
			data:'',
			chartMain:''
		}
		,JhzxZc:{
			data:'',
			chartMain:''
		}
		,ZbzlZt:{
			data:'',
			chartMain:''
		}
		,Zbbh:{
			data:'',
			chartMain:''
		}
		,Zbdy:{
			data:'',
			chartMain:''
		}
		,RlzyRy:{
			data:'',
			chartMain:''
		}
		,SbzySbs:{
			data:'',
			chartMain:''
		}
		,QcslQcs:{
			data:'',
			chartMain:''
		}
		,Zbdt:{
			data:'',
			chartMain:''
		}
		,Xmqk:{
			data:'',
			chartMain:''
		}
		,Htqk:{
			data:'',
			chartMain:''
		}
		,Jfqk:{
			data:'',
			chartMain:''
		}
		,Ckqk:{
			data:'',
			chartMain:''
		}
		,Zczl:{
			data:'',
			chartMain:''
		}
		,Zcbh:{
			data:'',
			chartMain:''
		}
		,RwQk:{
			data:'',
			chartMain:''
		}
		,RwRy:{
			data:'',
			chartMain:''
		}
		,RwZb:{
			data:'',
			chartMain:''
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
		//请求全部主页面数据
		async getAllRequest ({dispatch, commit, state }, payload) {
		  dispatch('getZbslBzs');
		  dispatch('getZcslZbs');
		  dispatch('getZcslQcs');
		  // dispatch('getZbslBzs');
		  // dispatch('getZbslBzs');
		  // dispatch('getZbslBzs');
		},
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
		//配置缓存
		async setPageCache(){
		  const { status } = await api.getPageCache(payload);
		},
		//搜索复选框
		async getSearchCheckbox ({ commit, state }, payload) {
		  const { data } = await api.getSearchCheckbox(payload);
		  state.SearchCheckbox = dataFilter.filterSearchCheckbox(data);
		},
		//搜索列表
		async getSearchList ({ commit, state }, payload) {
		  const { data } = await api.getSearchList(payload);
		  state.SearchList = dataFilter.filterSearchList(data);
		},
		//底部任务
		async getFoot ({ commit, state }, payload) {
		  const { data } = await api.getFoot(payload);
		  state.Foot = dataFilter.filterFoot(data);
		},

		//装备实力-编制数量
		async getZbslBzs ({ commit, state }, payload) {
		  const { data } = await api.getZbslBzs(payload);
		  state.ZbslBzs = dataFilter.filterZbslBzs(data);
		},
		//战储实力-战储装备数
		async getZcslZbs ({ commit, state }, payload) {
		  const { data } = await api.getZcslZbs(payload);
		  state.ZcslZbs = dataFilter.filterZcslZbs(data);
		},
		//战储实力-战储器材数
		async getZcslQcs ({ commit, state }, payload) {
		  const { data } = await api.getZcslQcs(payload);
		  state.ZcslQcs = dataFilter.filterZcslQcs(data);
		},
		//保障能力-人员
		async getBznlRy ({ commit, state }, payload) {
		  const { data } = await api.getBznlRy(payload);
		  state.BznlRy = dataFilter.filterBznlRy(data);
		},
		//保障能力-设备数
		async getBznlSbs ({ commit, state }, payload) {
		  const { data } = await api.getBznlSbs(payload);
		  state.BznlSbs = dataFilter.filterBznlSbs(data);
		},
		//保障能力-器材数
		async getBznlQcs ({ commit, state }, payload) {
		  const { data } = await api.getBznlQcs(payload);
		  state.BznlQcs = dataFilter.filterBznlQcs(data);
		},
		//计划执行-订购
		async getJhzxDg ({ commit, state }, payload) {
		  const { data } = await api.getJhzxDg(payload);
		  state.JhzxDg = dataFilter.filterJhzxDg(data);
		},
		//计划执行-维修
		async getJhzxWx ({ commit, state }, payload) {
		  const { data } = await api.getJhzxWx(payload);
		  state.JhzxWx = dataFilter.filterJhzxWx(data);
		},
		//计划执行-战储
		async getJhzxZc ({ commit, state }, payload) {
		  const { data } = await api.getJhzxZc(payload);
		  state.JhzxZc = dataFilter.filterJhzxZc(data);
		},
		//装备质量-状态
		async getZbzlZt ({ commit, state }, payload) {
		  const { data } = await api.getZbzlZt(payload);
		  state.ZbzlZt = dataFilter.filterZbzlZt(data);
		},
		//装备变化
		async getZbbh ({ commit, state }, payload) {
		  const { data } = await api.getZbbh(payload);
		  state.Zbbh = dataFilter.filterZbbh(data);
		},
		//装备动用
		async getZbdy ({ commit, state }, payload) {
		  const { data } = await api.getZbdy(payload);
		  state.Zbdy = dataFilter.filterZbdy(data);
		},
		//人力资源-使用人群（人员）
		async getRlzyRy ({ commit, state }, payload) {
		  const { data } = await api.getRlzyRy(payload);
		  state.RlzyRy = dataFilter.filterRlzyRy(data);
		},
		//设备资源-设备数
		async getSbzySbs ({ commit, state }, payload) {
		  const { data } = await api.getSbzySbs(payload);
		  state.SbzySbs = dataFilter.filterSbzySbs(data);
		},
		//器材实力-器材数
		async getQcslQcs ({ commit, state }, payload) {
		  const { data } = await api.getQcslQcs(payload);
		  state.QcslQcs = dataFilter.filterQcslQcs(data);
		},
		//装备动态
		async getZbdt ({ commit, state }, payload) {
		  const { data } = await api.getZbdt(payload);
		  state.Zbdt = dataFilter.filterZbdt(data);
		},
		//项目情况
		async getXmqk ({ commit, state }, payload) {
		  const { data } = await api.getXmqk(payload);
		  state.Xmqk = dataFilter.filterXmqk(data);
		},
		//合同情况
		async getHtqk ({ commit, state }, payload) {
		  const { data } = await api.getHtqk(payload);
		  state.Htqk = dataFilter.filterHtqk(data);
		},
		//经费情况
		async getJfqk ({ commit, state }, payload) {
		  const { data } = await api.getJfqk(payload);
		  state.Jfqk = dataFilter.filterJfqk(data);
		},
		//仓库情况
		async getCkqk ({ commit, state }, payload) {
		  const { data } = await api.getCkqk(payload);
		  state.Ckqk = dataFilter.filterCkqk(data);
		},
		//战储质量
		async getZczl ({ commit, state }, payload) {
		  const { data } = await api.getZczl(payload);
		  state.Zczl = dataFilter.filterZczl(data);
		},
		//战储变化
		async getZcbh ({ commit, state }, payload) {
		  const { data } = await api.getZcbh(payload);
		  state.Zcbh = dataFilter.filterZcbh(data);
		},
		//任务情况-概述
		async getRwQk ({ commit, state }, payload) {
		  const { data } = await api.getRwQk(payload);
		  state.RwQk = dataFilter.filterRwQk(data);
		},
		//任务情况-参与人员
		async getRwRy ({ commit, state }, payload) {
		  const { data } = await api.getRwRy(payload);
		  state.RwRy = dataFilter.filterRwRy(data);
		},
		//任务情况-参与装备
		async getRwZb ({ commit, state }, payload) {
		  const { data } = await api.getRwZb(payload);
		  state.RwZb = dataFilter.filterRwZb(data);
		}
	},
    modules: {
    }
});

export default store;

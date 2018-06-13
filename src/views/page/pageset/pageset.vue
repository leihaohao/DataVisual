<style lang="less">
    @import './pageset.less';
</style>
<template>
	<div class="hjj-box f-mt25">
		<h3 class="hjj-title hjj-title2"><span>页面设置总览</span>
			<div class="f-fr">
        		<a class="link" @click.stop.prevent="addNewPage"  style="float:none;">添加新页面</a>
        		<router-link :to="{path:'/custom/'+pageCache[0].path}" >返回地图</router-link>
    		</div>
		</h3>
		<div class="hjj-card card-content hjj-pageset">
			<ul class="f-cb module-page">
				<li class="f-fl area-shadow" v-for="(item,key) in pageCache">
					<h5><input type="text" v-model="item.name" @focus.stop="setFocus($event)" @blur.stop="setName(item.name,key,$event)"><Button v-if="pageCache.length!==1" @click.stop.prevent="del(key)" title="删除" type="ghost" shape="circle" icon="close"></Button></h5>
					<router-link :to="{path:'/custom/'+item.path,query:{name: 'config'}}"><img :src="imgsrc" alt=""></router-link>
				</li>
			</ul>

		</div>
	</div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    components: {
    },
    data(){
    	return {
    		imgsrc:require('@/assets/images/imgAll.png')
    	}
    },
    beforeCreate(){
  		// 	this.$router.options.routes[0].children.push({//插入路由  
		//     name:'list',  
		//     path: 'list',  
		//     component: resolve => require(['../template/list.vue'], resolve)//将组件用require引进来  
		// });
    },
    created(){
    },
    computed:{
    	...mapState({
    		'pageCache':state=>{
    			if(state.pageCache && state.pageCache.length>0){
    				return state.pageCache
    			}else{
    				return []
    			}
    		},
    		'pageComponents':state=>state.pageComponents})
    },
	methods:{
		...mapActions(['getAllRequest']),
		
		setFocus(e){
			e.currentTarget.classList.add('area-shadow');
		},
		setName(name,key,e){
			e.currentTarget.classList.remove('area-shadow');
			this.pageComponents[key].name = this.pageCache[key].name = name;
			window.sessionStorage.setItem('pageCache',JSON.stringify(this.pageCache));
			//dispatch('setPachCache');
		},
		addNewPage(){
			let obj = {name:'点击修改标题',path:(Math.random()*2e+15).toFixed(),components:[]};
			this.pageComponents.push(obj);
			this.pageCache.push(obj);
			window.sessionStorage.setItem('pageCache',JSON.stringify(this.pageCache));
		},
		del(key){
            this.pageComponents.splice(key,1);
            this.pageCache.splice(key,1);
            window.sessionStorage.setItem('pageCache',JSON.stringify(this.pageCache));
        },
		...mapActions(['getPageCache'])
	},
    mounted(){
    	this.getPageCache();
    	this.getAllRequest();
	}
};
</script>
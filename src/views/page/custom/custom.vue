<style lang="less">
    @import './custom.less';
</style>
<template>
	<div>

		<main-nav></main-nav>
	    <section @dragover.prevent="dragovers($event)" @drop.prevent="drops($event)" class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px dashed #fff':'auto'}">
			<china-map></china-map>
			<component :data="item.data" :is="item.type" :status="item" :index="key" :parents="currentPageComponent" :components="item.components" v-for="(item,key) in currentPageComponent" :key="`${item.type+item.id+key}`">
				<component :display="item2.display" :is="item2.type" :status="item2" :index="key2" :parents="item.components" :cols="''+item2.cols" :data="item2.data" v-for="(item2,key2) in item.components" :key="`${item.type+item.id+key}`">
					<component :is="item3.type" :status="item3" :data="item3.data" :slot="item3.slot" :width="item3.width" :height="item3.height" v-for="(item3,key3) in item2.components" :key="`${item.type+item.id+item.ex+key}`">
					</component>
				</component>
			</component>
		</section>
	</div>
</template>

<script>
import mainNav from '@/views/components/main-nav/main-nav.vue';
import chinaMap from '@/views/components/china-map/china-map.vue';
import { mapState, mapMutations, mapActions } from 'vuex'
import card from '@/views/components/card/card.vue';
import charts from '@/views/components/charts/charts.vue';	
import cardCols from '@/views/components/card-cols/card-cols.vue';	
import cardList from '@/views/components/card-list/card-list.vue';	
import footCarousel from '@/views/components/foot-carousel/foot-carousel.vue';	
import searchCheckbox from '@/views/components/search-checkbox/search-checkbox.vue';	
import searchList from '@/views/components/search-list/search-list.vue';	
import cardTasktime from '@/views/components/card-task/card-tasktime.vue';	
import cardTaskunit from '@/views/components/card-task/card-taskunit.vue';	
import cardTaskprogress from '@/views/components/card-task/card-taskprogress.vue';	
export default {
    name: 'custom',
    components: {
        mainNav,chinaMap,card,charts,cardCols,cardList,footCarousel,searchCheckbox,searchList,cardTasktime,cardTaskunit,cardTaskprogress
    },
    data(){
	    return {
	    	resourcesObj:[],
	    	config:(this.$route.query.name =='config'),
		}
	},
	computed: {
		currentPageComponent(){
			const _self = this;
			let obj = this.pageComponents.filter(item=>{
				if(item.path === _self.$route.params.id){
					return true
				}
			})[0]
			if(obj && obj.components){
				return obj.components;
			}else{
				return [];
			}
		},
		...mapState({
	      pageComponents: state => state.pageComponents,
	    })
	},
    methods: {
		dragovers(ev){
		},
		drops(ev){
			const type = ev.dataTransfer.getData('type');
			if(type === 'card'){
				this.currentPageComponent.push({
					type: 'card',
					name:'容器标题，点击修改',
					isShow:1,
					x:0,
					y:0,
					components:[],
					id:(Math.random()*2e+2).toFixed()
				})
			}else if(type === 'foot'){
				this.currentPageComponent.push({
					type: 'foot-carousel',
					data:{
				        bottom:[{name:'任务一'},{name:'任务二'},{name:'任务三'},{name:'任务四'},{name:'任务五'},{name:'任务六'},{name:'任务七'},{name:'任务八'}]
				      },
					isShow:1,
					x:0,
					y:0,
					origin:'Foot',
					ex:'data'
				})
			}else if(type === 'search-checkbox'){
				this.currentPageComponent.push({
					type: 'search-checkbox',
					data:{},
					isShow:1,
					x:0,
					y:0,
					id:(Math.random()*2e+2).toFixed()
				})
			}else if(type === 'search-list'){
				this.currentPageComponent.push({
					type: 'search-list',
					data:{},
					isShow:1,
					x:0,
					y:0,
					id:(Math.random()*2e+2).toFixed()
				})
			}else if(type === ''){

			}else{
				alert('只能放在容器内！')
			}
			ev.dataTransfer.setData('type','');
		},
    	...mapActions(['getPageCache','getPageComponents'])
	},
	created(){
		this.getPageCache().then(()=>{
			this.getPageComponents();
		});
	},
	mounted(){

	}
};
</script>
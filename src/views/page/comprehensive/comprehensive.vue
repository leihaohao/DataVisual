<style lang="less">
    @import './comprehensive.less';
</style>
<template>
	<div>
		<main-nav></main-nav>
	    <section  @dragover.prevent="dragovers" @drop.prevent="drops" class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px solid red':'auto',marginBottom:'20px'}">
			<china-map></china-map>
			<div class="f-fl">
				<card-zbsl></card-zbsl>
			 	<card-zcsl></card-zcsl>
			</div>
			<foot-carousel :title="'任务详情'" :titleHide="true" :taskList="taskList"></foot-carousel>
			<div id="test" class="f-fr">
				<card-bznl></card-bznl>
				<card-jhzx></card-jhzx>
			</div>
			<component :is="item.component" :title="item.title" v-for="(item,key) in cardItems" :key="`card${key}`"></component>
		</section>
	</div>
</template>

<script>
import mainNav from '@/views/components/main-nav/main-nav.vue';
import card from '@/views/components/card/card.vue';
import cardZbsl from '@/views/components/business-card-ele/card-zbsl/card-zbsl.vue';
import cardZcsl from '@/views/components/business-card-ele/card-zcsl/card-zcsl.vue';
import cardBznl from '@/views/components/business-card-ele/card-bznl/card-bznl.vue';
import cardJhzx from '@/views/components/business-card-ele/card-jhzx/card-jhzx.vue';
import footCarousel from '@/views/components/foot-carousel/foot-carousel.vue';
import charts from '@/views/components/charts/charts.vue';
import cardCharts from '@/views/components/card-charts/card-charts.vue';
import chinaMap from '@/views/components/china-map/china-map.vue';

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    components: {
        mainNav,card,footCarousel,charts,chinaMap,cardCharts,cardZbsl,cardZcsl,cardBznl,cardJhzx
    },
    data(){
    	return {
    		taskList:[{title:'任务一'},{title:'任务二'},{title:'任务三'},{title:'任务四'},{title:'任务五'},{title:'任务六'},{title:'任务七'},{title:'任务八'}],
    		resourcesObj:[],
	    	config:(this.$route.query.name =='config'),
	    	cardItems:[]
    	}
    },
    mounted(){
	},
	methods:{
		dragovers(ev){
		},
		drops(ev){
			let type = ev.dataTransfer.getData('type');
			if(type === 'card'){
				this.cardItems.push({
					component: 'card',
					title:'容器标题'
				})
			}else if(type.length>0){
				alert('只能放在卡片容器内！')
			}
			ev.dataTransfer.setData('type','');
		}
		
	}
};
</script>
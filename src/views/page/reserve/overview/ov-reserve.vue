<style lang="less">
    @import './overview.less';
</style>
<template>
		<div class="hjj-box f-mt25">
			<h3 class="hjj-title"><span>火箭军仓库情况总览</span> <router-link to="/" >返回地图</router-link></h3>
			<div class="box-content">
				<Row>
					<i-col span="7">
						<div class="area-shadow box-sec">
			        		<charts type="circle" width="100%" height="285px" :title="['可用率','非可用率']" :series="resourcesObj"></charts>
			        		<div class="f-cb box-sec-bottom-title">
		        				<span>库房数量：<span>200</span></span>
		        				<span class="f-ml10">使用面积：<span>200</span>m2</span>
			        		</div>
			        	</div>
					</i-col>
					<i-col span="17">
			        	<div class="area-shadow box-sec f-ml10">
			        		<h5 class="box-sec-title">近五年库存变化趋势图</h5>
			        		<charts type="line" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
			        	</div>
			        </i-col>
				</Row>   
				<div class="box-sec-chart box-sec-chartex2">
					<h5 class="box-sec-title">各基地仓库情况一览</h5>
					<charts type="vbar" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
				</div>
			</div>
		</div>
</template>

<script>
import mainNav from '@/views/components/main-nav/main-nav.vue';
import card from '@/views/components/card/card.vue';
import searchCheckbox from '@/views/components/search-checkbox/search-checkbox.vue';
import charts from '@/views/components/charts/charts.vue';	

export default {
    name: 'equip',
    components: {
        mainNav,card,searchCheckbox,charts
    },
    data(){
	    return {
	    	resourcesObj:[]
	    }
	},
    methods: {
		selectItem(data){
			alert('selectItem')
		},            
		search(data){
			alert('search')
		},            
	}
};
</script>
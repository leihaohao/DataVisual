<style lang="less">
    @import './overview.less';
</style>
<template>
		<div class="hjj-box f-mt25">
			<h3 class="hjj-title"><span>火箭军仓库情况总览</span> <router-link to="/" >返回地图</router-link></h3>
			<div class="box-content">
				<div class="nav-menu f-mt10 f-mb10">
					<ul class="f-cb">
						<li class="active">
							<router-link :to="'ov-joinperson'" >
								 <div class="label area-gradient">
								 	<div>参与人员总数</div>
								 </div>
							</router-link>
						</li>
						<li>
							<router-link :to="'ov-joinequip'" >
								 <div class="label area-gradient">
								 	<div>参与装备总数</div>
								 </div>
							</router-link>
						</li>
					</ul>
				</div>
	        	<div class="area-shadow box-sec">
	        		<h5 class="box-sec-title">各单位参与人数</h5>
	        		<charts type="vbar2" width="100%" height="220px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
	        	</div>
				<div class="box-sec-chart box-sec-chartex2">
					<Row>
						<i-col span="3">
							<div class="hjj-card-chart">
								<div class="area-shadow card-chart-content">
									<h3>总数量</h3>
									<h1>537</h1>
								</div>
							</div>
						</i-col>
						<i-col span="7">
							<div class="hjj-card-chart f-ml20">
								<div class="area-shadow card-chart-title">职务等级占比</div>
								<div class="area-shadow f-mt10">
									<charts type="pie" width="100%" height="320px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
								</div>
							</div>
						</i-col>
						<i-col span="7">
							<div class="hjj-card-chart f-ml20">
								<div class="area-shadow card-chart-title">专业类型占比</div>
								<div class="area-shadow f-mt10">
									<charts type="pie" width="100%" height="320px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
								</div>
							</div>
						</i-col>
						<i-col span="7">
							<div class="hjj-card-chart f-ml20">
								<div class="area-shadow card-chart-title">学历分类占比</div>
								<div class="area-shadow f-mt10">
									<charts type="pie" width="100%" height="320px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
								</div>
							</div>
						</i-col>
						
				    </Row>
				</div>
			</div>
		</div>
</template>

<script>
import charts from '@/views/components/charts/charts.vue';	

export default {
    name: 'equip',
    components: {
        charts
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
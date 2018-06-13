<style lang="less">
    @import './overview.less';
</style>
<template>
		<div class="hjj-box f-mt25">
			<h3 class="hjj-title"><span>火箭军全军装备实力总览</span> <router-link to="/" >返回地图</router-link></h3>
			<div class="box-content">
				<div class="nav-menu f-mt10 f-mb10">
					<ul class="f-cb">
						<li>
							<router-link :to="'ov-haveamount'" >
								 <div class="label area-gradient">
								 	<div>现有使用人数</div>
								 </div>
							</router-link>
						</li>
						<li class="active">
							<router-link :to="'ov-shortamount'" >
								 <div class="label area-gradient">
								 	<div>使用人数缺编数</div>
								 </div>
							</router-link>
						</li>
						<li>
							<router-link :to="'ov-equippersonamount'" >
								 <div class="label area-gradient">
								 	<div>装备保障人数</div>
								 </div>
							</router-link>
						</li>
					</ul>
				</div>
				<Row>
					<i-col span="8">
			        	<div class="area-shadow box-sec">
			        		<h5 class="box-sec-title">近五年使用人员缺编趋势</h5>
			        		<charts type="line" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
			        	</div>
			        </i-col>
			        <i-col span="16">
			        	<div class="f-ml10 area-shadow box-sec">
			        		<h5 class="box-sec-title">各基地缺编人数对比</h5>
			        		<charts type="vbar2" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
			        	</div>
			        </i-col>
				</Row>   
				<div class="box-sec-chart box-sec-chartex2">
					<Row>
						<i-col span="3">
							<div class="hjj-card-chart">
								<div class="area-shadow card-chart-content">
									<h3>缺编总数</h3>
									<h1>537</h1>
								</div>
							</div>
						</i-col>
						<i-col span="7">
							<div class="hjj-card-chart f-ml20">
								<div class="area-shadow card-chart-title">缺编职务分类占比</div>
								<div class="area-shadow f-mt10">
									<charts type="pie" width="100%" height="320px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
								</div>
							</div>
						</i-col>
						<i-col span="7">
							<div class="hjj-card-chart f-ml20">
								<div class="area-shadow card-chart-title">缺编人员专业分类占比</div>
								<div class="area-shadow f-mt10">
									<charts type="pie" width="100%" height="320px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
								</div>
							</div>
						</i-col>
						<i-col span="7">
							<div class="hjj-card-chart f-ml20">
								<div class="area-shadow card-chart-title">缺编人员学历分类占比</div>
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
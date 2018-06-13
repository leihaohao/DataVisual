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
							<router-link :to="'ov-equiphave'" >
								 <div class="label area-gradient">
								 	<div>现有数量</div>
								 	<div>23424台套</div>
								 	<div>2000万元</div>
								 </div>
							</router-link>
						</li>
						<li>
							<router-link :to="'ov-equipshort'" >
								 <div class="label area-gradient">
								 	<div>缺编数量</div>
								 	<div>2000万元</div>
								 </div>
							</router-link>
						</li>
						<li class="active">
							<router-link :to="'ov-avaliablerate'" >
								 <div class="label area-gradient">
								 	<div>装备可用率</div>
								 	<div>95%</div>
								 </div>
							</router-link>
						</li>
					</ul>
				</div>
				<Row>
					<i-col span="4">
						<div class="area-shadow box-sec">
			        		<charts type="circle" width="100%" height="335px" :title="['可用率','非可用率']" :series="resourcesObj"></charts>
			        	</div>
					</i-col>
					<i-col span="10">
			        	<div class="area-shadow box-sec f-ml10">
			        		<h5 class="box-sec-title">日趋可用率趋势图</h5>
			        		<charts type="line" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
			        	</div>
			        </i-col>
			        <i-col span="10">
			        	<div class="f-ml10 area-shadow box-sec">
			        		<h5 class="box-sec-title">月均可用率趋势图</h5>
			        		<charts type="line" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
			        	</div>
			        </i-col>
				</Row>   
				<div class="box-sec-chart box-sec-chartex2">
					<Row>
							<div class="list box-list-chart area-shadow" style="width:auto;">
								<Row>
									<i-col span="16">
						        		<b class="f-cb">装备品质数量Top10 <a class="f-fr">更多>></a></b>
										<table>
											<tr>
												<th>序号</th>
												<th>装备名称</th>
												<th>装备型号</th>
												<th>装备数量（台套）</th>
												
											</tr>
											<tr>
												<td>01</td>
												<td>信号车</td>
												<td>R-FGHJ-22</td>
												<td>200</td>
												
											</tr>
										</table>
									</i-col>
									<i-col span="8">
										<charts type="pie" width="100%" height="285px" :series="resourcesObj" :title="['']"></charts>
									</i-col>
								</Row>
				        	</div>
				        
				    </Row>
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
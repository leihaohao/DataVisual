<style lang="less">
    @import './task.less';
</style>
<template>
	<div>
		<main-nav></main-nav>
	    <section class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px solid red':'auto',marginBottom:'20px'}">
			<china-map></china-map>
			<div class="f-fl">
				<search-list type="x"></search-list>	
			</div>
			<div class="f-fr">
				<router-link :to="'ov-joinperson'">
				<card  :title="'xx任务'" type="w">
					<div class="card-section f-cb">
						<div class="f-cb">
							<b>任务总时长：<span>123</span>天</b>
							<span class="f-fr subtitle">（值班任务没有总时长）</span>
						</div>
						<div class="f-cb">
							<b>任务总进度： 
								<span class="hjj-progress">
									<span class="progress-rate" style="width:85%;"><span class="progress-text">85%</span></span>
								</span>
							</b>
						</div>
						<b>参与单位数：<span>1230</span>人</b>
						<div class="card-line">
						</div>
						<div class="list box-list-chart small">
							<table>
								<tr>
									<th>单位名称</th>
									<th>任务时长</th>
									<th>任务进度</th>
								</tr>
								<tr>
									<td>单位a</td>
									<td>2天</td>
									<td>80%</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="card-section">
						<b>参与人员总数：<span>1230</span>人</b>
						<div class="card-line">
						</div>
						<charts type="hbar" width="250px" height="150px" :series="resourcesObj"></charts>
					</div>
					<div class="card-section f-cb f-mt10">
						<b>参与装备总数：<span>333</span></b>
						<div class="card-line">
						</div>
						<charts type="pie" width="150px" height="150px" :title="['战区分布占比']" :series="resourcesObj"></charts>
								
					</div>
				</card>
			</router-link>
			</div>
		</section>
	</div>
</template>

<script>
import mainNav from '@/views/components/main-nav/main-nav.vue';
import card from '@/views/components/card/card.vue';
import searchList from '@/views/components/search-list/search-list.vue';
import charts from '@/views/components/charts/charts.vue';	
import chinaMap from '@/views/components/china-map/china-map.vue';
export default {
    name: 'equip',
    components: {
        mainNav,card,searchList,charts,chinaMap
    },
    data(){
	    return {
	    	resourcesObj:[],
	    	config:(this.$route.query.name =='config')
	    }
	},
    methods: {
	            
	        }
};
</script>
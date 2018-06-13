<style lang="less">
    @import './overview.less';
</style>
<template>
		<div class="hjj-box f-mt25">
			<h3 class="hjj-title"><span>火箭军全军项目情况总览</span> <router-link to="/" >返回地图</router-link></h3>
			<div class="box-content">
				<div class="nav-menu f-mt10 f-mb10">
					<ul class="f-cb">
						<li class="active">
							<router-link :to="'ov-appropriate'" >
								 <div class="label area-gradient">
								 	<div>拨付金额</div>
								 </div>
							</router-link>
						</li>
						<li>
							<router-link :to="'ov-overspend'" >
								 <div class="label area-gradient">
								 	<div>超支金额</div>
								 </div>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="area-shadow box-sec">
	        		<h5 class="box-sec-title">基地金额对比</h5>
	        		<charts type="vbar2" width="100%" height="285px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
	        	</div>
				<div class="box-sec-chart box-sec-chartex2 f-cb">
					<Row>
						<i-col span="4">
				        	<div class="left-tips">
								<h5 class="area-shadow">执行项目数：<span>223</span></h5>
								<div class="area-shadow mt10">
									<div id=""></div>
								</div>
				        	</div>
				        </i-col>
				        <i-col span="20">
				        	<div class="list box-list-chart">
				        		<h5>执行项目列表</h5>
								<div class="search-box f-mt10">
									<label class="select">项目类型：<select name="" id="" class="area-shadow"></select></label>
									
									<label class="search"><input type="text" class="area-shadow" placeholder="项目编号/项目名称/合同号/拨付单位/拨款人">
										<a href="javascript:void(0);">搜索</a></label>
								</div>
								<table class="f-mt20">
									<tr>
										<th>项目名称</th>
										<th>项目编号</th>
										<th>项目类型</th>
										<th>项目金额</th>
										<th>项目状态</th>
										<th>执行单位</th>
										<th>启动时间</th>
										<th>预计完成时间</th>
										<th>是否延期</th>
										<th>延期原因</th>
									</tr>
									<tr>
										<td>xx装备采购</td>
										<td>1234</td>
										<td>订购项目</td>
										<td>200万元</td>
										<td>实施中</td>
										<td>第一研究所</td>
										<td>2018-12-12</td>
										<td>2018-12-12</td>
										<td>否</td>
										<td></td>
									</tr>
								</table>
								
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
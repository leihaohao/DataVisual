<style lang="less">
    @import './list.less';
</style>
<template>
		<div class="hjj-box f-mt25">
			<h3 class="hjj-title"><span>{{pageOpts[$route.params.id]['title']}}</span> <router-link to="/" >返回地图</router-link></h3>
			<div class="box-content" v-show="isShowEquip">
				<div class="search-box">
					<label class="select" v-for="item in pageOpts[$route.params.id]['searchTitle']">装备型号：<select name="" id="" class="area-shadow"></select></label>
					<label class="search"><input type="text" class="" placeholder="装备名称/装备批号">
						<a href="javascript:void(0);">搜索</a></label>
				</div>
				<div class="box-list-chart box-list-chart2">
					<router-link to="/equip-detail">
					<table>
						<tr>
							<th v-for="item in pageOpts[$route.params.id]['tableTitle']">{{item}}</th>
						</tr>
						<tr>
							<td v-for="item in pageOpts[$route.params.id]['tableData']">
								{{item}}
							</td>
						</tr>
					</table>
				    </router-link>
					<div class="pages">
						<span>合计装备种类：<b>64</b></span>
						<span>合计装备数量：<b>64</b><b>台套</b></span>

						<!--<span class="f-fr">共129条<a>1</a><a>2</a></span>-->


						<div id="usepage" class="f-fr">
							<paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
							</paging>
						</div>


					</div>
				</div>
			</div>
			<div class="box-content" v-show="!isShowEquip">
				<div class="box-sec-chart box-sec-chartex2 f-cb">
					<Row>
						<i-col span="4">
				        	<div class="left-tips">
								<h5 class="area-shadow">合同总数：<span>223</span></h5>
								<div class="area-shadow mt10">
									<div id=""></div>
								</div>
				        	</div>
				        </i-col>
				        <i-col span="20">
				        	<div class="list box-list-chart">
				        		<h5>订购合同报表</h5>
								<table>
									<tr >
										<th v-for="item in pageOpts[$route.params.id]['tableTitle']">{{item}}</th>
									</tr>
									<tr>
										<td v-for="item in pageOpts[$route.params.id]['tableData']">{{item}}</td>
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
import paging from '@/views/components/paging/paging.vue';	


export default {
    name: 'list',
    components: {
        charts,paging
    },
    data(){
	    return {
	    	pageSize : 20 , //每页显示20条数据
            currentPage : 1, //当前页码
            count : 0, //总记录数
            items : [],
	    	resourcesObj:[],
	    	isShowEquip:false,
	    	pageOpts:{'single-equip':{
	    					title:'机动指挥系统装备汇总列表',
    						searchTitle:['所属单位','入编时间'],
    						tableTitle:['装备名称','装备型号','装备批次','装备编号','所属单位','归属基地','入编时间','负责人','是否维修','维修次数'],
    						tableData:['指挥车','R-FGHJ-34','1009','1009','第一研究所','最高指挥车','2018-04-21','张三','是','2']
	    				},
	    				'catege-equip':{
	    					title:'信号车明细列表',
    						searchTitle:['装备型号','装备分类'],
    						tableTitle:['装备分类','装备名称','装备型号','计量单位','装备数量'],
    						tableData:['机动指挥系统/D14A 机动指挥系统','xxxx信号车','R-FGHJ-34','台套']
	    				},
	    				'business-projsuccess':{
	    					title:'订购完成项目一览',
    						tableTitle:['项目名称','项目编号','项目金额','项目负责人','签约单位','签约时间','计划完成时间','项目完成时间','是否延期'],
    						tableData:['制动指挥系统',1234,'200万元','刘海','F-FGHJ-23','2017-06-12','2017-06-12','2017-06-12','是']
	    				},
	    				'business-contractsuccess':{
	    					title:'订购完成合同一览',
    						tableTitle:['合同名称','合同编号','合同类型','合同金额','签约单位','签约时间','计划完成时间','合同完成时间','是否延期'],
    						tableData:['xx装备采购',1234,'订购项目','200万元','第一研究所','2017-06-12','2017-06-12','2017-06-12','否']
	    				},
	    				'business-contractdeffered':{
	    					title:'订购延期合同一览',
    						tableTitle:['合同名称','合同编号','合同类型','合同金额','签约单位','签约时间','计划完成时间','合同完成时间','是否延期'],
    						tableData:['xx装备采购',1234,'订购项目','200万元','第一研究所','2017-06-12','2017-06-12','2017-06-12','否']
	    				}
	    			}
	    }
	},
    methods:{
		getList:function(){
            this.count = 2000;
            this.items = [1,2,3,2,3,2,3,2,3,2,3,2,3,3,2,3,2,3,2,3,2,3,2,3]
        },
        pageChange:function(page){
            this.currentPage = page
            this.getList()
        }          
	},
	mounted(){
		if(this.$route.params.id == 'single-equip' || this.$route.params.id == 'catege-equip'){
			this.isShowEquip = true
		}
		this.getList()
	}
};
</script>
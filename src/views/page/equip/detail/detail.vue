<style lang="less">
	@import './detail.less';
</style>
<template>
		<div class="hjj-box f-mt25">
			<h3 class="hjj-title hjj-title2"><span>095354号旅指挥控制车装备信息</span>
		        <div class="f-fr">
		            <a class="link" href="javascript:history.go(-1);" style="float:none;">返回上层</a><a href="javascript:location.href='/';">返回地图</a>
		        </div>
		    </h3>
			<div class="box-content equipinfo f-cb" style="height: 890px;">
		        <div class="baseinfo f-fl area-shadow">
		            <div class="img area-shadow">
		                <img :src="infoImg" alt="">
		            </div>
		            <ul class="info-list" id="zb_model_div_info">
		                <li>装备名称：火箭车</li>
		                <li>装备型号：FFF-12-FFF</li>
		                <li>计量单位：</li>
		                <li>装质量等级：1级</li>
		                <li>生产批次：222111</li>
		                <li>装备编号：222111</li>
		                <li>车辆颜色：绿色</li>
		                <li>使用单位：第一研究所</li>
		            </ul>
		            <div class="tabsinfo">
		            </div>
		        </div>
		        <div class="nav_tab_container tabsinfo f-fr">
					<Tabs value="name1" size="small" class="f-mt10">
	                    <TabPane label="基础信息" name="name1">
	                        <table class="equipinfo-table"  style="width: 100%;">
			                    <caption>生产信息</caption>
			                    <tr>
			                        <td>生产国家：中国</td>
			                        <td>生产单位：中国第一汽车制造厂</td>
			                        <td>生产厂家：中国电子科技集团公司第二十八研究所</td>
			                    </tr>
			                    <tr>
			                        <td>设计定型：2014-05-01</td>
			                        <td>生产定型：2015-01-01</td>
			                        <td>采购价格：200万/台套</td>
			                    </tr>
			                    <tr>
			                        <td class="alonerow" colspan="3"><label for="">作战用途：</label>
			                            <div class="alonerow-content">功能描述：1.指挥作业功能：（1）接收上级命令，指令和有关信息，上报任务执行情况和决心建议等
			                            </div>
			                        </td>
			                    </tr>
			                </table>
	                    </TabPane>
	                    <TabPane label="构成信息" name="name2">
	                        <div class="box-list-chart box-list-chart2" >
			                    <table>
			                        <tbody>
			                        <tr>
			                            <th>部件名称</th>
			                            <th>型号</th>
			                            <th>出厂编号</th>
			                            <th>出厂配发时间</th>
			                            <th>数量（台/套）</th>
			                            <th>安装位置</th>
			                            <th>生产厂家</th>
			                        </tr>
			                        <tr>
			                            <td>光纤综合业务设备</td>
			                            <td>GZE-B型</td>
			                            <td>123123</td>
			                            <td>2017年3月</td>
			                            <td>4台</td>
			                            <td>通信舱</td>
			                            <td>山东英特力光通信开发有限公司</td>
			                        </tr>
			                        </tbody>
			                    </table>
			                    <div class="pages f-cb">
			                        <div class="f-fr">
			                            <paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
			                            </paging>
			                        </div>
			                    </div>
			                </div>
	                    </TabPane>
	                    <TabPane label="履历信息" name="name3">
	                        <div class="box-list-chart box-list-chart2">
			                    <table class="table-record-info">
			                        <caption>维修保养</caption>
			                        <tbody>
			                        <tr>
			                            <th style="width: 150px;">时间</th>
			                            <th style="width: 150px;">地点</th>
			                            <th style="width: 150px;">修理机构</th>
			                            <th style="width: 80px;">主修人</th>
			                            <th style="width: 80px;">类型</th>
			                            <th style="width: 80px;">方式</th>
			                            <th>主要内容</th>
			                        </tr>
			                        <tr >
			                            <td>2005年3月</td>
			                            <td style="text-align: left;">中国电子科技</td>
			                            <td>28所9部</td>
			                            <td>刘健业</td>
			                            <td>大修</td>
			                            <td>返厂<td>
			                            <td style="text-align: left;">返厂进行大修：1.上装主要依托总体单位及配套厂家，对设备进行故障维修清零和战技术性能检测，恢复，更换；<br/>
			                            </td>
			                        </tr>
			                        </tbody>
			                    </table>
			                </div>
	                    </TabPane>
	                </Tabs>
		        </div>
		    </div>
		</div>
</template>

<script>
 import paging from '@/views/components/paging/paging.vue';
export default {
    name: 'equip',
    components: {
    	paging
    },
    data(){
	    return {
	    	resourcesObj:[],
	    	infoImg:require('@/assets/images/few4163.png'),
	    	zbId : 1,
            pageSize : 20 , //每页显示20条数据
            currentPage : 1, //当前页码
            count : 0, //总记录数
            items : []
}
	},
    methods: {
		//获取数据
        getList : function() {
            //模拟
            
        },
        //从page组件传递过来的当前page
        pageChange : function(page) {
            this.currentPage = page
            this.getList()
        }          
	}
};
</script>
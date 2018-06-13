<style lang="less">
</style>
<template>
	<div class="hjj-box f-mt25 area-shadow" id="prdetail">
		<h3 class="hjj-title hjj-title2"><span>xx装备订购项目详情</span>
			<div class="f-fr">
        		<a class="link" href="javascript:history.go(-1);"  style="float:none;">返回上层</a><a href="javascript:location.href='/';">返回地图</a>
    		</div>
		</h3>
		<div class="box-content">
			<div class="area-shadow table-sec">
                <table class="equipinfo-table equipinifo-tableex" style="width: 100%;">
                    <caption><b>项目编码：123</b><b>项目金额：123万元</b></caption>
                    <tbody><tr>
                        <td>项目负责人：xxx</td>
                        <td>签约时间：2018-01-23</td>
                        <td>计划完成时间：2018-01-12</td>
                        <td>签约单位：xxx第一制造厂</td>
                    </tr>
                    <tr>
                        <td>联系人：刘三多</td>
                        <td>联系电话：123456789123</td>
                        <td>联系人手机：12345678912</td>
                    </tr>
                    <tr>
                        <td class="alonerow" colspan="4"><label for="">项目内容：</label>
                            <div class="alonerow-content">顶顶顶顶顶顶顶顶顶顶
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>项目完成时间：2018-04-21</td>
                        <td>是否延期：是</td>
                    </tr>
                    <tr>
                        <td class="alonerow" colspan="4"><label for="">延期原因：</label>
                            <div class="alonerow-content">顶顶顶顶顶顶顶顶顶顶
                            </div>
                        </td>
                    </tr>
                </tbody></table>
            </div>
            <div class="area-shadow list-sec f-mt10">
            	<div class="box-list-chart box-list-chart2">
	            	<table>
	            		<caption>对应合同</caption>
						<tr>
							<th>合同名称</th>
							<th>合同编号</th>
							<th>签约时间</th>
							<th>签约单位</th>
							<th>备注</th>
						</tr>
						<tr>
							<td>xx装备采购</td>
							<td>1234</td>
							<td>订购项目</td>
							<td>200万元</td>
							<td>实施中</td>
						</tr>
					</table>
					<div class="pages f-cb">
                        <div class="f-fl">
                            <span>合计订购数量：200</span>
                            <span>合计订购种类：200</span>
                            <span>合计订购总额：200</span>
                            <span>合同附件：xxx合同文件</span>
                        </div>
						<div id="usepage" class="f-fr">
							<paging
									:page-index="currentPage"
									:total="count"
									:page-size="pageSize"
									@change="pageChange">
							</paging>
						</div>
					</div>
            	</div>
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
            pageSize : 20 , //每页显示20条数据
            currentPage : 1, //当前页码
            count : 0, //总记录数
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
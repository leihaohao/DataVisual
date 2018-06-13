<style lang="less">
    @import './business.less';
</style>
<template>
	<div>
		<main-nav></main-nav>
	    <section class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px solid red':'auto',marginBottom:'20px'}">
			<china-map></china-map>
			<div class="f-fl">
				<search-checkbox  type="b1" @checked="selectItem" @input="search"></search-checkbox>
			</div>
			<div class="f-fr">
				<router-link :to="''">
					<card :title="'装备动态'" type="f">
						<div class="card-section">
							<div class="card-row">分配中装备：<span>123台套</span></div>
							<div class="card-row">调整中装备：<span>123台套</span></div>
							<div class="card-row">直发中装备：<span>123台套</span></div>
							<div class="card-row">修理中装备：<span>123台套</span></div>
						</div>
					</card>
                </router-link>
				<card :title="'执行计划'" type="g">
					<div class="card-section">
						<b>订购执行计划：<span>2000</span>台套</b>
						<div class="card-line"></div>
						<div class="card-row f-cb"><span class="f-fl">计划项目：<span>123</span>个</span><span class="f-fl">计划金额：<span>123</span>万元</span></div>
						<div class="card-row f-cb"><span class="f-fl">已签合同：<span>123</span>个</span><span class="f-fl">执行率：<span>123</span>万元</span></div>
						<div class="card-row f-cb"><span class="f-fl">经费计算：<span>123</span>万</span><span class="f-fl">经费结算率：<span>40</span>%</span></div>
					</div>
					<div class="card-section">
						<b>维修计划执行：</b>
						<div class="card-line"></div>
						<div class="card-row f-cb"><span class="f-fl">计划项目：<span>123</span>个</span><span class="f-fl">计划金额：<span>123</span>万元</span></div>
						<div class="card-row f-cb"><span class="f-fl">已签合同：<span>123</span>个</span><span class="f-fl">执行率：<span>123</span>万元</span></div>
						<div class="card-row f-cb"><span class="f-fl">经费计算：<span>123</span>万</span><span class="f-fl">经费结算率：<span>40</span>%</span></div>
					</div>
					<div class="card-section">
						<b>战略计划执行：<span>2000</span>台套</b>
						<div class="card-line"></div>
						<div class="card-row f-cb"><span class="f-fl">计划项目：<span>123</span>个</span><span class="f-fl">计划金额：<span>123</span>万元</span></div>
						<div class="card-row f-cb"><span class="f-fl">已签合同：<span>123</span>个</span><span class="f-fl">执行率：<span>123</span>万元</span></div>
						<div class="card-row f-cb"><span class="f-fl">经费计算：<span>123</span>万</span><span class="f-fl">经费结算率：<span>40</span>%</span></div>
					</div>
				</card>
				<router-link :to="'ov-projprogress'">
					<card :title="'项目情况'" type="h">
						<div class="card-section">
							<b>项目总数：<span>123</span></b>
							<div class="card-line"></div>
							<div class="card-row">执行项目：<span>123</span></div>
							<div class="card-row">完成项目：<span>123</span></div>
						</div>
						<div class="card-section">
							<charts type="vbar2" width="380px" height="150px" :series="resourcesObj"></charts>
						</div>
						
					</card>
				</router-link>
				<router-link :to="'ov-contractprogress'">
					<card :title="'合同情况'" type="i">
						<div class="card-section">
							<div class="f-cb">
								<b class="f-fl">合同总数：<span>123</span></b>
								<b class="f-fl">合同总额：<span>123万元</span></b>
							</div>
							<div class="card-line"></div>
							<div class="card-row f-cb"><span class="f-fl">执行合同：<span>123</span>个</span><span class="f-fl">金额合计：<span>123</span>万元</span></div>
							<div class="card-row f-cb"><span class="f-fl">完成合同：<span>123</span>个</span><span class="f-fl">金额合计：<span>123</span>万元</span></div>
							<div class="card-row f-cb"><span class="f-fl">延期合同：<span>123</span>个</span><span class="f-fl">金额合计：<span>123</span>万元</span></div>
						</div>
					</card>
				</router-link>
				<router-link :to="'ov-appropriate'">
					<card :title="'经费情况'" type="j">
						<div class="card-section">
							<b>计划总额：<span>123万元</span></b>
							<div class="card-line"></div>
						</div>
						<div class="card-section f-cb">
							<div class="f-fl">
								<div class="card-row">拨付总额：<span>123</span>万元</div>
								<div class="card-row">超支项目：<span>123</span></div>
								<div class="card-row">超支金额：<span>123</span>万元</div>
							</div>
							<div class="f-fr">
								<charts type="circle" width="130px" height="100px" :title="['拨付率','非拨付率']" :series="resourcesObj"></charts>
							</div>
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
import searchCheckbox from '@/views/components/search-checkbox/search-checkbox.vue';
import charts from '@/views/components/charts/charts.vue';	
import chinaMap from '@/views/components/china-map/china-map.vue';	

export default {
    name: 'equip',
    components: {
        mainNav,card,searchCheckbox,charts,chinaMap
    },
    data(){
	    return {
	    	resourcesObj:[],
	    	config:(this.$route.query.name =='config')
	    }
	},
	created(){
		
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
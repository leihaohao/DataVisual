<style lang="less">
    @import './equip.less';
</style>
<template>
	<div>
		<main-nav ></main-nav>
	    <section class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px solid red':'auto',marginBottom:'20px'}">
			<china-map></china-map>
			<div class="f-fl">
				<search-checkbox type="a1" @checked="selectItem" @input="search"></search-checkbox>
			</div>
			<div class="f-fr">
				<router-link :to="'ov-equiphave'">
				<card :title="'装备实力'" type="k">
					<h5>编制数量：20000台套</h5>
					<div class="f-cb">
						<div class="f-fl">
							<charts type="hbar" width="250px" height="150px" :series="resourcesObj"></charts>
						</div>
						<div class="f-fr">
		                    <charts type="circle" width="85px" height="85px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
		                    <charts type="circle" width="85px" height="85px" :title="['可用率','非可用率']" :series="resourcesObj"></charts>
		                    <charts type="circle" width="85px" height="85px" :title="['战备率','非战备率']" :series="resourcesObj"></charts>
		                </div>
					</div>
					<div class="card-tips">装备金额：<span>12321</span>万元</div>
				</card>
				</router-link>
				<card :title="'装备质量状态'" type="l">
					<div class="f-cb">
						<div class="f-fl">
							<charts type="hbar" width="250px" height="150px" :series="resourcesObj"></charts>
						</div>
					</div>
				</card>
				<card :title="'装备变化'" type="m">
					<div class="card-section f-cb">
						<div class="f-fl">
							<div class="card-row">计划补充数：<span>123</span>台套</div>
							<div class="card-row">完成补充数：<span>123</span>台套</div>
							<div class="card-row">计划退役数：<span>123</span>台套</div>
							<div class="card-row">报废处置数：<span>123</span>台套</div>
						</div>
						<div class="f-fr">
							<charts type="circle" width="130px" height="120px" :title="['完成率','非完成率']" :series="resourcesObj"></charts>
						</div>
					</div>
				</card>
				<card :title="'装备动用'" type="n">
					<div class="card-section">
						<charts type="vbar" width="380px" height="150px" :series="resourcesObj"></charts>
					</div>
					
				</card>
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
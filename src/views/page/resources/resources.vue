<style lang="less">
    @import './resources.less';
</style>
<template>
	<div>
		<main-nav></main-nav>
	    <section ref="content" class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px solid red':'auto',marginBottom:'20px'}">
			<china-map></china-map>
			<div class="f-fl">
				<search-checkbox  type="y" @checked="selectItem" @input="search"></search-checkbox>
			</div>
			<div class="f-fr">
				<router-link :to="'ov-haveamount'">
					<card  :title="'机构资源'" type="s">
					<div class="card-section">
						<b>修理所：<span>123</span>个</b>
					</div>
				</card>
				<card  :title="'人力资源'" type="t">
					<div class="card-section">
						<b>人员总数：<span>123</span>人</b>
						<b>使用人群</b>
						<div class="card-line"></div>
					</div>
					
					<div class="card-section f-cb">
						<div class="f-fl">
							<div class="card-row">人员在编：<span>123</span>人</div>
							<div class="card-row">在编人数：<span>123</span>人</div>
							<div class="card-row">闲置面积：<span>123</span>人</div>
						</div>
						<div class="f-fr">
							<charts type="circle" width="130px" height="100px" :title="['在编率','非在编率']" :series="resourcesObj"></charts>
						</div>
					</div>
					<div class="card-section">
						<b>保障人群</b>
						<div class="card-line"></div>
						<div class="card-row">人员数量：<span>123</span>人</div>
					</div>
				</card>
				
			    </router-link>
					<card  :title="'设备资源'" type="u">					<div class="card-section">
						<b>设备数量：<span>123</span>件</b>
						<div class="card-line"></div>
					</div>
					<div class="card-section f-cb">
						<div class="f-fl">
							<div class="card-row">可用数量：<span>123</span>台套</div>
							<div class="card-row">待维修数：<span>123</span>台套</div>
							<div class="card-row">设备种类：<span>123</span>种</div>
							<div class="card-row">设备金额：<span>123</span>万元</div>
						</div>
						<div class="f-fr">
							<charts type="circle" width="130px" height="100px" :title="['可用率','非可用率']" :series="resourcesObj"></charts>
						</div>
					</div>
				</card>
				<card  :title="'器材实力'" type="v">
					<div class="card-section">
						<b>器材数量：<span>123</span>件</b>
						<div class="card-line"></div>
					</div>
					<div class="card-section">
						<charts type="vbar" width="380px" height="130px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
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
	mounted(){
	},
    methods: {
		selectItem(){},       
		search(){}     
	}
};
</script>
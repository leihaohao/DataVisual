<style lang="less">
    @import './reserve.less';
</style>
<template>
	<div>
		<main-nav></main-nav>
	    <section class="hjj-content f-cb" :style="{height:config?'932px':'auto',border:config?'2px solid red':'auto',marginBottom:'20px'}">
			<china-map></china-map>
			<div class="f-fl">
				<search-checkbox  type="z" @checked="selectItem" @input="search"></search-checkbox>
			</div>
			<div class="f-fr">
				<router-link :to="'ov-reserve'">
					<card  :title="'仓库情况'" type="o">					<div class="card-section">
						<b>库房总数：<span>123</span></b>
						<div class="card-line"></div>
					</div>
					<div class="card-section f-cb">
						<div class="f-fl">
							<div class="card-row">库房总面积：<span>123</span>㎡</div>
							<div class="card-row">使用面积：<span>123</span>㎡</div>
							<div class="card-row">闲置面积：<span>123</span>㎡</div>
						</div>
						<div class="f-fr">
							<charts type="circle" width="130px" height="100px" :title="['拨付率','非拨付率']" :series="resourcesObj"></charts>
						</div>
					</div>
				</card>
				
			  </router-link>
				<card :title="'战储实力'" type="p">>
					<div class="card-section f-cb">
						<b>战储编制：<span>123</span>套</b>
						<div class="card-line">
						</div>
						<div class="f-cb">
							<div class="f-fl">
								<charts type="hbar" width="250px" height="150px" :series="resourcesObj"></charts>
							</div>
							<div class="f-fr">
			                    <charts type="circle" width="85px" height="85px" :title="['编配率','非编配率']" :series="resourcesObj"></charts>
			                    <charts type="circle" width="85px" height="85px" :title="['可用率','非可用率']" :series="resourcesObj"></charts>
			                </div>
						</div>
						<div class="card-tips">装备金额：<span>12321</span>万元</div>
					</div>
					<div class="card-section f-cb f-mt10">
						<b>战储分布情况：<span>123</span>件</b>
						<div class="card-line">
						</div>
						<div class="f-cb">
							<div class="f-fl">
								<charts type="pie" width="150px" height="150px" :title="['战区分布占比']" :series="resourcesObj"></charts>
								
							</div>
							<div class="f-fr">
								<charts type="pie" width="150px" height="150px" :title="['战储等级占比']" :series="resourcesObj"></charts>
							</div>
						</div>
					</div>
				</card>
				<card  :title="'战储质量状态'" type="q">
					<div class="card-section f-cb">
						<div class="f-cb">
							<charts type="hbar" width="380px" height="150px" :series="resourcesObj"></charts>
						</div>
					</div>
				</card>
				<card  :title="'战储变化'" type="r">
					<div class="card-section f-cb">
						<div class="f-fl">
							<div class="card-row">计划补充数：<span>123</span>套</div>
							<div class="card-row">完成补充数：<span>123</span>套</div>
							<div class="card-row">计划退役数：<span>123</span>套</div>
							<div class="card-row">报废处置数：<span>123</span>套</div>
						</div>
						<div class="f-fr">
							<charts type="circle" width="130px" height="120px" :title="['完成率','非完成率']" :series="resourcesObj"></charts>
						</div>
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
        mainNav,card,charts,searchCheckbox,chinaMap
    },
    data(){
	    return {
	    	resourcesObj:[],
	    	config:(this.$route.query.name =='config')
	    }
	},
    methods:{
	        selectItem(){},       
			search(){}  
	}
};
</script>
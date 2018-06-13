<style lang="less">
    @import "./main.less";
</style>
<template>
	<div class="hjj">
	    <header class="hjj-header f-cb">
				<div class="item1 f-fl f-cb">
					<div class="f-fl title">天文时间：</div>
					<div class="f-fl time">
						<div>2018年4月27日 星期五</div>
						<div>01天15时25分39秒</div>
					</div>
				</div>
				<div class="f-fl item2">
					<h1 class="title"><i></i><span>火箭军信息通信装备综合态势</span></h1>
				</div>
				<div class="item3 f-fr f-cb">
					<div class="title f-fl">作战时间：</div>
					<div class="f-fl time">
						<div>2018年4月27日 星期五</div>
						<div>01天15时25分39秒</div>
					</div>
				</div>
		</header>
		
		<router-view></router-view>
	</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    components: {
        
    },
    data () {
        return {
            shrink: false,
            userName: ''
        };
    },
    computed: {
        menuList () {
            //return this.$store.state.app.menuList;
        }
    },
    created(){
        this.getPageCache().then(()=>{
            this.getPageComponents();
        });
    },
    methods: {
        init () {
           
        },
        toggleClick () {
            this.shrink = !this.shrink;
        },
        handleClickUserDropdown (name) {
            this.$router.push({
                name: 'login'
            });
        },
        ...mapActions(['getPageCache','getPageComponents'])
    },
    mounted () {
        this.init();
    }
};
</script>

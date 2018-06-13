<style lang="less">
    @import './main-nav.less';
</style>
<template>
    <div class="hjj-menu">
        <div v-if="config" style="position:absolute;bottom:0;">
            <Alert  show-icon style="display:inline-block;">页面设计模式（页面已禁止跳转，组件不能超出虚线框）</Alert>
        </div>
        <ul class="f-cb hjj-menu-nav">
            <li v-for="(item,key) in pageComponents" :class="{active:item.path === $route.params.id}">
                <router-link :to="'/custom/'+item.path" >
                    {{item.name}}
                </router-link>
            </li>
        </ul>
		<!-- <ul class="f-cb hjj-menu-nav">
			<li v-for="(item,key) in crouters" :class="{active:item.isActive}">
				<router-link :to="item.name" >
					{{item.title}}
				</router-link>
			</li>
		</ul> -->
        <div class="page-save" v-if="config">
            <i-button type="primary">
                <a @click.prevent.stop='savePageSet'>保存设置</a>
            </i-button>
            <i-button type="ghost">
                <a @click.prevent.stop='cacenlPageSet'>取消设置</a>
            </i-button>
        </div>
		<div class="setbtn">
			<i class="i-setmain"></i>
            <ul class="area-shadow">
                <li><i class="i-set"></i><router-link to="/pageset">页面设置</router-link></li>
                <li><i class="i-pass"></i><a>修改密码</a></li>
                <li><i class="i-loginout"></i><a>注销</a></li>
                <li><i class="i-close"></i><a>关闭</a></li>
            </ul>
		</div>
        <layoutbox></layoutbox>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import layoutbox from '@/views/components/layoutbox/layoutbox.vue';
import dataFilter from '@/libs/dataFilter';
export default {
    name: 'mainNav',
    data(){
        return {
            config:(this.$route.query.name === 'config'),   
        }
    },
    components: {
        layoutbox
    },
    props: {
        
    },
    computed: {
        crouters(){
    		return [{title:'综合态势',name:'comprehensive',isActive:false},{title:'装备态势',name:'equip',isActive:false},{title:'战储态势',name:'reserve',isActive:false},{title:'保障资源',name:'resources',isActive:false},{title:'业务动态',name:'business',isActive:false},{title:'任务动态',name:'task',isActive:false}].map((v,k)=>{
    			if(v.name == this.$route.name){
    				v.isActive = true;
    			}
    			return v
    		})
    	},
        ...mapState({
          pageComponents: state => {
                return state.pageComponents
            },
        })
    },
    // watch: {
    // '$route' (to, from) {
    //     this.$router.go(0);
    //     }
    // },
    mounted(){
        
    },
    methods: {
        savePageSet(){
            // Object.keys(sessionStorage).map((item,key)=>{
            //     if(item.indexOf('temp-') === 0){
            //         sessionStorage.removeItem(item.substring(item.indexOf('temp-')+5));
            //         sessionStorage[item.substring(item.indexOf('temp-')+5)] = sessionStorage[item];
            //     }
            // });
            // this.cleanTempPageSet();
            //this.$router.push({path: 'comprehensive',query:{name: "ok"}});
            const pageCache = dataFilter.deletePageCacheDataProperty( JSON.parse(JSON.stringify(this.pageComponents)) );
            window.sessionStorage.setItem('pageCache',JSON.stringify(pageCache));
            //上传数据....
            this.$router.push({path: '/pageset'});
        },
        cacenlPageSet(){
            this.cleanTempPageSet(); 
            //this.$router.push({path: 'comprehensive',query:{name: "cancel"}});
            this.$router.push({path: '/pageset'});
        },
        cleanTempPageSet(){
            Object.keys(sessionStorage).map((item,key)=>{
                if(item.indexOf('temp-') === 0){
                    sessionStorage.removeItem(item);
                }
            })
        }
    }
};
</script>

<style lang="less">
    @import './main-nav.less';
</style>
<template>
    <div class="hjj-menu">
        
        <div class="pre" v-show="isShowMore"><a @click.stop.prevent="pre"><Icon type="chevron-left"></Icon></a></div>
        <div ref="menuNavWrap" class="hjj-menu-nav-wrap">
            <ul class="f-cb hjj-menu-nav" :style="{width:`${ulWidth}px`}">
                <li v-for="(item,key) in pageComponents" class="navs" :style="{ left: liOffset + 'px'}" :class="{active:item.path === $route.params.id}">
                    <router-link :to="'/custom/'+item.path" >
                        {{item.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="last" v-show="isShowMore"><a @click.stop.prevent="last"><Icon type="chevron-right"></Icon></a></div>
        <div v-show="config" class="setTips f-cb">
            <div>
                <Alert  show-icon class="f-fl">页面设计模式（页面已禁止跳转，组件不能超出虚线框）</Alert>
            </div>
            <div class="page-save f-fr">
                <i-button type="primary">
                    <a @click.prevent.stop='savePageSet'>保存设置</a>
                </i-button>
                <i-button type="ghost">
                    <a @click.prevent.stop='cacenlPageSet'>取消设置</a>
                </i-button>
            </div>
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
            liDom:'',
            isShowMore:false,
            liOffset:0,
            config:(this.$route.query.name === 'config')
        }
    },
    components: {
        layoutbox
    },
    props: {
        
    },
    computed: {
        ulWidth(){
            return this.liDom?Number(this.liDom.offsetWidth* this.pageComponents.length):0;
        },
        ...mapState({
          pageComponents: state => {
                return state.pageComponents
            },
        })
    },
    watch: {
        pageComponents() {
            this.liDom = document.querySelector('.navs');
        },
        ulWidth(){
            this.isShowMore = (this.$refs.menuNavWrap && this.ulWidth>this.$refs.menuNavWrap.clientWidth);
        }
    },
    mounted(){
    },
    methods: {
        savePageSet(){
            const pageCache = dataFilter.deletePageCacheDataProperty( JSON.parse(JSON.stringify(this.pageComponents)) );
            window.sessionStorage.setItem('pageCache',JSON.stringify(pageCache));
            //上传数据....
            this.$router.push({path: '/pageset'});
        },
        cacenlPageSet(){
            this.$router.push({path: '/pageset'});
        },
        pre(){
            if( this.liOffset < 0){
                this.liOffset += this.liDom.offsetWidth;
            }
            // if(Math.abs(this.liOffset)>=this.liDom.offsetWidth){
            //     this.liOffset = this.liOffset + this.liDom.offsetWidth;
            // }else if(this.liOffset<0){
            //     this.liOffset = 0;
            // }
        },
        last(){
            if( this.ulWidth+this.liOffset >this.$refs.menuNavWrap.clientWidth){
                this.liOffset -= this.liDom.offsetWidth;
            }
            // if(Math.abs(this.liOffset)< (this.ulWidth-this.liDom.offsetWidth)){
            //     this.liOffset = this.liOffset - this.liDom.offsetWidth;
            // }else if(Math.abs(this.liOffset)>this.ulWidth){
            //     this.liOffset = -this.ulWidth;
            // }
        }
    },
};
</script>

<style lang="less">
    @import './search-list.less';
</style>

<template>
		<div class="hjj-card" v-drag="{callback:bindPos,unactive:!config || elementStatus}" 
         v-show="status.isShow !== 0 || config "
         :style="{position:position,left:`${status.x}px`,top:`${status.y}px`,opacity:status.isShow === 0?'0.4':'1',cursor:config?'move':'point','user-select':config?'none':''}"
         >
            <div class="search-category search-list">
                <input type="text" placeholder="搜索" class="box-sizing box_shadow_blue search_textbox">
                <div class="f-cb f-mt5">
                    <div class="f-fl box_shadow_blue select-wrap">
                        <select>
                            <option>全部</option>
                        </select>
                    </div>
                    <div class="f-fr button-wrap">
                        <button>搜索</button>
                    </div>
                </div>
                <ul class="task-list f-mt10">
                    <li class="f-cb">
                        <div class="f-fl f-pr task-title">
                            <span class="bg-topleft"></span>
                            <span class="bg-topright"></span>
                            <span class="bg-bottomleft"></span>
                            <span class="bg-bottomright"></span>
                            演训役训
                        </div>
                        <div class="f-fl task-content">
                            <div>任务名称：<span>x名称x名称x名称</span></div>
                            <div>任务号：<span>089654</span></div>
                        </div>
                    </li>
                    <li class="f-cb">
                        <div class="f-fl f-pr task-title">
                            <span class="bg-topleft"></span>
                            <span class="bg-topright"></span>
                            <span class="bg-bottomleft"></span>
                            <span class="bg-bottomright"></span>
                            演训役训
                        </div>
                        <div class="f-fl task-content">
                            <div>任务名称：<span>x名称x名称x名称</span></div>
                            <div>任务号：<span>089654</span></div>
                        </div>
                    </li>
                    <li class="f-cb">
                        <div class="f-fl f-pr task-title">
                            <span class="bg-topleft"></span>
                            <span class="bg-topright"></span>
                            <span class="bg-bottomleft"></span>
                            <span class="bg-bottomright"></span>
                            演训役训
                        </div>
                        <div class="f-fl task-content">
                            <div>任务名称：<span>x名称x名称x名称</span></div>
                            <div>任务号：<span>089654</span></div>
                        </div>
                    </li>
                </ul>
            </div>
            <card-edit @show="show" @hide="hide" @del="del"></card-edit>
        </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'searchList',
    components: {
        cardEdit
    },
    data(){
        return {
            position:'absolute',
            config:(this.$route.query.name === 'config'),    
        }
    },
    props: {
        index:{
          type:Number
        },
        parents:{
          type:Array
        },
        status:{
          type:Object
        },
        elementStatus:{
            type:Boolean,
            default:false
        },
        data:{
            type:Object
        }
    },
    mounted(){
        
    },
    methods: {
        bindPos ({x,y}) {
            this.status.x = x;
            this.status.y = y;
        },
        show(){
            this.status.isShow = 1;
        },
        hide(){
            this.status.isShow = 0;
        },
        del(){
            this.parents.splice(this.index,1);
        }
    }
};
</script>

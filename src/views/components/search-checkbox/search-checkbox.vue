<style lang="less">
    @import './search-checkbox.less';
</style>

<template>
	<div class="hjj-card search-checkbox" v-drag="{callback:bindPos,unactive:!config || elementStatus}" 
         v-show="status.isShow !== 0 || config "
         :style="{position:position,left:`${status.x}px`,top:`${status.y}px`,opacity:status.isShow === 0?'0.4':'1',cursor:config?'move':'point','user-select':config?'none':''}"
         >
        <div class="search-category">

            <input type="text" placeholder="搜索" class="box-sizing box_shadow_blue search_textbox">

            <Tabs value="name1" size="small" class="f-mt10">
                <TabPane label="合同类型" name="name1">
                        <div class="f-cb">
                            <ul class="f-fl left-list">
                                <li><a href="javascript:void(0);">类型一</a></li>
                                <li><a href="javascript:void(0);">类型二</a></li>
                                <li><a href="javascript:void(0);">类型三</a></li>
                            </ul>
                            <div class="f-fl right-checkboxs area-shadow">
                                    <div class="select-all f-cb">
                                        <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll" size="large">全选</Checkbox>
                                    </div>
                                    <Checkbox-group v-model="checkAllGroup" size="large" @on-change="checkAllGroupChange">
                                        <Checkbox label="香蕉"></Checkbox>
                                        <Checkbox label="苹果"></Checkbox>
                                        <Checkbox label="西瓜"></Checkbox>
                                    </Checkbox-group>
                            </div>
                        </div>
                </TabPane>
                <TabPane label="项目类型" name="name2">
                    
                </TabPane>
            </Tabs>
            <div class="select-inline-selected box_shadow_blue f-mt10">
                <span class="bg-topleft radius"></span>
                <span class="bg-topright radius"></span>
                <span class="bg-bottomleft radius"></span>
                <span class="bg-bottomright radius"></span>
                <h4>已选中检索项</h4>
                <div class="select-all f-cb">
                    <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll" size="large">全选</Checkbox>
                </div>
                <Checkbox-group v-model="checkAllGroup" size="large" @on-change="checkAllGroupChange">
                    <Checkbox label="香蕉"></Checkbox>
                    <Checkbox label="苹果"></Checkbox>
                    <Checkbox label="西瓜"></Checkbox>
                </Checkbox-group>
            </div>
        </div>
        <card-edit @show="show" @hide="hide" @del="del"></card-edit>
    </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'searchCheckbox',
    components: {
        cardEdit
    },
    data(){
        return {
            position:'absolute',
            config:(this.$route.query.name === 'config'),
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜']        
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
    
    computed: {
        
    },
    mounted(){
    },
    methods: {
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange (data) {
            if (data.length === 3) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        },
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
        },
    }
};
</script>

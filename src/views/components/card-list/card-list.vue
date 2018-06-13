<style lang="less">
    @import './card-list.less';
</style>

<template>
	<div v-show="status.isShow !== 0 || config " :style="{opacity:status.isShow === 0?'0.4':'1'}">
      <div class="card-section">
        <b>
          <span v-for="(item,index) in data.top" :key="`top${index}`">{{item.name}}：<span>{{item.value}}</span>{{item.unit}}</span>
        </b>
        <div class="card-row">
          <span class="card-td" :style="{display:display,width:display=='block'?'100%':'200px'}" v-for="(item,index) in data.bottom" :key="`item${index}`">{{item.name}}：<span>{{item.value}}</span>{{item.unit}}</span>
        </div>
        <card-edit @show="show" @hide="hide" @del="del"></card-edit>
      </div>
  </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'cardList',
    components: {
      cardEdit
    },
    data(){
        return {
            config:(this.$route.query.name === 'config')
        }
    },
    props:{
        index:{
          type:Number
        },
        parents:{
          type:Array
        },
        status:{
          type:Object
        },
        components:{
          type:Array
        },
        cols:{
          type:String,
          default:'1'
        },
        display:{
          type:String
        },
        data:{
          type:Object
        }
    },
    computed:{

    },
    mounted(){
    },
    methods: {
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

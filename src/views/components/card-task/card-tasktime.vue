<style lang="less">
    @import './card-task.less';
</style>

<template>
    <div class="f-cb card-tasktime" v-show="status.isShow !== 0 || config " :style="{opacity:status.isShow === 0?'0.4':'1'}">
      <b>任务总时长：<span>{{data.times}}</span>天</b>
      <span class="f-fr subtitle">（值班任务没有总时长）</span>
      <card-edit v-if="!status.slot" @show="show" @hide="hide" @del="del"></card-edit>
    </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'cardTasktime',
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

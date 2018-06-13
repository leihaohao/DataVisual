<style lang="less">
    @import './card-task.less';
</style>

<template>
    <div class="f-cb card-taskprogress" v-show="status.isShow !== 0 || config " :style="{opacity:status.isShow === 0?'0.4':'1'}">
      <div>任务总进度： 
        <span class="hjj-progress">
          <span class="progress-rate" style="width:85%;"><span class="progress-text">{{data.progress}}</span></span>
        </span>
      </div>
      <card-edit v-if="!status.slot" @show="show" @hide="hide" @del="del"></card-edit>
    </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'cardTaskprogress',
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

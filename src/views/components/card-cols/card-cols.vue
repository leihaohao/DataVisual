<style lang="less">
    @import './card-cols.less';
</style>

<template>
  <div class="card-section" v-show="status.isShow !== 0 || config " :style="{opacity:status.isShow === 0?'0.4':'1'}">
    <b>
      <span v-for="(item,index) in data.top" :key="`top${index}`">{{item.name}}：<span>{{item.value}}</span>{{item.unit}}</span>
    </b>
  	<Row v-if="cols === '2'">
      <Col span="18"><slot name="1"></slot></Col>
      <Col span="6"><slot name="2"></slot></Col>
    </Row>
    <Row v-else>
      <Col span="24"><slot name="1"></slot></Col>
    </Row>
    <div class="section-bottom">
      <span v-for="(item,index) in data.bottom" :key="`bottom${index}`">{{item.name}}：<span>{{item.value}}</span>{{item.unit}}</span>
    </div>
    <card-edit @show="show" @hide="hide" @del="del"></card-edit>
  </div>
</template>

<script>
import cardEdit from '@/views/components/card-edit/card-edit.vue';
export default {
    name: 'cardCols',
    components: {
      cardEdit
    },
    data(){
        return {
            config:(this.$route.query.name === 'config'),
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
      data:{
        type:Object
      },
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
    },
    updated(){
      
    }
};
</script>

<style lang="less">
    @import './card-edit.less';
</style>

<template>
  <Dropdown trigger="click" style="position:absolute;right:0;top:0;" v-if="config">
       <i-button type="primary" size="small">
          编辑
          <Icon type="arrow-down-b"></Icon>
      </i-button>
      <Dropdown-menu slot="list">
          <Dropdown-item @click.native="show" :disabled="isShow">显示</Dropdown-item>
          <Dropdown-item @click.native="hide" :disabled="!isShow">隐藏</Dropdown-item>
          <Dropdown-item @click.native="del">删除</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
</template>

<script>

export default {
    name: 'cardEdit',
    components: {
    },
    data(){
        return {
            id:`id${(Math.random()*2e+15).toFixed()}`,
            config:(this.$route.query.name === 'config'),
            isShow:true
        }
    },
    props:{
        title: {
          type: String
        },
        display:{
          type: String
        },
        type:{
          type:String,
          default:`${(Math.random()*2e+15).toFixed()}`
        },
        width:{
            type:String
        },
        elementStatus:{
            type:Boolean,
            default:false
        }
    },
    computed:{

    },
    mounted(){
    },
    methods: {
      show(){
        if(this.isShow)
          return;
        this.isShow = !this.isShow;
        this.$emit('show');
      },
      hide(){
        if(!this.isShow)
          return;
        this.isShow = !this.isShow;
        this.$emit('hide');
      },
      del(){
        this.$emit('del');
      }
    },
    updated(){
      
    }
};
</script>

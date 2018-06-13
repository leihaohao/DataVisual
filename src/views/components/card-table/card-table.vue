<style lang="less">
    @import './card-table.less';
</style>

<template>
	<div :draggable="elementStatus" @dragstart="dragstartEvent" >
      <h1 v-show="elementStatus">列表：</h1>
      <div class="card-section">
        <div>
          <b>修理所：<span>123</span></b>
          <b>人员总数：<span>2000</span></b>
          <div class="card-line"></div>
        </div>
        <div class="card-row">使用人员：<span>123</span></div>
        <div class="card-row">保障人员：<span>123</span></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'card',
    components: {
    },
    data(){
        return {
            position:'relative',
            offsetLeft:'',
            offsetTop:'',
            isShow:1,
            id:`id${(Math.random()*2e+15).toFixed()}`,
            config:(this.$route.query.name === 'config')
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
        showCard(){
            return !( (this.config === false) && (this.isShow === 0) && !this.display)
        },

    },
    mounted(){
        this.setInitPos();
    },
    methods: {
      bindPos ({x,y}) {
        clearTimeout(window.cardTimer);
         window.cardTimer = setTimeout(()=>{
            this.saveLocalStatus({x:x,y:y});
        },500)
      },
      setInitPos(){
        if(this.elementStatus)
            return ;
        this.offsetTop = this.$el.offsetTop;
        this.offsetLeft = this.$el.offsetLeft;
        this.position = 'absolute';
        let cardStatus = JSON.parse(window.sessionStorage.getItem('card'+this.type));
        if(cardStatus != undefined){
            this.offsetTop = cardStatus.y;
            this.offsetLeft = cardStatus.x;
            this.isShow = cardStatus.isShow?1:0;
        }
      },
      saveLocalStatus({x,y}){
        window.sessionStorage.setItem('temp-card'+this.type,JSON.stringify({x:x,y:y,isShow:this.isShow?1:0}));
      },
      change(status){
        this.isShow = status;  
        this.saveLocalStatus({x:this.$el.offsetLeft,y:this.$el.offsetTop});
      },
      dragstartEvent(ev){
        this.elementStatus && ev.dataTransfer.setData('type','card-list');
      }
    }
};
</script>

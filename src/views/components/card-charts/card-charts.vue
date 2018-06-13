<style lang="less">
    @import './card-charts.less';
</style>

<template>
	  <div :draggable="elementStatus" @dragstart="dragstartEvent">
        <h1 v-show="elementStatus">{{title}}：</h1>
        <charts :type="type" width="100%" height="100px" :title="['在编率','非在编率']" :series="[]"></charts>
    </div>
</template>

<script>
import charts from '@/views/components/charts/charts.vue';
export default {
    name: 'cardList',
    components: {
      charts
    },
    data(){
        return {
            id:`id${(Math.random()*2e+15).toFixed()}`,
            config:(this.$route.query.name === 'config'),

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
          required:true
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
        this.elementStatus && ev.dataTransfer.setData('type',`card-charts-${this.type}`);
      }
    }
};
</script>

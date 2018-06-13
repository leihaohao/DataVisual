<style lang="less">
    @import './card.less';
</style>

<template>
	<div v-drag="{callback:bindPos,unactive:!config || elementStatus}" 
         v-show="showCard" class="hjj-card"
         :style="{position:position,left:`${offsetLeft}px`,top:`${offsetTop}px`,opacity:!isShow?'0.4':'1',cursor:config?'move':'point',width:width}"
         :draggable="elementStatus" @dragstart="dragstartEvent" 
         >
        <h1 v-show="elementStatus">卡片容器：</h1>
        <h3>
            <span v-text="title" v-show="title"></span>
            <div class="hjj-card-openclose" v-show="config && !elementStatus">
                <Radio-group v-model="isShow" @on-change="change">  
                    <Radio :label="1"><span>显示</span></Radio>  
                    <Radio :label="0"><span>不显示</span></Radio> 
                </Radio-group>
                <a @click.prevent.stop="deleteEle" class="delete">
                  <Icon type="close-circled"></Icon>删除
                </a>
            </div>
        </h3>
        <div ref="cardDynContent" class="card-content" @dragover.prevent="dragovers" @drop.prevent.stop="drops" @dragleave="ondragleave">
            <slot></slot>
            <component :is="item.component" :title="item.title" v-for="(item,key) in cardItems" :key="`cardEle${key}`" :type="item.type"></component>
        </div>
    </div>
</template>

<script>
import cardCharts from '@/views/components/card-charts/card-charts.vue';
import cardList from '@/views/components/card-list/card-list.vue';
import cardCols2 from '@/views/components/card-cols2/card-cols2.vue';
export default {
    name: 'card',
    components: {
      cardCharts,cardList,cardCols2
    },
    data(){
        return {
            position:'relative',
            offsetLeft:'',
            offsetTop:'',
            isShow:1,
            id:`id${(Math.random()*2e+15).toFixed()}`,
            config:(this.$route.query.name === 'config'),
            cardItems:[]
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
        this.elementStatus && ev.dataTransfer.setData('type','card');
      },
      dragovers(ev){
        this.$refs.cardDynContent.classList.add('tranboxShadow');
      },
      ondragleave(ev){
        this.$refs.cardDynContent.classList.remove('tranboxShadow');
      },
      drops(ev){
        this.$refs.cardDynContent.classList.remove('tranboxShadow');
        if(this.elementStatus)
          return ;
        let type = ev.dataTransfer.getData('type');
        if(type === 'card-list'){
          this.cardItems.push({
            component: 'card-list'
          })
        }else if(type === 'card-charts-pie'){
          this.cardItems.push({
            component: 'card-charts',
            type:'pie'
          })
        }else if(type === 'card-charts-circle'){
          this.cardItems.push({
            component: 'card-charts',
            type:'circle'
          })
        }else if(type === 'card-charts-vbar'){
          this.cardItems.push({
            component: 'card-charts',
            type:'vbar'
          })
        }else if(type === 'card-cols2'){
          this.cardItems.push({
            component: 'card-cols2',
          })
        }
        //cols2
        ev.dataTransfer.setData('type','');
      },
      deleteEle(){
        //操作sesisonStorage 
        alert('已经删除');
      }
    }
};
</script>

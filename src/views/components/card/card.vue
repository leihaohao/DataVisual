<style lang="less">
    @import './card.less';
</style>

<template>
  <div v-drag="{callback:bindPos,unactive:!config || elementStatus}" 
         v-show="status.isShow !== 0 || config " class="hjj-card"
         :style="{position:position,left:`${status.x}px`,top:`${status.y}px`,opacity:status.isShow === 0?'0.4':'1',cursor:config?'move':'point','user-select':config?'none':''}"
         >       
        <h3>
            <span v-show="!inputFocus" @click.stop.prevent="spanClick" :style="{cursor:config?'pointer':'auto'}">{{status.name}}</span>
            <input ref="input" maxlength="10" v-show="inputFocus && config" type="text" v-model="status.name" @blur.stop.prevent="inputFocus = !inputFocus">
            <div class="hjj-card-openclose" v-show="config && !elementStatus">
                <Radio-group v-model="status.isShow" @on-change="change">  
                    <Radio :label="1"><span>显示</span></Radio>  
                    <Radio :label="0"><span>隐藏</span></Radio> 
                </Radio-group>
                <a @click.prevent.stop="deleteEle" class="delete">
                  <Icon type="close-circled"></Icon>删除
                </a>
            </div>
        </h3>
        <div ref="cardDynContent" class="card-content" @dragover.prevent="dragovers" @drop.prevent.stop="drops" @dragleave="ondragleave">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import cardCharts from '@/views/components/card-charts/card-charts.vue';
import cardList from '@/views/components/card-list/card-list.vue';
import cardCols2 from '@/views/components/card-cols2/card-cols2.vue';
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'card',
    components: {
      cardCharts,cardList,cardCols2
    },
    data(){
        return {
            position:'absolute',
            inputFocus:false,
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
        elementStatus:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        ...mapState(['ZbslBzs','ZcslZbs','ZcslQcs','BznlRy','BznlSbs','BznlQcs','JhzxZc','JhzxDg','JhzxWx','Foot'])

    },
    mounted(){
      
    },
    methods: {
      ...mapActions(['getZbslBzs','getZcslZbs','getZcslQcs','getJhzxZc','getJhzxDg','getJhzxWx']),
      spanClick(){
        if(!this.config)
          return 
        this.inputFocus = !this.inputFocus;
        this.$nextTick(()=>{
          this.$refs.input.focus();
        })
      },
      bindPos ({x,y}) {
        this.status.x = x;
        this.status.y = y;
      },
      change(status){
        this.status.isShow = status;  
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
        if(type === 'ZbslBzs'){
          this.components.push({
            cols:2,ex:'data',origin:type,type:'card-cols',isShow:1,data:this[type]['data'],
            components: [{type:'charts',slot:1,origin:'ZbslBzs',ex:'chartMain',height:'250px',data:this[type]['chartMain']},
                        {type:'charts',slot:2,origin:'ZbslBzs',ex:'chartBprate',height:'85px',data:this[type]['chartBprate']},
                        {type:'charts',slot:2,origin:'ZbslBzs',ex:'chartKyrate',height:'85px',data:this[type]['chartKyrate']},
                        {type:'charts',slot:2,origin:'ZbslBzs',ex:'chartZbrate',height:'85px',data:this[type]['chartZbrate']}
            ]
          })
        }else if(type === 'ZcslZbs'){
          this.components.push({
            type:'card-cols',isShow:1,cols:1,origin:'ZcslZbs',ex:'data',data:this[type]['data'],
            components: [{type:'charts',slot:1,origin:'ZcslZbs',ex:'chartMain',height:'150px',data:this[type]['chartMain']}]
          })
        }else if(type === 'ZcslQcs'){
          this.components.push({
            type:'card-cols',isShow:1,cols:1,origin:'ZcslQcs',ex:'data',data:this[type]['data'],
            components:[{type:'charts',slot:1,origin:'ZcslQcs',ex:'chartMain',height:'150px',data:this[type]['chartMain']}]
          })
        }else if(type === 'BznlRy'){
          this.components.push({type:'card-list',isShow:1,cols:1,origin:'BznlRy',ex:'data',display:'block',data:this[type]['data']});
        }else if(type === 'BznlSbs'){
          this.components.push({type:'card-cols',isShow:1,cols:2,origin:'BznlSbs',ex:'data',data:this[type]['data'],
                                components:[
                                  {type:'charts',slot:1,origin:'BznlSbs',ex:'chartMain',height:'150px',data:this[type]['chartMain']},
                                  {type:'charts',slot:2,origin:'BznlSbs',ex:'chartKyrate',height:'85px',data:this[type]['chartKyrate']}
                                ]
                              });
        }else if(type === 'BznlQcs'){
          this.components.push({type:'card-cols',isShow:1,cols:1,origin:'BznlQcs',ex:'data',data:this[type]['data'],
                                components:[
                                  {type:'charts',slot:1,origin:'BznlQcs',ex:'chartMain',height:'150px',data:this[type]['chartMain']},
                                ]
                              });
        }else if(type === 'JhzxDg'){
          this.components.push({type:'card-list',isShow:1,cols:1,origin:'JhzxDg',ex:'data',data:this[type]['data']});
        }else if(type === 'JhzxWx'){
          this.components.push({type:'card-list',isShow:1,cols:1,origin:'JhzxWx',ex:'data',data:this[type]['data']});
        }else if(type === 'JhzxZc'){
          this.components.push({type:'card-list',isShow:1,cols:1,origin:'JhzxZc',ex:'data',data:this[type]['data']});
        }
        ev.dataTransfer.setData('type','');
      },
      deleteEle(){
        this.parents.splice(this.index,1);
      }
    }
};
</script>

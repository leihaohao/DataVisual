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
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'card',
    components: {
      
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
        ...mapState(['ZbslBzs','ZcslZbs','ZcslQcs','BznlRy','BznlSbs','BznlQcs','JhzxZc','JhzxDg','JhzxWx','Foot','ZbzlZt','Zbbh','Zbdy','RlzyRy','RlzyBz','SbzySbs','QcslQcs','Zbdt','XmqkZs','XmqkFb','Htqk','Jfqk','Ckqk','Zczl','Zcbh','RwSc','RwJd','RwDw','RwRy','RwZb'])
    },    
    mounted(){
      
    },
    methods: {
      ...mapActions(['getZbslBzs','getZcslZbs','getZcslQcs','getBznlRy','getBznlSbs','getBznlQcs','getJhzxZc','getJhzxDg','getJhzxWx','getFoot','getZbzlZt','getZbbh','getZbdy','getRlzyRy','getRlzyBz','getSbzySbs','getQcslQcs','getZbdt','getXmqkZs','getXmqkFb','getHtqk','getJfqk','getCkqk','getZczl','getZcbh','getRwSc','getRwJd','getRwDw','getRwRy','getRwZb'
        ]),
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
        const _self = this;
        let type = ev.dataTransfer.getData('type');
        if(type === 'ZbslBzs'){
          _self.getZbslBzs().then(()=>{
            _self.components.push({
              cols:2,ex:'data',origin:type,type:'card-cols',isShow:1,data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-equiphave',
              components: [{id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'ZbslBzs',ex:'chartMain',height:'250px',data:_self[type]['chartMain']},
                          {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'ZbslBzs',ex:'chartBprate',height:'85px',data:_self[type]['chartBprate']},
                          {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'ZbslBzs',ex:'chartKyrate',height:'85px',data:_self[type]['chartKyrate']},
                          {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'ZbslBzs',ex:'chartZbrate',height:'85px',data:_self[type]['chartZbrate']}
              ]
            })
          })
        }else if(type === 'ZcslZbs'){
          _self.getZcslZbs().then(()=>{
            _self.components.push({
              type:'card-cols',isShow:1,cols:1,origin:'ZcslZbs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
              components: [{id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'ZcslZbs',ex:'chartMain',height:'150px',data:_self[type]['chartMain']}]
            })
          })
        }else if(type === 'ZcslQcs'){
          _self.getZcslQcs().then(()=>{
            _self.components.push({
              type:'card-cols',isShow:1,cols:1,origin:'ZcslQcs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
              components:[{id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'ZcslQcs',ex:'chartMain',height:'150px',data:_self[type]['chartMain']}]
            })
          })
        }else if(type === 'BznlRy'){
          _self.getBznlRy().then(()=>{
            _self.components.push({type:'card-list',isShow:1,cols:1,origin:'BznlRy',ex:'data',display:'block',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed()});
          })
        }else if(type === 'BznlSbs'){
          _self.getBznlSbs().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'BznlSbs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'BznlSbs',ex:'chartMain',height:'150px',data:_self[type]['chartMain']},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'BznlSbs',ex:'chartKyrate',height:'85px',data:_self[type]['chartKyrate']}
                                  ]
                                });
          })
        }else if(type === 'BznlQcs'){
          _self.getBznlQcs().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'BznlQcs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'BznlQcs',ex:'chartMain',height:'150px',data:_self[type]['chartMain']},
                                  ]
                                });
          })
        }else if(type === 'JhzxDg'){
          _self.getJhzxDg().then(()=>{
            _self.components.push({type:'card-list',isShow:1,cols:1,origin:'JhzxDg',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed()});
          })
        }else if(type === 'JhzxWx'){
          _self.getJhzxWx().then(()=>{
            _self.components.push({type:'card-list',isShow:1,cols:1,origin:'JhzxWx',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed()});
          })
        }else if(type === 'JhzxZc'){
          _self.getJhzxZc().then(()=>{
            _self.components.push({type:'card-list',isShow:1,cols:1,origin:'JhzxZc',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed()});
          })
        }else if(type === 'ZbzlZt'){
          _self.getZbzlZt().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'ZbzlZt',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'ZbzlZt',ex:'chartMain',height:'160px',data:_self[type]['chartMain']},
                                  ]
                                });
          })
        }else if(type === 'Zbbh'){
          _self.getZbbh().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'Zbbh',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {type:'card-list',big:true,isShow:1,slot:1,origin:'Zbbh',ex:'list',height:'150px',data:_self[type]['list'],id:(Math.random()*2e+2).toFixed()},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'Zbbh',ex:'chartWcrate',height:'120px',data:_self[type]['chartWcrate']},
                                  ]
                                });
          })
        }else if(type === 'Zbdy'){
          _self.getZbdy().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'Zbdy',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'Zbdy',ex:'chartMain',height:'150px',data:_self[type]['chartMain']},
                                  ]
                                });
          })
        }else if(type === 'RlzyRy'){
          _self.getRlzyRy().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'RlzyRy',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-haveamount',
                                  components:[
                                    {type:'card-list',big:true,isShow:1,slot:1,origin:'RlzyRy',ex:'list',height:'150px',data:_self[type]['list'],id:(Math.random()*2e+2).toFixed()},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'RlzyRy',ex:'chartZbrate',height:'120px',data:_self[type]['chartZbrate']},
                                  ]
                                });
          })
        }else if(type === 'RlzyBz'){
          _self.getRlzyBz().then(()=>{
            _self.components.push({type:'card-list',isShow:1,origin:'RlzyBz',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[]
                                });
          })
        }else if(type === 'SbzySbs'){
          _self.getSbzySbs().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'SbzySbs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {type:'card-list',big:true,isShow:1,slot:1,origin:'SbzySbs',ex:'list',height:'150px',data:_self[type]['list'],id:(Math.random()*2e+2).toFixed()},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'SbzySbs',ex:'chartKyrate',height:'120px',data:_self[type]['chartKyrate']},
                                  ]
                                });
          })
        }else if(type === 'QcslQcs'){
          _self.getQcslQcs().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'QcslQcs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'QcslQcs',ex:'chartMain',height:'150px',data:_self[type]['chartMain']},
                                  ]
                                });
          })
        }else if(type === 'Zbdt'){
          _self.getZbdt().then(()=>{
            _self.components.push({type:'card-list',isShow:1,origin:'Zbdt',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),display:'block'
                                });
          })
        }else if(type === 'XmqkZs'){
          _self.getXmqkZs().then(()=>{
            _self.components.push({type:'card-list',isShow:1,origin:'XmqkZs',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),display:'block',path:'/ov-projprogress'
                                });
          })
        }else if(type === 'XmqkFb'){
          _self.getXmqkFb().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'XmqkFb',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-projprogress',
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'XmqkFb',ex:'chartMain',height:'120px',data:_self[type]['chartMain']},
                                  ]
                                });
          })
        }else if(type === 'Htqk'){
          _self.getHtqk().then(()=>{
            _self.components.push({type:'card-list',isShow:1,cols:1,origin:'Htqk',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-contractprogress'
                                });
          })
        }else if(type === 'Jfqk'){
          _self.getJfqk().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'Jfqk',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-appropriate',
                                  components:[
                                    {type:'card-list',big:true,slot:1,origin:'Jfqk',ex:'list',height:'120px',data:_self[type]['list'],id:(Math.random()*2e+2).toFixed()},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'Jfqk',ex:'chartBfrate',height:'100px',data:_self[type]['chartBfrate']},
                                  ]
                                });
          })
        }else if(type === 'Ckqk'){
          _self.getCkqk().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'Ckqk',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-reserve',
                                  components:[
                                    {type:'card-list',big:true,slot:1,origin:'Ckqk',ex:'list',height:'120px',data:_self[type]['list'],id:(Math.random()*2e+2).toFixed()},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'Ckqk',ex:'chartSyrate',height:'100px',data:_self[type]['chartSyrate']},
                                  ]
                                });
          })
        }else if(type === 'Zczl'){
          _self.getZczl().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'Zczl',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'Zczl',ex:'chartMain',height:'160px',data:_self[type]['chartMain']}
                                  ]
                                });
          })
        }else if(type === 'Zcbh'){
          _self.getZcbh().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:2,origin:'Zcbh',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),
                                  components:[
                                    {type:'card-list',big:true,slot:1,origin:'Zcbh',ex:'list',height:'120px',data:_self[type]['list']},
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:2,origin:'Zcbh',ex:'chartWcrate',height:'100px',data:_self[type]['chartWcrate']},
                                  ]
                                });
          })
        }else if(type === 'RwSc'){
          _self.getRwSc().then(()=>{
            _self.components.push({type:'card-tasktime',isShow:1,origin:'RwSc',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-joinperson'
            });
          })
        }else if(type === 'RwJd'){
          _self.getRwJd().then(()=>{
            _self.components.push({type:'card-taskprogress',isShow:1,origin:'RwJd',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed()});
          })
        }else if(type === 'RwDw'){
          _self.getRwDw().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'RwDw',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-joinperson',
                                    components:[
                                      {type:'card-taskunit',slot:1,origin:'RwDw',ex:'list',height:'160px',data:_self[type]['list'],id:(Math.random()*2e+2).toFixed()},
                                    ]
                                  });
          })
        }else if(type === 'RwRy'){
          _self.getRwRy().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'RwRy',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-joinperson',
                                    components:[
                                      {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'RwRy',ex:'chartMain',height:'160px',data:_self[type]['chartMain']},
                                    ]
                                  });
          })
        }else if(type === 'RwZb'){
          _self.getRwZb().then(()=>{
            _self.components.push({type:'card-cols',isShow:1,cols:1,origin:'RwZb',ex:'data',data:_self[type]['data'],id:(Math.random()*2e+2).toFixed(),path:'/ov-joinperson',
                                  components:[
                                    {id:(Math.random()*2e+2).toFixed(),type:'charts',slot:1,origin:'RwZb',ex:'chartMain',height:'250px',data:_self[type]['chartMain']}
                                  ]
                                });
          })
        }
        ev.dataTransfer.setData('type','');
      },
      deleteEle(){
        this.parents.splice(this.index,1);
      }
    }
};
</script>

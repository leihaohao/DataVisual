<style lang="less">
    @import './layoutbox.less';
</style>

<template>
	<div v-show="config" class="hjj-layoutbox" :style="{height:layoutboxHeight+'px'}">
        <div class="aisdebar" @click.stop.prevent="closAside">
            <Icon v-if="asideHide" type="chevron-left"></Icon>
            <Icon v-else type="chevron-right"></Icon>
        </div>
        <Tabs :class="{'layoutTabs':true,'hide':asideHide}">
            <TabPane label="业务组件">
                <Collapse>
                    <Panel :name="key+1 +''"  v-for="(item,key) in menuComponents" >
                        {{item.name}}
                        <p  v-for="item2 in item.components" class="area-shadow" slot="content" draggable="true" @dragstart="dragstartEvent($event,item2.type)">{{item2.name}}</p>
                    </Panel>
                </Collapse>
                <!-- <ul :class="{'layoutbox-menu':true}">
                    <li draggable="true" @dragstart="dragstartEvent($event,item.type)" class="area-shadow" v-for="item in menuComponents" >
                        {{item.name}}
                    </li>
                </ul> -->
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import card from '@/views/components/card/card.vue';
import cardList from '@/views/components/card-list/card-list.vue';
import cardCharts from '@/views/components/card-charts/card-charts.vue';
import cardCols from '@/views/components/card-cols/card-cols.vue';
import cardZbsl from '@/views/components/business-card-ele/card-zbsl/card-zbsl.vue';
import cardZcsl from '@/views/components/business-card-ele/card-zcsl/card-zcsl.vue';
import cardBznl from '@/views/components/business-card-ele/card-bznl/card-bznl.vue';
import cardJhzx from '@/views/components/business-card-ele/card-jhzx/card-jhzx.vue';
export default {
    name: 'layoutbox',
    components: {
        card,cardList,cardCharts,cardCols,cardZbsl,cardZcsl,cardBznl,cardJhzx
    },
    data(){
        return {
            menuComponents:[
                {name:'容器',components:[
                    {name:'容器框',type:'card'}
                ]},
                {name:'任务菜单',components:[
                    {name:'任务栏',type:'foot'}
                ]},
                {name:'搜索',components:[
                    {name:'搜索复选框',type:'search-checkbox'},
                    {name:'搜索列表',type:'search-list'}
                ]},
                {name:'装备实力',components:[
                    {name:'编制数量',type:'ZbslBzs'}
                ]},
                {name:'战储实力',components:[
                    {name:'战储装备数',type:'ZcslZbs'},
                    {name:'战储器材数',type:'ZcslQcs'}
                ]},
                {name:'保障能力',components:[
                    {name:'人员总数',type:'BznlRy'},
                    {name:'设备数量',type:'BznlSbs'},
                    {name:'器材数量',type:'BznlQcs'}
                ]},
                {name:'执行计划',components:[
                    {name:'订购计划',type:'JhzxDg'},
                    {name:'维修计划',type:'JhzxWx'},
                    {name:'战储计划',type:'JhzxZc'}
                ]}
            ],
            config:(this.$route.query.name === 'config'),
            layoutboxHeight:window.innerHeight,
            asideHide:false
        }
    },
    computed:{
    },
    props:{
        title: {
          type: String
        },
        display:{
          type: String
        },
        type:{
          type:String
        }
    },
    computed:{
        
    },
    mounted(){
        this.resize();
    },
    methods: {
      resize(){
        window.onresize = ()=>{
            this.layoutboxHeight =  window.innerHeight;
        };
      },
      closAside(){
        this.asideHide = !this.asideHide;
      },
      dragstartEvent(ev,type){
        ev.dataTransfer.setData('type',type);
      }
    }
};
</script>

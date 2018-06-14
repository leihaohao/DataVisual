<style lang="less">
    @import './layoutbox.less';
</style>

<template>
	<div v-show="config" class="hjj-layoutbox">
        <div class="aisdebar" @click.stop.prevent="closAside">
            <Icon v-if="asideHide" type="chevron-left"></Icon>
            <Icon v-else type="chevron-right"></Icon>
        </div>
        <Tabs :class="{'layoutTabs':true,'hide':asideHide}">
            <TabPane label="业务组件">
                <Collapse :style="{height:layoutboxHeight+'px'}">
                    <Panel :name="key+1 +''"  v-for="(item,key) in menuComponents" :key="`panel${key}`">
                        {{item.name}}
                        <p  v-for="(item2,key) in item.components" class="area-shadow" slot="content" draggable="true" @dragstart="dragstartEvent($event,item2.type)" :key="`p${key}`">{{item2.name}}</p>
                    </Panel>
                </Collapse>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>

export default {
    name: 'layoutbox',
    components: {
        
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
                ]},
                {name:'装备质量',components:[
                    {name:'状态',type:'ZbzlZt'}
                ]},
                {name:'装备变化',components:[
                    {name:'概况',type:'Zbbh'}
                ]},
                {name:'装备动用',components:[
                    {name:'概况',type:'Zbdy'}
                ]},
                {name:'人力资源',components:[
                    {name:'使用人员',type:'RlzyRy'},
                    {name:'保障人群',type:'RlzyBz'}
                ]},
                {name:'设备资源',components:[
                    {name:'设备数量',type:'SbzySbs'}
                ]},
                {name:'器材实力',components:[
                    {name:'器材数量',type:'QcslQcs'}
                ]},
                {name:'装备动态',components:[
                    {name:'概况',type:'Zbdt'}
                ]},
                {name:'项目情况',components:[
                    {name:'项目总数',type:'XmqkZs'},
                    {name:'类型分布',type:'XmqkFb'},
                ]},
                {name:'合同情况',components:[
                    {name:'概况',type:'Htqk'}
                ]},
                {name:'经费情况',components:[
                    {name:'概况',type:'Jfqk'}
                ]},
                {name:'仓库情况',components:[
                    {name:'概况',type:'Ckqk'}
                ]},
                {name:'战储质量状态',components:[
                    {name:'概况',type:'Zczl'}
                ]},
                {name:'战储变化',components:[
                    {name:'概况',type:'Zcbh'}
                ]},
                {name:'任务情况',components:[
                    {name:'总时长',type:'RwSc'},
                    {name:'进度',type:'RwJd'},
                    {name:'参与单位',type:'RwDw'},
                    {name:'参与人员',type:'RwRy'},
                    {name:'参与装备',type:'RwZb'}
                ]}
            ],
            config:(this.$route.query.name === 'config'),
            layoutboxHeight:window.innerHeight-53,
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
            this.layoutboxHeight =  window.innerHeight-53;
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

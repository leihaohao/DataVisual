<style lang="less">
    @import './card-cols2.less';
</style>

<template>
	<div :draggable="elementStatus" @dragstart="dragstartEvent" class="hjj-cols2">
    <a @click.prevent.stop="deleteEle" class="delete" v-show="config && !elementStatus">
      <Icon type="close-circled"></Icon>删除
    </a>
    <h1 v-show="elementStatus">两列栏容器：</h1>
    <Row type="flex" justify="center" align="middle" class="code-row-bg hjj-cols2-content">
        <Col span="12">
          <div :style="{minHeight:leftHeight+'px'}" ref="colLeftContent" @dragover.prevent.stop="dragoversLeft" @drop.prevent.stop="dropsLeft" @dragleave="ondragleave">
            <component :is="item.component" :title="item.title" v-for="(item,key) in colLeftItems" :key="`cardEle${key}`" :type="item.type"></component>
          </div>
        </Col>
        <Col span="12">
          <div :style="{minHeight:rightHeight+'px'}" ref="colRightContent" @dragover.prevent.stop="dragoversRight" @drop.prevent.stop="dropsRight" @dragleave="ondragleave">
            <component :is="item.component" :title="item.title" v-for="(item,key) in colRightItems" :key="`cardEle${key}`" :type="item.type"></component>
          </div>
        </Col>
    </Row>
  </div>
</template>

<script>
import cardCharts from '@/views/components/card-charts/card-charts.vue';
import cardList from '@/views/components/card-list/card-list.vue';
import cardCols2 from '@/views/components/card-cols2/card-cols2.vue';
export default {
    name: 'cols2',
    components: {
      cardCharts,cardList,cardCols2
    },
    data(){
        return {
            id:`id${(Math.random()*2e+15).toFixed()}`,
            config:(this.$route.query.name === 'config'),
            colLeftItems:[],
            colRightItems:[],
            leftHeight:100,
            rightHeight:100
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
      dragstartEvent(ev){
        this.elementStatus && ev.dataTransfer.setData('type','card-cols2');
      },
      dragoversLeft(ev){
        this.$refs.colLeftContent.classList.add('tranboxShadow');
      },
      dragoversRight(ev){
        this.$refs.colRightContent.classList.add('tranboxShadow');
      },
      ondragleave(ev){
        this.$refs.colLeftContent.classList.remove('tranboxShadow');
        this.$refs.colRightContent.classList.remove('tranboxShadow');
      },
      dropsLeft(ev){
        this.$refs.colLeftContent.classList.remove('tranboxShadow');
        
        if(this.elementStatus)
          return ;
        let type = ev.dataTransfer.getData('type');
        if(type === 'card-list'){
          this.colLeftItems.push({
            component: 'card-list'
          })
        }else if(type === 'card-charts-pie'){
          this.colLeftItems.push({
            component: 'card-charts',
            type:'pie'
          })
        }else if(type === 'card-charts-circle'){
          this.colLeftItems.push({
            component: 'card-charts',
            type:'circle'
          })
        }else if(type === 'card-charts-vbar'){
          this.colLeftItems.push({
            component: 'card-charts',
            type:'vbar'
          })
        }
        ev.dataTransfer.setData('type','');
      },
      dropsRight(ev){
        this.$refs.colRightContent.classList.remove('tranboxShadow');
        
        if(this.elementStatus)
          return ;
        let type = ev.dataTransfer.getData('type');
        if(type === 'card-list'){
          this.colRightItems.push({
            component: 'card-list'
          })
        }else if(type === 'card-charts-pie'){
          this.colRightItems.push({
            component: 'card-charts',
            type:'pie'
          })
        }else if(type === 'card-charts-circle'){
          this.colRightItems.push({
            component: 'card-charts',
            type:'circle'
          })
        }else if(type === 'card-charts-vbar'){
          this.colRightItems.push({
            component: 'card-charts',
            type:'vbar'
          })
        }
        ev.dataTransfer.setData('type','');
      },
      deleteEle(){
        //操作sesisonStorage 
        alert('已经删除');
      }
    },
    updated(){
      let rightHeight = this.$refs.colLeftContent.clientHeight;
      let leftHeight = this.$refs.colRightContent.clientHeight;
      this.rightHeight = this.leftHeight = rightHeight>leftHeight?rightHeight:leftHeight
    }
};
</script>

<style lang="less">
    @import './card-zcsl.less';
</style>

<template>
	<card :title="'战储实力'" type="zcsl">
    <card-cols :top="top1">
      <charts :data="zczbBar" height="180px"></charts>
    </card-cols>
    <card-cols :top="top2" :bottom="bottom2">
      <charts :data="zczbBar" height="180px"></charts>
    </card-cols>
  </card>
</template>

<script>
import charts from '@/views/components/charts/charts.vue';
import card from '@/views/components/card/card.vue';
import cardList from '@/views/components/card-list/card-list.vue';
import cardCols from '@/views/components/card-cols/card-cols.vue';
import cardAlone from '@/views/components/card-alone/card-alone.vue';
export default {
    name: 'cardZcsl',
    components: {
      card,cardList,cardCols,charts,cardAlone
    },
    data(){
        return {
          top1:[{name:'战储装备数',value:123,unit:'台套'},{name:'金额合计',value:123,unit:'万元'}],
          top2:[{name:'战储器材数',value:123,unit:'件'},{name:'金额合计',value:123,unit:'万元'}],
          bottom2:[{name:'战储金额总计',value:123,unit:'万元'}],
          zczbBar:{//联动饼状图数据格式
              "title":["数量分类占比","金额分类占比"],
              "legend":['通信器材','指挥自动化器材'],
              "series":{
                "type":"linkedPie",
                "sData":[
                    [
                     {"name":"通信器材",value:"90"},
                     {"name":"指挥自动化器材",value:"10"}
                    ], 
                    [
                       {"name":"通信器材",value:"10"},
                       {"name":"指挥自动化器材",value:"90"}
                    ]
                   ]
              }
          },
          zcmoneyBar:{},
          zcqcBar:{},
          zcqcmoneyBar:{},
        }
    },
    props:{
        
    },
    computed:{
    },
    mounted(){
    },
    methods: {
      
    }
};
</script>

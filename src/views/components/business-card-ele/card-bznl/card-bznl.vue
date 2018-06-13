<style lang="less">
    @import './card-bznl.less';
</style>

<template>
	<card :title="'保障能力'" type="bznl">
    <card-alone :data="top5"></card-alone>
    <card-list :data="datas1" :top="top1" display="block"></card-list>
    <card-cols cols="2" :top="top2">
      <charts slot="1" :data="sbVBar"></charts>
      <charts slot="2" :data="sbCircleBar" height="85px"></charts>
    </card-cols>
    <card-cols :top="top4">
       <charts :data="qcHBar" height="140px"></charts>
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
    name: 'cardBznl',
    components: {
      card,cardList,cardCols,charts,cardAlone
    },
    data(){
        return {
            top1:[{name:'人员总数',value:123}],
            top2:[{name:'设备数量',value:123}],
            top3:[{name:'战储金额总计',value:123,unit:'万元'}],
            top4:[{name:'器材数量',value:123,unit:'件'}],
            top5:[{name:'修理所',value:123}],
            datas1:[
              {name:'使用人员',value:123},
              {name:'保障人员',value:123}
            ],
            sbVBar:{//水平柱状图数据格式
             "title":"",
               "xAxis":{
                  
               },
               "yAxis":{
                  "yData":['可用数','待修数']
               },
               "series":{
                "type":"verBar",
                "sData":["1800","600"]
               }
            },
            sbCircleBar:{//环形图数据格式
              "title":"90%\n使用率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":"100","name":"编配率"},
                       {"value":"900","name":"非编配率"},
                ]
              }
            },
            qcHBar:{//分组柱状图数据格式
               "title":"", 
               "legend":[
                     "种类",
                     "数量",
                     "资金（万元）"
               ],
               "xAxis":{
                  "xData":['周转','区域分屯','任务专用'],
               },
               "yAxis":{

               },
                "series":{
                  "type":"groupBar",
                "name":["种类","数量","资金（万元）"],
                "sData":[
                  ["27","27","27"],
                  ["65","65","65"],
                  ["7","7","7"]
                  ]
               }
            }
        }
    },
    props:{
        hideProps:{
          type:String,
        }
    },
    computed:{
    },
    mounted(){
    },
    methods: {
      
    }
};
</script>

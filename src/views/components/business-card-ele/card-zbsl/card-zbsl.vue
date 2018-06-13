<style lang="less">
    @import './card-zbsl.less';
</style>

<template>
    <card  :title="'装备实力'" type="zbsl">
      <card-cols cols="2" :top="top1" :bottom="bottom1">
        <charts slot="1" :data="bzVBar" height="250px"></charts>
        <charts slot="2" :data="bzCircleBar" height="85px"></charts>
        <charts slot="2" :data="bzCircleBar" height="85px"></charts>
        <charts slot="2" :data="bzCircleBar" height="85px"></charts>
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
    name: 'cardZbsl',
    components: {
      card,cardList,cardCols,charts,cardAlone
    },
    data(){
        return {
            top1:[{name:'编制数量',value:123}],
            bottom1:[{name:'装备金额',value:123,unit:'万元'}],
            datas1:[
              {name:'使用人员',value:123},
              {name:'保障人员',value:123}
            ],
            bzVBar:{//水平柱状图数据格式
             "title":"",
               "xAxis":{
                  
               },
               "yAxis":{
                  "yData":['现有数量','可用数量','缺编数量','战备数量']
               },
               "series":{
                "type":"verBar",
                "sData":["1800","600","1600","200"]
               }
            },
            bzCircleBar:{//环形图数据格式
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
        
    },
    computed:{
      
    },
    mounted(){
    },
    methods: {
      
    }
};
</script>

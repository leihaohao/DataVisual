<style lang="less">
</style>

<template>
    <div>
        <div class="charts" :id="id" :style="{width,height}"></div>
    </div>
</template>

<script>
  /*对应type：
      pie 饼状图
      circle 环状图
      groupBar 多组柱状图
      verBar 垂直柱状图
      horBor 水平柱状图
      line 折线图
      linkedBar 联动饼状图
    
  //pie数据格式：
  propsData:{//饼状图数据格式
    "title":"延期合同分类占比",
    "legend":[
             "预研项目",
             "科研项目",
             "订购项目",
             "维修项目",
             "专项项目"
    ],
    "series":{
      "type":"pie",
      "sData":[
             {"value":"580","name":"预研项目"},
             {"value":"700","name":"科研项目"},
             {"value":"800","name":"订购项目"},
             {"value":"500","name":"维修项目"},
             {"value":"290","name":"专项项目"},
      ]
    }    
   },
  //circle数据格式：
  propsData1:{//环形图数据格式
    "title":"90%\n使用率",
    "series":{
      "type":"circle",
      "sData":[
             {"value":"100","name":"编配率"},
             {"value":"900","name":"非编配率"},
      ]
    }
  },

  //groupBar数据格式：
  propsData2:{//分组柱状图数据格式
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
  },

  //verBar数据格式：
  propsData4:{//水平柱状图数据格式
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

  //horBar数据格式：
  propsData3:{//柱状图数据格式
      "title":"数量/台套",
      "xAxis":{
        "xData":['xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地']
      },
      "yAxis":{
      
      },
      "series":{
         "type":"horBar",
         "sData":["120", "200", "150", "80", "70", "110", "130","152","110","90","75"]
      }
  },

  //line数据格式：
  propsData5:{//折线图数据格式
      "title":"台/套",
      "xAxis":{
        "xData":['2014','2015','2016','2017','2018']
      },
      "yAxis":{
      
      }
      "series":{
        "type":"line",
        "sData":['10000','20000', '19000', '22000', '40000']
      }
  },
    //linkedBar数据格式：
  propsData7:{//联动饼状图数据格式
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
  },*/
export default {
    name: 'charts',
    components: {
    },
    data(){
        return {
          myChart:'',
          id:`chart${(Math.random()*2e+15).toFixed()}`,
          option:'',
          colorPool:['#1e9ef5','#bf4947','#df9630','#4fcdf6','#80b658','#a06edd'],
          colorNum:Number,
          echColor:[],
          defaultProp:{
            'pie':{//饼状图数据格式
            "title":"延期合同分类占比",
            "legend":[
                     "预研项目",
                     "科研项目",
                     "订购项目",
                     "维修项目",
                     "专项项目"
            ],
            "series":{
              "type":"pie",
              "sData":[
                     {"value":"580","name":"预研项目"},
                     {"value":"700","name":"科研项目"},
                     {"value":"800","name":"订购项目"},
                     {"value":"500","name":"维修项目"},
                     {"value":"290","name":"专项项目"},
              ]
            }    
           },
          //circle数据格式：
          'circle':{//环形图数据格式
            "title":"90%\n使用率",
            "series":{
              "type":"circle",
              "sData":[
                     {"value":"100","name":"编配率"},
                     {"value":"900","name":"非编配率"},
              ]
            }
          },

          //groupBar数据格式：
          'vbar':{//分组柱状图数据格式
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
          },

          //horBar数据格式：
          'vbar2':{//柱状图数据格式
              "title":"数量/台套",
              "xAxis":{
                "xData":['xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地','xx基地']
              },
              "yAxis":{
              
              },
              "series":{
                 "type":"horBar",
                 "sData":["120", "200", "150", "80", "70", "110", "130","152","110","90","75"]
              }
          },

          //line数据格式：
          'line':{//折线图数据格式
              "title":"台/套",
              "xAxis":{
                "xData":['2014','2015','2016','2017','2018']
              },
              "yAxis":{
              
              },
              "series":{
                "type":"line",
                "sData":['10000','20000', '19000', '22000', '40000']
              }
          }
          }
          
        }
    },
    props: {
        width:{
            type:String,
            default:'100%'
        },
        height:{
            type:String,
            default:'100%'
        },
        data:{
            type:Object
        },
        type:{
          type:String
        }
    },
    created (){
        if(this.type){
          this.option = this.filter(this.defaultProp[this.type]);
        }else{
          this.option = this.filter(this.data);
        }
    },
    computed:{
    },
    mounted(){
        const _self = this;
        this.myChart = this.$echarts.init(document.querySelector(`#${this.id}`));
        this.myChart.setOption(this.option);
    },
    methods: {
         filter(datas){
            //饼状图开始 
            if(datas.series.type === 'pie'){
             let pieOption = {
                title : {
                text: '',
                x:'center',
                y:'55%',
                textStyle:{
                  color:'#02e1eb'//标题颜色
                }
                },
                grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
                },
                tooltip: {//提示框组件配置
                      trigger: 'item',//触发类型 item：数据项图形触发   axis：坐标轴触发 
                      formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
                  },
                  color: ['#1e9ef5','#bf4947','#df9630','#4fcdf6','#80b658'],//对应的数据在图中的颜色
                  legend: {//图例的配置
                     orient: 'horizontal',//图例的排序顺序  horizontal：纵排  vertical：横排
                     bottom:'15%',
                     //left:'10%',
                     center:"center",
                     data:[],
                     textStyle:{
                     color:'#02e1eb'
                     }
                    },
                  series: [
                      {
                          name: '访问来源',
                          type: '',
                          radius: '50%',
                          center: ['50%', '30%'],
                          label: {
                              normal: {
                                  position: 'inner',
                                  formatter: "{c}"
                              }
                          },
                          labelLine: {
                              normal: {
                                  show: false
                              }
                          },
                          data: []
                      }
                  ]
                   };//pieOption结束
              pieOption.title.text = datas.title;
              pieOption.legend.data = datas.legend;
              pieOption.series[0].type = datas.series.type;
              pieOption.series[0].data = datas.series.sData;
              // pie5option.color = this.echColor;

              return pieOption;
            };
            //饼状图结束

            //环状图开始
            if(datas.series.type === 'circle'){
               let cirOption = {
                 title:{
                         x:'center',
                         y:'center',
                         text:'',
                         textStyle:{
                             color:'#02e1eb',
                             fontSize:'16'
                         },
                     },
                     grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                     color:['#df9630','#009aff'],
                     tooltip: {
                         trigger: 'item',
                         formatter: "{a} <br/>{b}: {c} ({d}%)"
                     },
                     series: [
                         {
                             name:'访问来源',
                             type:'pie',
                             center:['50%','50%'],
                             radius: ['65%', '90%'],
                             avoidLabelOverlap: false,
                             hoverOffset:2,
                             label: {
                                 normal: {
                                     show: false,
                                     position: 'center'
                                 },
                                 emphasis: {
                                     show: false,
                                     textStyle: {
                                         fontSize: '12',
                                         fontWeight: ''
                                     }
                                 }
                             },
                             labelLine: {
                                 normal: {
                                     show: false
                                 },
                                 emphasis:{
                                     show:true
                                 }
                             },
                             data:[]
                         }
                     ]
               }//cirOption结束
               cirOption.title.text = datas.title;
               cirOption.series[0].data = datas.series.sData;

               return cirOption;
            };


            if(datas.series.type  === 'groupBar'){
                let groupData = [
                    {"type":"bar",
                      "label":{
                          normal:{
                              show:true,
                              position:'top',
                              textStyle:{
                                  color:'#02e1eb'
                              }
                          }
                      }
                    },
                    {"type":"bar",
                       "label":{
                           normal:{
                               show:true,
                               position:'top',
                               textStyle:{
                                   color:'#02e1eb'
                               }
                           }
                       }
                  },
                    {"type":"bar",
                      "label":{
                          normal:{
                              show:true,
                              position:'top',
                              textStyle:{
                                  color:'#02e1eb'
                              }
                          }
                      }
                  }
                ];

                (function(pData){
                   for(let i = 0; i < pData.series.name.length;i++){

                      groupData[i].name = pData.series.name[i];
                      groupData[i].data = pData.series.sData[i];
                  };
                  return groupData;
                })(datas);//将多组柱状图的数据注入groupData

                let groupBarOption = {
                                   title : {
                                          text: '',
                                          textStyle:{
                                              color:'#02e1eb'
                                          }
                                      },
                                        grid: {
                                          left: '3%',
                                          right: '4%',
                                          bottom: '3%',
                                          top:'25%',
                                          containLabel: true
                                      },
                                      tooltip : {
                                          trigger: 'item',
                                          formatter:'{b}<br/>{a} : {c}'
                                      },
                                      legend: {
                                          data:[],
                                          x:'right',
                                          y:'top',
                                          textStyle:{
                                            fontWeight:'normal',
                                            color:'#01f5fd'
                                          }
                                      },
                                      xAxis : [
                                          {   
                                              type : 'category',
                                              data : [],
                                              axisLine:{
                                                  show:true,
                                                  lineStyle:{
                                                     color:'#02e1eb',
                                                     width:2,
                                                  }
                                              },
                                              axisTick:{      
                                                "show":false
                                              },
                                              axisLabel:{
                                                   show:true,
                                                     textStyle:{
                                                         color:'#01f5fd',
                                                         fontSize:'16'
                                                     }
                                                 },
                                          }
                                      ],
                                      color:['#80b658','#df9630','#1e9ef5'],
                                      yAxis : [
                                          {
                                              type:'value',
                                              axisTick:{//坐标轴的刻度的设置    
                                                "show":false
                                              },
                                              splitLine:{//是否显示该坐标轴上的网格线 
                                                  show:false
                                                },
                                              axisLine:{
                                                  show:true,
                                                  lineStyle:{
                                                     color:'#02e1eb',
                                                     width:1
                                                  }
                                              },
                                              axisLabel:{//坐标轴标线标签的设置
                                                  show:false
                                              }
                                          }
                                      ],
                                      series : [{

                                      }]
                               }//groupBarOption结束
                              groupBarOption.title.text = datas.title;
                              groupBarOption.legend.data = datas.legend;
                              groupBarOption.xAxis[0].data = datas.xAxis.xData;
                              groupBarOption.series = groupData;

                              return groupBarOption;
            };
            //多组柱状图结束

            
            //柱状图开始
            if(datas.series.type === 'horBar'){
                let horBarOption = {
                   title:{
                        text:'',
                        textStyle:{
                            color:'#dedfe3',
                            fontSize:'16'
                        },
                       right:'right'
                      },
                       tooltip : {
                            trigger: 'item',
                            formatter:'{b}:{c}'
                        },
                        grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                      color:['#00bef6'],
                      xAxis: {
                          type: 'category',
                          data: [],
                          axisTick:{//坐标轴的刻度的设置    
                                "show":false
                              },
                               axisLine:{
                                  show:true,
                                  lineStyle:{
                                     color:'#02e1eb',
                                     width:1
                                  }
                              },
                              axisLabel:{
                                show:true,
                                  textStyle:{
                                      color:'#01f5fd',
                                      fontSize:'16'
                                  }
                              }
                      },
                      yAxis: {
                              show:false,
                      },
                      
                      series: [{
                          data: [],
                          barMaxWidth:25,//最大柱宽
                          type: 'bar',
                          label:{
                          normal:{
                              show:true,
                              position:'top',
                              textStyle:{
                                  color:'#dedfe3'
                              }
                          }
                      }
                      }],
                }//horBarOption结束
                horBarOption.title.text = datas.title;
                horBarOption.xAxis.data = datas.xAxis.xData;
                horBarOption.series[0].data = datas.series.sData;

                return horBarOption;
            };//柱状图结束

            //垂直柱状图开始
            if(datas.series.type === 'verBar'){
                let verBarOption = {
                    tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                     calculable : true,
                     grid: {
                        // left: '3%',
                        // right: '4%',
                        // bottom: '3%',
                        // containLabel: true
                        x:80,
                        y:10,
                        x2:0,
                        y2:10
                    },
                      color:['#00bcf6'],
                      xAxis: {
                         show:false,
                          boundaryGap : [0, 0.01] ,
                          type:'value'
                      },
                      yAxis: {
                          type: 'category',
                          data: [],
                          axisLabel:{
                               show:true,
                                 textStyle:{
                                     color:'#01f5fd',
                                     fontSize:'16'
                                 }
                             },
                          axisLine:{
                              show:true,
                              lineStyle:{
                                 width:1,
                                 color:'#02e1eb',
                               }
                          },
                          axisTick:{      
                            "show":false
                          },
                      },
                      series: [
                          {
                              type: 'bar',
                              barCategoryGap:'80%',
                              barWidth:'18',
                              data: [],
                          //      label:{
                          //      normal:{
                          //     show:true,
                          //     position:'top',
                          //     textStyle:{
                          //         color:'#00bcf6'
                          //      }
                          //    }
                          // }
                          itemStyle:{
                              normal:{
                                  color:'#00c6f4',
                                  label:{
                                      show:true,
                                      position:'top',//insideTop
                                      textStyle:{
                                          align:'top',
                                          fontSize:'12',
                                          fontWeight:'bold',
                                          color:'#fff'
                                      }
                                  }
                              }
                          }
                          }
                      ]
                }//verBarOption结束

                verBarOption.yAxis.data = datas.yAxis.yData;
                verBarOption.series[0].data = datas.series.sData.reverse();

                return verBarOption;
            };//垂直柱状图结束

            //折线图开始
            if(datas.series.type === 'line'){
                let lineOption = {
                     title: {
                        text: '',
                        textStyle:{
                            fontSize:'16',
                            color:'#fff'
                        },
                        right:'right'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                       
                        axisTick:false, 
                        axisLine:{
                        lineStyle:{
                           color:'#02e1eb',
                         }
                        },
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisTick:false,
                         axisLine:{
                         lineStyle:{
                          color:'#02e1eb',
                         }
                        },
                        
                    },
                    series: [
                        {
                            name:'销售量',
                            type:'',
                            stack: '销售量',
                            itemStyle : {  
                                normal : {  
                                    color:'#00FF00',  
                                    lineStyle:{  
                                        color:'#02eleb'  
                                    }  
                                }  
                            },  
                            data:[]
                        }
                    ]
                }//lineOption结束

                lineOption.title.text = datas.title;
                lineOption.xAxis.data = datas.xAxis.xData;
                lineOption.series[0].type = datas.series.type;
                lineOption.series[0].data = datas.series.sData;

                return lineOption;
            };//折线图结束

            //联动饼状图开始
            if(datas.series.type === 'linkedPie'){
               let linkedPieOption = {
                    title:[
                   {
                     text:'',
                   x:'10%',
                   y:'70%',
                   textStyle:{
                      fontSize: '16',
                    color:'#01f5fd',
                    fontWeight:'normal'
                   } 
                   },{
                      text:'',
                    x:'60%',
                    y:'70%',
                    textStyle:{
                      fontSize: '16',
                    color:'#01f5fd',
                    fontWeight:'normal'
                   }
                   }
                 ],
                 color:['#009aff','#df9630','#80b658','#00c6f4',],
                     grid: {
                     left: '3%',
                     right: '4%',
                     bottom: '3%',
                     containLabel: true
                 },
                 legend:{
                    x:'center', 
                  y:'bottom',
                  data:[],
                  textStyle:{
                     fontWeight:'normal',
                     color:'#01f5fd'
                  }
                 },
                 series:[
                   {
                    type:'pie',
                    radius : ['0%', '55%'],
                    center:['25%','40%'],
                    label:{
                       normal:{
                        show:false
                     },
                     emphasis:{
                         show:true
                     }
                    },
                    labelLine:{
                       normal:{
                        show:false
                     },
                     emphasis:{
                        show:true
                     }
                    },
                    data:[]
                   },
                   {
                    type:'pie',
                    radius : ['0%', '55%'],
                    center:['75%','40%'],
                    label:{
                       normal:{
                        show:false
                     },
                     emphasis:{
                         show:true
                     }
                    },
                    labelLine:{
                       normal:{
                        show:false
                     },
                     emphasis:{
                        show:true
                     }
                    },
                    data:[]
                   }
                 ]
               }//linkedPieOption结束

               linkedPieOption.title[0].text = datas.title[0];
               linkedPieOption.title[1].text = datas.title[1];
               linkedPieOption.legend.data = datas.legend;
               linkedPieOption.series[0].data = datas.series.sData[0];
               linkedPieOption.series[1].data = datas.series.sData[1];

               return linkedPieOption;
            };//联动饼状图结束
         },
    }
};
</script>

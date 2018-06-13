import {
  getChartsData
} from './api'


export default {
  namespaced: true,
  state: {
    type:'bar',
    title:'',
    subTitle:'',
    loading : true,
    curOptions:'',
    barOptions:{
            backgroundColor:'transparent',
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            grid:{
                x:80,
                y:0,
                x2:0,
                y2:0
            },
            xAxis : [
                {
                    type: 'value',  
                  show: false,  
                  boundaryGap : [0, 0.01] 
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : [],
                    axisTick: {
                      show: false
                    },
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
                        color:'#00c6f4'
                      }
                    }
                }
            ],
            series : [
                {
                    name:'数量(台)',
                    type:'bar',
                    data:[],
                    barWidth:18,
                    stack: '总量',
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
                },
                {
                    name:'差值',
                    type:'bar',
                    //颜色需要有透明度
                    itemStyle: {normal: {color:'rgba(102, 102, 102,0.3)'}},
                    //data填你需要的背景的值
                    stack: '总量',
                    data:[]
                }
            ]
        },
    circleOptions:{
            tooltip: {
             // trigger: 'item',
              formatter: "编制数量 <br/>{b}: {c} ({d}%)"
            },
            title: {
                text: '90%\n',
                subtext: '',
                x: 'center',
                y: 'center',
                textStyle: {
                          fontSize: '16',
                          color:'#01f5fd',
                          fontWeight:'normal'
                      }
           },
           series : [
              {
                type : 'pie',
                center :['50%', '50%'],
                radius : ['65%', '90%'],
                //itemStyle : labelFromatter,
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
                    }
                },
                data : []
              }
           ]
        }
  },
  mutations: {
    SHOWLOADING (state) {
      state.loading = true;
    },
    HIDELOADING (state) {
      state.loading = false;
    },
    SETDATAS (state, {data}) {
      let labelTop = {
            normal : {
                color:"#009aff",
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        let labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return params.value + '%'+'\n'+params.name
                    },
                    textStyle: {
                        baseline : 'bottom',
                        color:'#009aff'
                    }
                }
            },
        };
        let labelBottom = {
            normal : {
                color:"#df9630",
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color:"#df9630"
            }
        };
      if(data.payload.type === 'bar'){
        state.barOptions.yAxis[0].data = ['战备数量','缺编数量','可用数量','现有数量'];
        state.barOptions.series[0].data = data.data;
        state.barOptions.series[1].data = (function(){
            let result=[];
            for(let i = 0 ;i<data.data.length ; i ++ ){
                result[i]=20000-data.data[i];
            }
            return result;
        })();
      }else if(data.payload.type === 'circle'){
        state.circleOptions.title.text = `90%\n${data.payload.title[0]}`;
        state.circleOptions.series[0].data = [
                        {name:'编配率', value:90, itemStyle : labelBottom},
                        {name:'非编配率', value:10,itemStyle : labelTop }
                    ];
      }else if(data.payload.type === 'pie'){
        state.circleOptions.title = {
                text: `${data.payload.title[0]}`,
                subtext: '',
                x: 'center',
                y: 'bottom',
                textStyle: {
                          fontSize: '16',
                          color:'#01f5fd',
                          fontWeight:'normal'
                      }
           };
        state.circleOptions.series[0].radius = ['0%', '65%'];
        state.circleOptions.series[0].center = ['50%','45%'];
        state.circleOptions.series[0].data = [
                        {name:'通信器材', value:90, itemStyle:{normal:{color:"#009aff"}}},
                        {name:'指挥自动化器材', value:10,itemStyle:{normal:{color:"#8863d5"}}}
                    ];
      }else if(data.payload.type === 'piedouble'){
        state.circleOptions.title = [{
                text: `${data.payload.title[0]}`,
                subtext: '',
                x: '8%',
                y: '70%',
                textStyle: {
                          fontSize: '16',
                          color:'#01f5fd',
                          fontWeight:'normal'
                      }
           },{
                text: `${data.payload.title[1]}`,
                subtext: '',
                x: '65%',
                y: '70%',
                textStyle: {
                          fontSize: '16',
                          color:'#01f5fd',
                          fontWeight:'normal'
                      }
           }];
           state.circleOptions.legend= {
                x : 'center',
                y : 'bottom',
                data:['通信器材','指挥自动化器材'],
                textStyle:{
                  fontWeight:'normal',
                  color:'#01f5fd'
                }
            };
           state.circleOptions.series = [
              {
                  type:'pie',
                  radius : ['0%', '55%'],
                  center : ['25%','40%'],
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  lableLine: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name:'通信器材', value:90, itemStyle:{normal:{color:"#009aff"}}},
                    {name:'指挥自动化器材', value:10,itemStyle:{normal:{color:"#8863d5"}}}
                  ]
              },
              {
                  type:'pie',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  radius : ['0%', '55%'],
                  center : ['75%','40%'],
                  data:[
                      {name:'通信器材', value:90, itemStyle:{normal:{color:"#009aff"}}},
                     {name:'指挥自动化器材', value:10,itemStyle:{normal:{color:"#8863d5"}}}
                  ]
              }
           ]
      }
    },
    CLEARSTATE (state) {
      state.loading = false;
      //state.barOptions = {};
    }
  },
  actions: {
    async getData ({ commit, state }, payload) {
      commit({type: 'SHOWLOADING'});
      const { data } = await getChartsData(payload);
      data.payload = payload;
      commit({type: 'SETDATAS',data});
      commit({type: 'HIDELOADING'});
      if(payload.type === 'bar'){
        return state.barOptions
      }else if(payload.type === 'circle'){
        return state.circleOptions
      }else if(payload.type == 'pie'){
        return state.circleOptions
      }else if(payload.type == 'piedouble'){
        return state.circleOptions
      }
    }
  }
}

export default {
  filterFoot(data){
    return {
      data:{
        top:'',
        bottom:[{name:'任务一'},{name:'任务二'},{name:'任务三'},{name:'任务四'},{name:'任务五'},{name:'任务六'},{name:'任务七'},{name:'任务八'}]
      }
    }
  },
  filterSearchCheckbox(data){
    return {
      data:{}
    }
  },
  filterSearchList(data){
    return {
      data:{}
    }
  },
	filterZbslBzs(data){
		return {
			data:{top:[{name:'编制数量',value:123}],bottom:[{name:'装备金额总计',value:123,unit:'万元'}]},
			chartMain:{//水平柱状图数据格式
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
			chartBprate:{//环形图数据格式
              "title":"90%\n使用率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":"100","name":"编配率"},
                       {"value":"900","name":"非编配率"},
                ]
              }
            },
			chartKyrate:{//环形图数据格式
              "title":"90%\n可用率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":"100","name":"编配率"},
                       {"value":"900","name":"非编配率"},
                ]
              }
            },
			chartZbrate:{//环形图数据格式
              "title":"90%\n战备率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":"100","name":"编配率"},
                       {"value":"900","name":"非编配率"},
                ]
              }
            },
		}
	},
	filterZcslZbs(data){
		return {
			data:{top:[{name:'战储装备数',value:123,unit:'台套'},{name:'金额合计',value:123,unit:'万元'}],bottom:[]},
			chartMain:{//联动饼状图数据格式
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
          }
		}
	},
	filterZcslQcs(data){
		return {
      data:{top:[{name:'战储器材数',value:123,unit:'件'},{name:'金额合计',value:123,unit:'万元'}],bottom:[{name:'战储金额总计',value:123,unit:'万元'}]},
			chartMain:{//联动饼状图数据格式
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
          }
		}
	},

  filterBznlRy(data){
    return {
      data:{top:[
              {name:'人员总数',value:123},
            ],bottom:[
              {name:'使用人员',value:123},
              {name:'保障人员',value:123},
            ]}
    }
  },
  filterBznlSbs(data){
    return {
      data:{top:[{name:'设备数量',value:2000}]},
      chartMain:{//水平柱状图数据格式
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
      chartKyrate:{//环形图数据格式
        "title":"90%\n使用率",
        "series":{
          "type":"circle",
          "sData":[
                 {"value":"100","name":"可用率"},
                 {"value":"900","name":"非可用率"},
          ]
        }
      }
    }
  },
  filterBznlQcs(data){
    return {
      data:{top:[{name:'器材数量',value:2000}]},
      chartMain:{//分组柱状图数据格式
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
  filterJhzxDg(data){
    return {
      data:{top:[
              {name:'订购计划执行',value:123,unit:'台套'},
            ],bottom:[
              {name:'计划项目',value:123,unit:'个'},
              {name:'计划金额',value:123,unit:'个'},
              {name:'已签合同',value:123,unit:'个'},
              {name:'执行率',value:'34%'},
              {name:'经费计算',value:34,unit:'万'},
              {name:'经费结算率',value:'34%'},
            ]}
    }
  },
  filterJhzxWx(data){
    return {
      data:{top:[
              {name:'维修计划执行',value:123,unit:'台套'},
            ],bottom:[
              {name:'计划项目',value:123,unit:'个'},
              {name:'计划金额',value:123,unit:'个'},
              {name:'已签合同',value:123,unit:'个'},
              {name:'执行率',value:'34%'},
              {name:'经费计算',value:34,unit:'万'},
              {name:'经费结算率',value:'34%'},
            ]}
    }
  },
  filterJhzxZc(data){
    return {
      data:{top:[
              {name:'战储计划执行',value:123,unit:'台套'},
            ],bottom:[
              {name:'计划项目',value:123,unit:'个'},
              {name:'计划金额',value:123,unit:'个'},
              {name:'已签合同',value:123,unit:'个'},
              {name:'执行率',value:'34%'},
              {name:'经费计算',value:34,unit:'万'},
              {name:'经费结算率',value:'34%'},
            ]}
    }
  },
  filterZbzlZt(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterZbbh(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterZbdy(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterRlzyRy(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterSbzySbs(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterQcslQcs(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterZbdt(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterXmqk(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterHtqk(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterJfqk(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterCkqk(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterZczl(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterZcbh(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterRwQk(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterRwRy(data){
    return {
      data:{},
      chartMain:{}
    }
  },
  filterRwZb(data){
    return {
      data:{},
      chartMain:{}
    }
  },


  deletePageCacheDataProperty(datas){
    const _self = this;
    datas.map( function(item){
      if(item.data){
        delete item.data;
      }
      if(item.components && item.components.length>0){
        _self.deletePageCacheDataProperty(item.components);
      }
    });
    return datas;
  }
};

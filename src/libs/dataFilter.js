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
	filterZbslBzs(data = {}){
    let yData = [];
    let sData = [];
    data.barData.map((item)=>{
      yData.push(item.name);
      sData.push(item.value);
    })
    if(+(data.bpl)>100) data.bpl = 100;
    if(+(data.kyl)>100 ) data.kyl = 100;
    if(+(data.zbl)>100 ) data.zbl = 100;
		return {
			data:{top:[{name:'编制数量',value:data.bzsl}],bottom:[{name:'装备金额总计',value:data.zbje,unit:'万元'}]},
			chartMain:{//水平柱状图数据格式
             "title":"",
               "xAxis":{
                  
               },
               "yAxis":{
                  "yData":yData
               },
               "series":{
                "type":"verBar",
                "sData":sData
               }
            },
			chartBprate:{//环形图数据格式
              "title":data.bpl+"%\n编配率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":data.bpl,"name":"编配率"},
                       {"value":`${100-data.bpl}%`,"name":"非编配率"},
                ]
              }
            },
			chartKyrate:{//环形图数据格式
              "title":data.kyl+"%\n可用率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":data.kyl,"name":"可用率"},
                       {"value":`${100-data.kyl}%`,"name":"非可用率"},
                ]
              }
            },
			chartZbrate:{//环形图数据格式
              "title":data.zbl+"%\n战备率",
              "series":{
                "type":"circle",
                "sData":[
                       {"value":data.zbl,"name":"战备率"},
                       {"value":`${100-data.zbl}%`,"name":"非战备率"},
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
              {name:'订购计划执行',value:data.dgjhzx,unit:'台套'},
            ],bottom:[
              {name:'计划项目',value:data.jhxm,unit:'个'},
              {name:'计划金额',value:data.jhje,unit:'个'},
              {name:'已签合同',value:data.yqht,unit:'个'},
              {name:'执行率',value:data.zxl+'%'},
              {name:'经费计算',value:data.jfjs,unit:'万'},
              {name:'经费结算率',value:data.jfjsl+'%'},
            ]}
    }
  },
  filterJhzxWx(data){
    return {
      data:{top:[
              {name:'维修计划执行',value:data.wxjhzx,unit:'台套'},
            ],bottom:[
              {name:'计划项目',value:data.wxJhxm,unit:'个'},
              {name:'计划金额',value:data.wxJhje,unit:'个'},
              {name:'已签合同',value:data.wxYqht,unit:'个'},
              {name:'执行率',value:data.wxZxl+'%'},
              {name:'经费计算',value:data.wxJfjs,unit:'万'},
              {name:'经费结算率',value:data.wxJfjsl+'%'},
            ]}
    }
  },
  filterJhzxZc(data){
    return {
      data:{top:[
              {name:'战储计划执行',value:data.zcJhzx,unit:'台套'},
            ],bottom:[
              {name:'计划项目',value:data.zcJhxm,unit:'个'},
              {name:'计划金额',value:data.zcJhje,unit:'个'},
              {name:'已签合同',value:data.zcYqht,unit:'个'},
              {name:'执行率',value:data.zcZxl+'%'},
              {name:'经费计算',value:data.zcJfjs,unit:'万'},
              {name:'经费结算率',value:data.zcJfjsl+'%'},
            ]}
    }
  },
  filterZbzlZt(data = {}){
    let yData = [];
    let sData = [];
    data.barData.map((item)=>{
      yData.push(item.name);
      sData.push(item.value);
    })
    return {
      data:{},
      chartMain:{//水平柱状图数据格式
       "title":"",
         "xAxis":{
            
         },
         "yAxis":{
            "yData":yData
         },
         "series":{
          "type":"verBar",
          "sData":sData
         }
      }
    }
  },
  filterZbbh(data){    
    return {
      data:{},
      list:{bottom:[
        {name:'计划补充数',value:data.bc_plan,unit:'台套'},
        {name:'完成补充数',value:data.bc_finish,unit:'台套'},
        {name:'计划退役数',value:data.rest_plan,unit:'台套'},
        {name:'报废处置数',value:data.crash_end,unit:'台套'}
      ]},
      chartWcrate:{//环形图数据格式
        "title":`${(data.bc_plan!=0||data.rest_plan!=0)?(parseInt((data.bc_finish+data.crash_end)/(data.bc_plan+data.rest_plan)*100)):0}\n完成率`,
        "series":{
          "type":"circle",
          "sData":[
                 {"value":(data.bc_plan!=0||data.rest_plan!=0)?(parseInt((data.bc_finish+data.crash_end)/(data.bc_plan+data.rest_plan)*100)):0,"name":"完成率"},
                 {"value":(data.bc_plan!=0||data.rest_plan!=0)?100-(parseInt((data.bc_finish+data.crash_end)/(data.bc_plan+data.rest_plan)*100)):0,"name":"非完成率"},
          ]
        }
      }
    }
  },
  filterZbdy(data){
    return {
      data:{},
      chartMain:{//分组柱状图数据格式
         "title":"", 
         "legend":data.seriesName,
         "xAxis":{
            "xData":data.xAxisName,
         },
         "yAxis":{

         },
          "series":{
            "type":"groupBar",
          "name":data.seriesName,
          "sData":data.seriesData
         }
      }
    }
  },
  filterRlzyRy(data){
    return {
      data:{top:[{name:'人员总数',value:data.ryzs,unit:'人'}]},
      list:{bottom:[
        {name:'人员编制',value:data.rybz,unit:'人'},
        {name:'在编人数',value:data.zbrs,unit:'人'},
        {name:'缺编人数',value:data.qbrs,unit:'人'},
      ]},
      chartZbrate:{//环形图数据格式
        "title":`${data.zbl}%\n在编率`,
        "series":{
          "type":"circle",
          "sData":[
                 {"value":`${data.zbl}`,"name":"在编率"},
                 {"value":`${100-data.zbl}`,"name":"非在编率"},
          ]
        }
      }
    }
  },
  filterRlzyBz(data){
    return {
      data:{top:[{name:'保障人群'}],bottom:[{name:'人员数量',value:data.bzrysl,unit:'人'}]},
    }
  },
  filterSbzySbs(data){
    return {
      data:{top:[{name:'设备数量',value:data.sbsl,unit:'件'}]},
      list:{bottom:[
        {name:'可用数量',value:data.kysl,unit:'台套'},
        {name:'待维修数',value:data.dwxl,unit:'台套'},
        {name:'设备种类',value:data.sbzl,unit:'种'},
        {name:'设备金额',value:data.sbje,unit:'万元'}
      ]},
      chartKyrate:{//环形图数据格式
        "title":`${data.kyl}%\n可用率`,
        "series":{
          "type":"circle",
          "sData":[
                 {"value":data.kyl,"name":"可用率"},
                 {"value":100-data.kyl,"name":"非可用率"},
          ]
        }
      }
    }
  },
  filterQcslQcs(data){
    return {
      data:{top:[{name:'器材数量',value:data.qcsl,unit:'件'}]},
      chartMain:{//分组柱状图数据格式
         "title":"", 
         "legend":data.seriesName,
         "xAxis":{
            "xData":data.xAxisName,
         },
         "yAxis":{

         },
          "series":{
            "type":"groupBar",
          "name":data.seriesName,
          "sData":data.seriesData
         }
      }
    }
  },
  filterZbdt(data){
    return {
      data:{bottom:[{name:'分配中装备',value:data.fpzzb,unit:'台套'},{name:'调整中装备',value:data.tzzzb,unit:'台套'},{name:'直发中装备',value:data.zfzzb,unit:'台套'},{name:'维修中装备',value:data.xlzzb,unit:'台套'}] }
    }
  },
  filterXmqkZs(data){
    return {
      data:{ top:[{name:'计划总额',value:data.jhze,unit:'万元'}],bottom:[{name:'执行项目',value:data.zxxm},{name:'完成项目',value:data.wcxm}] }
    }
  },
  filterXmqkFb(data){
    return {
      data:{},
      chartMain:{//柱状图数据格式
          "title":"",
          "xAxis":{
            "xData":['订购','维修','专项']
          },
          "yAxis":{
          
          },
          "series":{
             "type":"horBar",
             "sData":["1200", "200", "150"]
          }
      }
    }
  },
  filterHtqk(data){
    return {
      data:{
              top:[{name:'合同总数',value:data.htzs},{name:'合同总额',value:data.htze,unit:'万元'}],
              bottom:[{name:'执行合同',value:data.zxhe},{name:'金额合计',value:data.jehj1,unit:'万元'},{name:'完成合同',value:data.wcht},{name:'金额合计',value:data.jehj2,unit:'万元'},{name:'延期合同',value:data.yqht},{name:'金额合计',value:data.jehj3,unit:'万元'}]
          }
    }
  },
  filterJfqk(data){
    return {
      data:{top:[{name:'计划总额',value:2000}]},
      list:{bottom:[
        {name:'拨付总额',value:123,unit:'万元'},
        {name:'超支项目',value:123},
        {name:'超支金额',value:123,unit:'万元'}
      ]},
      chartBfrate:{//环形图数据格式
        "title":"90%\n拨付率",
        "series":{
          "type":"circle",
          "sData":[
                 {"value":"100","name":"拨付率"},
                 {"value":"900","name":"非拨付率"},
          ]
        }
      }
    }
  },

  filterCkqk(data){
    
    return {
      data:{top:[{name:'库房总数',value:data.storetotal}]},
      list:{bottom:[{name:'库房总面积',value:data.storetotalusearea,unit:'m²'},{name:'使用面积',value:data.storeusearea,unit:'m²'},{name:'闲置面积',value:data.storefreearea,unit:'m²'}]},
      chartSyrate:{//环形图数据格式
        "title":`${data.zc_inst_use_pie}%\n拨付率`,
        "series":{
          "type":"circle",
          "sData":[
                 {"value":data.zc_inst_use_pie,"name":"拨付率"},
                 {"value":100-data.zc_inst_use_pie,"name":"非拨付率"},
          ]
        }
      }
    }
  },
  filterZczl(data){
    let yData = [];
    let sData = [];
    data.barData.map((item)=>{
      yData.push(item.name);
      sData.push(item.value);
    })
    return {
      data:{},
      chartMain:{//水平柱状图数据格式
             "title":"",
               "xAxis":{
                  
               },
               "yAxis":{
                  "yData":yData
               },
               "series":{
                "type":"verBar",
                "sData":sData
               }
            }
    }
  },
  filterZcbh(data){
    return {
      data:{},
      list:{bottom:[{name:'计划补充数',value:data.planbcsl,unit:'套'},{name:'完成补充数',value:data.planwcsl,unit:'套'},{name:'计划退役数',value:data.plantysl,unit:'套'},{name:'报废处置数',value:data.planbfsl,unit:'套'}]},
      chartWcrate:{//环形图数据格式
        "title":`${data.zc_inst_finish_pie}%\n完成率`,
        "series":{
          "type":"circle",
          "sData":[
                 {"value":data.zc_inst_finish_pie,"name":"完成率"},
                 {"value":100-data.zc_inst_finish_pie,"name":"非完成率"},
          ]
        }
      }
    }
  },
  filterRwSc(data){
    return {
      data:{times:'23'}
    }
  },
  filterRwJd(data){
    return {
      data:{progress:'85%'}
    }
  },
  filterRwDw(data){
    return {
      data:{top:[{name:'参与单位',value:4}]},
      list:{title:['单位名称','任务时长','任务进度'],content:[['单位a','2天','50%'],['单位a','2天','50%'],['单位a','2天','50%']]}
    }
  },
  filterRwRy(data){
    return {
      data:{top:[{name:'参与人员总数',value:2000,unit:'人'}]},
      chartMain:{//水平柱状图数据格式
             "title":"",
               "xAxis":{
                  
               },
               "yAxis":{
                  "yData":['单位名称','单位名称','单位名称','单位名称']
               },
               "series":{
                "type":"verBar",
                "sData":["1800","600","900","800"]
               }
            }
    }
  },
  filterRwZb(data){
    return {
      data:{top:[{name:'参与装备总数',value:2000}]},
      chartMain:{//饼状图数据格式
        "title":"装备类型占比",
        "legend":[
                 "机动指挥系统",
                 "固定指挥所",
                 "固定通讯台站",
                 "网络节点",
                 "机动通信装备"
        ],
        "series":{
          "type":"pie",
          "sData":[
                 {"value":"580","name":"机动指挥系统"},
                 {"value":"700","name":"固定指挥所"},
                 {"value":"800","name":"固定通讯台站"},
                 {"value":"500","name":"网络节点"},
                 {"value":"290","name":"机动通信装备"},
          ]
        }    
       }
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

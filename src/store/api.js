import api from '@/libs/request'

export default {
  // 获取缓存数据
  getPageCache(payload){
    //return res.get('/guidance/options')
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: (window.sessionStorage['pageCache'] && JSON.parse(window.sessionStorage['pageCache'])) ||/*[{path:'comprehensive',name:'comprehensive',
                  components:[{
                    type:'card',name:'装备实力',x:0,y:0,isShow:1,
                    components:[{type:'card-cols',isShow:1,cols:2,origin:'ZbslBzs',ex:'data',
                                components:[{type:'charts',slot:1,origin:'ZbslBzs',ex:'chartMain',height:'250px'},
                                            {type:'charts',slot:2,origin:'ZbslBzs',ex:'chartBprate',height:'85px'},
                                            {type:'charts',slot:2,origin:'ZbslBzs',ex:'chartKyrate',height:'85px'},
                                            {type:'charts',slot:2,origin:'ZbslBzs',ex:'chartZbrate',height:'85px'}
                                ]
                    }]
                  },{
                    type:'card',name:'战储实力',x:0,y:0,isShow:1,
                    components:[{type:'card-cols',isShow:1,cols:1,origin:'ZcslZbs',ex:'data',
                                components:[{type:'charts',slot:1,origin:'ZcslZbs',ex:'chartMain',height:'150px'}
                                            ]
                                },{type:'card-cols',isShow:1,cols:1,origin:'ZcslQcs',ex:'data',
                                components:[{type:'charts',slot:1,origin:'ZcslQcs',ex:'chartMain',height:'150px'}
                                            ]
                                }]
                  },{
                    type:'card',name:'保障能力',x:0,y:0,isShow:1,
                    components:[{type:'card-list',isShow:1,cols:1,origin:'BznlRy',ex:'data',display:'block'},
                                {type:'card-cols',isShow:1,cols:2,origin:'BznlSbs',ex:'data',
                                components:[
                                  {type:'charts',slot:1,origin:'BznlSbs',ex:'chartMain',height:'100px'},
                                  {type:'charts',slot:2,origin:'BznlSbs',ex:'chartKyrate',height:'85px'}
                                ]
                                },
                                {type:'card-cols',isShow:1,cols:1,origin:'BznlQcs',ex:'data',
                                components:[
                                  {type:'charts',slot:1,origin:'BznlQcs',ex:'chartMain',height:'130px'},
                                ]
                                }]
                  },{
                    type:'card',name:'计划执行',x:0,y:0,isShow:1,
                    components:[{type:'card-list',isShow:1,cols:1,origin:'JhzxDg',ex:'data'},
                                {type:'card-list',isShow:1,cols:1,origin:'JhzxWx',ex:'data'},
                                {type:'card-list',isShow:1,cols:1,origin:'JhzxZc',ex:'data'},
                                ]
                  }]
          }]*/[{
                "path": "comprehensive",
                "name": "综合态势",
                "components": [{
                  "type": "card",
                  "name": "装备实力",
                  "x": 0,
                  "y": 0,
                  "isShow": 1,
                  "components": [{
                    "type": "card-cols",
                    "isShow": 1,
                    "cols": 2,
                    "origin": "ZbslBzs",
                    "ex": "data",
                    "components": [{
                      "type": "charts",
                      "slot": 1,
                      "origin": "ZbslBzs",
                      "ex": "chartMain",
                      "height": "250px"
                    }, {
                      "type": "charts",
                      "slot": 2,
                      "origin": "ZbslBzs",
                      "ex": "chartBprate",
                      "height": "85px"
                    }, {
                      "type": "charts",
                      "slot": 2,
                      "origin": "ZbslBzs",
                      "ex": "chartKyrate",
                      "height": "85px"
                    }, {
                      "type": "charts",
                      "slot": 2,
                      "origin": "ZbslBzs",
                      "ex": "chartZbrate",
                      "height": "85px"
                    }]
                  }]
                }, {
                  "type": "card",
                  "name": "战储实力",
                  "x": 0,
                  "y": 454,
                  "isShow": 1,
                  "components": [{
                    "type": "card-cols",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "ZcslZbs",
                    "ex": "data",
                    "components": [{
                      "type": "charts",
                      "slot": 1,
                      "origin": "ZcslZbs",
                      "ex": "chartMain",
                      "height": "150px"
                    }]
                  }, {
                    "type": "card-cols",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "ZcslQcs",
                    "ex": "data",
                    "components": [{
                      "type": "charts",
                      "slot": 1,
                      "origin": "ZcslQcs",
                      "ex": "chartMain",
                      "height": "150px"
                    }]
                  }]
                }, {
                  "type": "card",
                  "name": "保障能力",
                  "x": 1440,
                  "y": 0,
                  "isShow": 1,
                  "components": [{
                    "type": "card-list",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "BznlRy",
                    "ex": "data",
                    "display": "block"
                  }, {
                    "type": "card-cols",
                    "isShow": 1,
                    "cols": 2,
                    "origin": "BznlSbs",
                    "ex": "data",
                    "components": [{
                      "type": "charts",
                      "slot": 1,
                      "origin": "BznlSbs",
                      "ex": "chartMain",
                      "height": "100px"
                    }, {
                      "type": "charts",
                      "slot": 2,
                      "origin": "BznlSbs",
                      "ex": "chartKyrate",
                      "height": "85px"
                    }]
                  }, {
                    "type": "card-cols",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "BznlQcs",
                    "ex": "data",
                    "components": [{
                      "type": "charts",
                      "slot": 1,
                      "origin": "BznlQcs",
                      "ex": "chartMain",
                      "height": "130px"
                    }]
                  }]
                }, {
                  "type": "card",
                  "name": "计划执行",
                  "x": 1440,
                  "y": 510,
                  "isShow": 1,
                  "components": [{
                    "type": "card-list",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "JhzxDg",
                    "ex": "data"
                  }, {
                    "type": "card-list",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "JhzxWx",
                    "ex": "data"
                  }, {
                    "type": "card-list",
                    "isShow": 1,
                    "cols": 1,
                    "origin": "JhzxZc",
                    "ex": "data"
                  }]
                }]
              }]
        })
      }, 1000)
    })
  },
  //搜索复选框
  getSearchCheckbox(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{}
        })
      }, 1000)
    })
  },
  //搜索列表
  getSearchList(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{}
        })
      }, 1000)
    })
  },
  //底部任务
  getFoot(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{}
        })
      }, 1000)
    })
  },

  //装备实力-编制数量
  getZbslBzs(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{"data":[{"name":"战备数量","value":"0"},{"name":"缺编数量","value":"180"},{"name":"可用数量","value":"8"},{"name":"现有数量","value":"2"}],"zbl":"0","zbje":"7.3","bzsl":"180","bpl":"0","kyl":"400"}
        })
      }, 1000)
    })
  },
  //战储实力-战储装备数
  getZcslZbs(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{}
        })
      }, 1000)
    })
  },
  //战储实力-战储器材数
  getZcslQcs(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{}
        })
      }, 1000)
    })
  },
  getBznlRy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getBznlSbs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getBznlQcs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getJhzxDg(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getJhzxWx(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getJhzxZc(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getZbzlZt(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getZbbh(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getZbdy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getRlzyRy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getSbzySbs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getQcslQcs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getZbdt(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getXmqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getHtqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getJfqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getCkqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getZczl(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getZcbh(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getRwQk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getRwRy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  },
  getRwZb(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        }, 1000)
      })
  }
 
}

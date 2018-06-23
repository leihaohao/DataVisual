import api from '@/libs/request'

export default {
  // 获取缓存数据
  getPageCache(payload){
    //return res.get('/guidance/options')
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: (window.sessionStorage['pageCache'] && JSON.parse(window.sessionStorage['pageCache'])) ||[{path:'comprehensive',name:'comprehensive',
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
                  }]
          }]
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
  }
 
}

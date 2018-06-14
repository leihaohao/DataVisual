import api from '@/libs/request'

export default {
  // 获取缓存数据
  getPageCache(payload){
    //return res.get('/guidance/options')
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: (window.sessionStorage['pageCache'] && JSON.parse(window.sessionStorage['pageCache'])) ||[{"path":"comprehensive","name":"综合态势","components":[{"type":"card","name":"装备实力","isShow":1,"x":1440,"y":0,"components":[{"cols":2,"ex":"data","origin":"ZbslBzs","type":"card-cols","isShow":1,"id":"74","path":"/ov-equiphave","components":[{"id":"179","type":"charts","slot":1,"origin":"ZbslBzs","ex":"chartMain","height":"250px"},{"id":"40","type":"charts","slot":2,"origin":"ZbslBzs","ex":"chartBprate","height":"85px"},{"id":"126","type":"charts","slot":2,"origin":"ZbslBzs","ex":"chartKyrate","height":"85px"},{"id":"185","type":"charts","slot":2,"origin":"ZbslBzs","ex":"chartZbrate","height":"85px"}]}],"id":"6"},{"type":"card","name":"计划执行","isShow":1,"x":0,"y":0,"components":[{"type":"card-list","isShow":1,"cols":1,"origin":"JhzxDg","ex":"data","id":"100"},{"type":"card-list","isShow":1,"cols":1,"origin":"JhzxWx","ex":"data","id":"115"},{"type":"card-list","isShow":1,"cols":1,"origin":"JhzxZc","ex":"data","id":"95"}],"id":"158"},{"type":"card","name":"战储实力","isShow":1,"x":0,"y":454,"components":[{"type":"card-cols","isShow":1,"cols":1,"origin":"ZcslZbs","ex":"data","id":"18","components":[{"id":"34","type":"charts","slot":1,"origin":"ZcslZbs","ex":"chartMain","height":"150px"}]},{"type":"card-cols","isShow":1,"cols":1,"origin":"ZcslQcs","ex":"data","id":"82","components":[{"id":"48","type":"charts","slot":1,"origin":"ZcslQcs","ex":"chartMain","height":"150px"}]}],"id":"52"},{"type":"card","name":"保障能力","isShow":1,"x":1440,"y":385,"components":[{"type":"card-list","isShow":1,"cols":1,"origin":"BznlRy","ex":"data","display":"block","id":"163"},{"type":"card-cols","isShow":1,"cols":2,"origin":"BznlSbs","ex":"data","id":"173","components":[{"id":"110","type":"charts","slot":1,"origin":"BznlSbs","ex":"chartMain","height":"150px"},{"id":"122","type":"charts","slot":2,"origin":"BznlSbs","ex":"chartKyrate","height":"85px"}]},{"type":"card-cols","isShow":1,"cols":1,"origin":"BznlQcs","ex":"data","id":"112","components":[{"id":"97","type":"charts","slot":1,"origin":"BznlQcs","ex":"chartMain","height":"150px"}]}],"id":"13"},{"type":"foot-carousel","isShow":1,"x":469,"y":806,"origin":"Foot","ex":"data"}]},{"name":"装备态势","path":"337442303972529","components":[{"type":"search-checkbox","isShow":1,"x":0,"y":0,"id":"180"},{"type":"card","name":"装备质量状态","isShow":1,"x":1440,"y":613,"components":[{"type":"card-cols","isShow":1,"cols":1,"origin":"ZbzlZt","ex":"data","id":"12","components":[{"id":"194","type":"charts","slot":1,"origin":"ZbzlZt","ex":"chartMain","height":"160px"}]}],"id":"128"},{"type":"card","name":"装备动用","isShow":1,"x":0,"y":547,"components":[{"type":"card-cols","isShow":1,"cols":1,"origin":"Zbdy","ex":"data","id":"197","components":[{"id":"151","type":"charts","slot":1,"origin":"Zbdy","ex":"chartMain","height":"150px"}]}],"id":"172"},{"type":"card","name":"装备变化","isShow":1,"x":1440,"y":401,"components":[{"type":"card-cols","isShow":1,"cols":2,"origin":"Zbbh","ex":"data","id":"192","components":[{"type":"card-list","big":true,"isShow":1,"slot":1,"origin":"Zbbh","ex":"list","height":"150px","id":"21"},{"id":"173","type":"charts","slot":2,"origin":"Zbbh","ex":"chartWcrate","height":"120px"}]}],"id":"63"},{"type":"card","name":"装备实力","isShow":1,"x":1440,"y":0,"components":[{"cols":2,"ex":"data","origin":"ZbslBzs","type":"card-cols","isShow":1,"id":"63","path":"/ov-equiphave","components":[{"id":"84","type":"charts","slot":1,"origin":"ZbslBzs","ex":"chartMain","height":"250px"},{"id":"9","type":"charts","slot":2,"origin":"ZbslBzs","ex":"chartBprate","height":"85px"},{"id":"76","type":"charts","slot":2,"origin":"ZbslBzs","ex":"chartKyrate","height":"85px"},{"id":"177","type":"charts","slot":2,"origin":"ZbslBzs","ex":"chartZbrate","height":"85px"}]}],"id":"70"}]},{"name":"战储态势","path":"89539531971677","components":[{"type":"search-checkbox","isShow":1,"x":0,"y":0,"id":"49"},{"type":"card","name":"战储实力","isShow":1,"x":1440,"y":211,"components":[{"type":"card-cols","isShow":1,"cols":1,"origin":"ZcslZbs","ex":"data","id":"162","components":[{"id":"143","type":"charts","slot":1,"origin":"ZcslZbs","ex":"chartMain","height":"150px"}]},{"type":"card-cols","isShow":1,"cols":1,"origin":"ZcslQcs","ex":"data","id":"125","components":[{"id":"150","type":"charts","slot":1,"origin":"ZcslQcs","ex":"chartMain","height":"150px"}]}],"id":"66"},{"type":"card","name":"战储质量状态","isShow":1,"x":1440,"y":704,"components":[{"type":"card-cols","isShow":1,"cols":1,"origin":"Zczl","ex":"data","id":"134","components":[{"id":"108","type":"charts","slot":1,"origin":"Zczl","ex":"chartMain","height":"160px"}]}],"id":"46"},{"type":"card","name":"战储变化","isShow":1,"x":0,"y":548,"components":[{"type":"card-cols","isShow":1,"cols":2,"origin":"Zcbh","ex":"data","id":"112","components":[{"type":"card-list","big":true,"slot":1,"origin":"Zcbh","ex":"list","height":"120px"},{"id":"144","type":"charts","slot":2,"origin":"Zcbh","ex":"chartWcrate","height":"100px"}]}],"id":"150"},{"type":"card","name":"仓库情况","isShow":1,"x":1440,"y":0,"components":[{"type":"card-cols","isShow":1,"cols":2,"origin":"Ckqk","ex":"data","id":"145","path":"/ov-reserve","components":[{"type":"card-list","big":true,"slot":1,"origin":"Ckqk","ex":"list","height":"120px","id":"93"},{"id":"19","type":"charts","slot":2,"origin":"Ckqk","ex":"chartSyrate","height":"100px"}]}],"id":"166"}]},{"name":"保障态势","path":"149674771168807","components":[{"type":"search-checkbox","isShow":1,"x":0,"y":0,"id":"193"},{"type":"card","name":"器材资源","isShow":1,"x":1440,"y":583,"components":[{"type":"card-cols","isShow":1,"cols":1,"origin":"QcslQcs","ex":"data","id":"137","components":[{"id":"95","type":"charts","slot":1,"origin":"QcslQcs","ex":"chartMain","height":"150px"}]}],"id":"107"},{"type":"card","name":"人力资源","isShow":1,"x":1440,"y":0,"components":[{"type":"card-cols","isShow":1,"cols":2,"origin":"RlzyRy","ex":"data","id":"106","path":"/ov-haveamount","components":[{"type":"card-list","big":true,"isShow":1,"slot":1,"origin":"RlzyRy","ex":"list","height":"150px","id":"21"},{"id":"116","type":"charts","slot":2,"origin":"RlzyRy","ex":"chartZbrate","height":"120px"}]},{"type":"card-list","isShow":1,"origin":"RlzyBz","ex":"data","id":"121","components":[]}],"id":"96"},{"type":"card","name":"设备资源","isShow":1,"x":1440,"y":309,"components":[{"type":"card-cols","isShow":1,"cols":2,"origin":"SbzySbs","ex":"data","id":"150","components":[{"type":"card-list","big":true,"isShow":1,"slot":1,"origin":"SbzySbs","ex":"list","height":"150px","id":"142"},{"id":"114","type":"charts","slot":2,"origin":"SbzySbs","ex":"chartKyrate","height":"120px"}]}],"id":"11"}]},{"name":"业务态势","path":"904563027093674","components":[{"type":"search-checkbox","isShow":1,"x":0,"y":0,"id":"68"},{"type":"card","name":"合同情况","isShow":1,"x":0,"y":746,"components":[{"type":"card-list","isShow":1,"cols":1,"origin":"Htqk","ex":"data","id":"59","path":"/ov-contractprogress"}],"id":"83"},{"type":"card","name":"项目情况","isShow":1,"x":1440,"y":651,"components":[{"type":"card-list","isShow":1,"origin":"XmqkZs","ex":"data","id":"64","display":"block","path":"/ov-projprogress"},{"type":"card-cols","isShow":1,"cols":1,"origin":"XmqkFb","ex":"data","id":"81","path":"/ov-projprogress","components":[{"id":"158","type":"charts","slot":1,"origin":"XmqkFb","ex":"chartMain","height":"120px"}]}],"id":"193"},{"type":"card","name":"经费情况","isShow":1,"x":0,"y":532,"components":[{"type":"card-cols","isShow":1,"cols":2,"origin":"Jfqk","ex":"data","id":"70","path":"/ov-appropriate","components":[{"type":"card-list","big":true,"slot":1,"origin":"Jfqk","ex":"list","height":"120px","id":"155"},{"id":"199","type":"charts","slot":2,"origin":"Jfqk","ex":"chartBfrate","height":"100px"}]}],"id":"167"},{"type":"card","name":"计划执行","isShow":1,"x":1440,"y":198,"components":[{"type":"card-list","isShow":1,"cols":1,"origin":"JhzxDg","ex":"data","id":"8"},{"type":"card-list","isShow":1,"cols":1,"origin":"JhzxWx","ex":"data","id":"116"},{"type":"card-list","isShow":1,"cols":1,"origin":"JhzxZc","ex":"data","id":"163"}],"id":"57"},{"type":"card","name":"装备动态","isShow":1,"x":1440,"y":0,"components":[{"type":"card-list","isShow":1,"origin":"Zbdt","ex":"data","id":"174","display":"block"}],"id":"164"}]},{"name":"任务态势","path":"1132675663919446","components":[{"type":"search-list","isShow":1,"x":0,"y":0,"id":"134"},{"type":"card","name":"xx任务","isShow":1,"x":1440,"y":0,"components":[{"type":"card-tasktime","isShow":1,"origin":"RwSc","ex":"data","id":"65","path":"/ov-joinperson"},{"type":"card-taskprogress","isShow":1,"origin":"RwJd","ex":"data","id":"165"},{"type":"card-cols","isShow":1,"cols":1,"origin":"RwDw","ex":"data","id":"132","path":"/ov-joinperson","components":[{"type":"card-taskunit","slot":1,"origin":"RwDw","ex":"list","height":"160px","id":"113"}]},{"type":"card-cols","isShow":1,"cols":1,"origin":"RwRy","ex":"data","id":"55","path":"/ov-joinperson","components":[{"id":"131","type":"charts","slot":1,"origin":"RwRy","ex":"chartMain","height":"160px"}]},{"type":"card-cols","isShow":1,"cols":1,"origin":"RwZb","ex":"data","id":"18","path":"/ov-joinperson","components":[{"id":"163","type":"charts","slot":1,"origin":"RwZb","ex":"chartMain","height":"250px"}]}],"id":"101"}]}]
        })
      })
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
      })
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
      })
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
      })
    })
  },

  //装备实力-编制数量
  getZbslBzs(payload){
    //return res.get('/guidance/options')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data:{"data":
          [{"name":"战备数量","value":"0"},{"name":"缺编数量","value":"180"},{"name":"可用数量","value":"8"},{"name":"现有数量","value":"2"}],"zbl":"0","zbje":"7.3","bzsl":"180","bpl":"0","kyl":"400"}
        })

      })
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
      })
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
      })
    })
  },
  getBznlRy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getBznlSbs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getBznlQcs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getJhzxDg(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getJhzxWx(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getJhzxZc(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getZbzlZt(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getZbbh(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getZbdy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRlzyRy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRlzyBz(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getSbzySbs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getQcslQcs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getZbdt(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getXmqkZs(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getXmqkFb(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getHtqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getJfqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getCkqk(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getZczl(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getZcbh(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRwSc(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRwJd(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRwDw(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRwRy(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  },
  getRwZb(payload){
    //return res.get('/guidance/options')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data:{}
          })
        })
      })
  }
 
}

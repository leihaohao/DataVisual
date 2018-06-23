import api from '@/libs/request'

export default {
  
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

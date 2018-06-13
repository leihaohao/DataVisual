import api from '@/libs/request'

// 获取筛选项
export async function getChartsData (payload) {
  //return res.get('/guidance/options')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data:[3000,2000,15000,18000]
        }
      })
    }, 2000)
  })
}

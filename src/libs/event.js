// 节流
export function throttle (method, duration) {
  let begin = new Date()
  return ()=> {
    const context = this
    const args = arguments
    const current = new Date()
    if (current - begin >= duration) {
      method.apply(context, args)
      begin = current
    }
  }
}

// 去抖
export function debounce (method, delay) {
  let timer = null
  return  () => {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      method.apply(context, args)
    }, delay)
  }
}

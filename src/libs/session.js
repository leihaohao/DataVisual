// 用户信息
export function hasSession () {
  return !!localStorage.getItem('session')
}

export function clearSession () {
  localStorage.removeItem('session')
}

export function setSession (session) {
  localStorage.setItem('session', JSON.stringify(session))
}

export function getSession () {
  return JSON.parse(localStorage.getItem('session'))
}

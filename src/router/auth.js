import router, { getRole } from './index'
import { store } from '../store'
import { getToken } from '../utils/cookie'

// 白名单列表
const whiteList = ['/login', '/register'];

const checkRole = (record) => {
  const role = getRole();
  console.log(record);
  if (record && record.meta && Array.isArray(record.meta.roles)) {
    return record.meta.roles.includes(role)
  } else {
    return false;
  }
}

router.beforeEach((to, from, next) => {
  if (getToken()) {
    // 已登录且要跳转的是登录页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (to.matched.some(record => checkRole(record))) {
        next()
      } else {
        next(`/login?redirect=${to.fullPath}`)
      }
    }
  } else {
    // 在免登录白名单，直接进入
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 否则重定向到登录页
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})

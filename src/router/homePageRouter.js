/*
 * @Description: 主页路由
 * @Author: huananBeef
 * @Date: 2019-12-31 14:07:30
 * @LastEditors: huananBeef
 * @LastEditTime: 2019-12-31 14:07:30
 */

export default [
  {
    path: '/',
    name: 'homePage',
    component: () => import('@/pages/homePage/homePage.vue')
  }
]
/*
 * @Description: 抽奖路由
 * @Author: huananBeef
 * @Date: 2019-12-29 22:21:30
 * @LastEditors: huananBeef
 * @LastEditTime: 2019-12-29 22:22:30
 */

export default [
  {
    path: '/lotteryDraw',
    name: 'LotteryDraw',
    component: () => import('@/pages/lotteryDraw/lotteryDraw.vue')
  }
]
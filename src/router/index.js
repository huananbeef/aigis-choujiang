/*
 * @Description: vue-router注册路由
 * @Author: huananBeef
 * @Date: 2019-12-29 22:18
 * @LastEditors: huananBeef
 * @LastEditTime: 2019-12-29 22:18
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import lotteryDrawRouter from './lotteryDrawRouter'

Vue.use(VueRouter)

const routes = [
  ...lotteryDrawRouter
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07149929 = () => interopDefault(import('../pages/board/index.vue' /* webpackChunkName: "pages/board/index" */))
const _05ac3a00 = () => interopDefault(import('../pages/leaderboard/index.vue' /* webpackChunkName: "pages/leaderboard/index" */))
const _02b3de70 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _423af794 = () => interopDefault(import('../pages/board/_id/index.vue' /* webpackChunkName: "pages/board/_id/index" */))
const _be0f8fe8 = () => interopDefault(import('../pages/board/_id/mindmap.vue' /* webpackChunkName: "pages/board/_id/mindmap" */))
const _171029dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6b302c26 = () => interopDefault(import('../pages/_user/index.vue' /* webpackChunkName: "pages/_user/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/board",
    component: _07149929,
    name: "board"
  }, {
    path: "/leaderboard",
    component: _05ac3a00,
    name: "leaderboard"
  }, {
    path: "/privacy",
    component: _02b3de70,
    name: "privacy"
  }, {
    path: "/board/:id",
    component: _423af794,
    name: "board-id"
  }, {
    path: "/board/:id/mindmap",
    component: _be0f8fe8,
    name: "board-id-mindmap"
  }, {
    path: "/",
    component: _171029dc,
    name: "index"
  }, {
    path: "/:user",
    component: _6b302c26,
    name: "user"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import { lazy } from 'react'

const routerList = [
  {
    key: 1,
    label: 'Home',
    path: '/',
    component: lazy(() => import('pages/Home')),
    hasAuth: false
  },
  {
    key: 2,
    label: 'Game',
    path: '/game',
    component: lazy(() => import('pages/Game')),
    hasAuth: false
  }
]

export default routerList

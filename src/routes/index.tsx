import loadable from '@loadable/component'
import Layout, { H5Layout } from '@/layouts'
import { RouteConfig } from 'react-router-config'
import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const StyledCenter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
`

export const Loading = () => {
  return (
    <StyledCenter>
      <Spin size="large" />
    </StyledCenter>
  )
}

const loadableWithFallback = (loadFn: any, fallback = <Loading />) => {
  return loadable(loadFn, { fallback })
}

const Page404Router = {
  component: loadableWithFallback(() => import('@/pages/404'))
}

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: loadableWithFallback(() => import('@/pages/home'))
  },
  // APP 路由
  {
    component: Layout,
    path: '/hybrid',
    routes: [
      {
        path: '/hybrid/aa',
        exact: true,
        component: loadableWithFallback(() => import('@/pages/hybrid')),
        visible: () => false
      },
      Page404Router
    ]
  },
  // H5 相关路由
  {
    component: H5Layout,
    path: '/h5',
    routes: [
      {
        path: '/h5/aa',
        exact: true,
        component: loadableWithFallback(() => import('@/pages/h5'))
      },
      Page404Router
    ]
  },
  Page404Router
]

export default routesConfig

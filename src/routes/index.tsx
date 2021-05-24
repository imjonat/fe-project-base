import loadable from '@loadable/component'
import Layout, { H5Layout } from '@/layouts'
import { RouteConfig } from 'react-router-config'
import Home from '@/pages/home'
import React from 'react'
import styled from 'styled-components'

const StyledCenter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
`
export const Loading = () => {
  return <StyledCenter>loading</StyledCenter>
}

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  // APP 路由
  {
    path: '/hybird',
    exact: true,
    component: Layout,
    routes: [
      {
        path: '/aaa',
        exact: false,
        component: loadable(() => import('@/pages/hybird'), {
          fallback: <Loading />
        })
      }
    ]
  },
  // H5 相关路由
  {
    path: '/h5',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/h5'), {
          fallback: <Loading />
        })
      }
    ]
  }
]

export default routesConfig

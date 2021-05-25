import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

/**
 * <Switch {...switchProps}>
  {routes.map((route, i) => (
    <Route
      key={route.key || i}
      path={route.path}
      exact={route.exact}
      strict={route.strict}
      render={props =>
        route.render ? (
          route.render({ ...props, ...extraProps, route: route })
        ) : (
          <route.component {...props} {...extraProps} route={route} />
        )
      }
    />
  ))}
</Switch>
 */
const Layout: React.FC<RouteConfigComponentProps> = React.memo(function Layout(props) {
  // const history = useHistory()
  const { route } = props
  console.log('Hybrid layout', 'route?.routes', route?.routes)

  return (
    <div
      style={{
        height: '100vh'
      }}
    >
      <div
        style={{
          height: 200,
          background: 'gray'
        }}
      >
        Hybrid-header
      </div>
      <div
        style={{
          height: 'calc(100vh - 200px)',
          overflow: 'auto',
          position: 'relative'
        }}
      >
        {renderRoutes(route?.routes)}
      </div>
    </div>
  )
})

export const H5Layout: React.FC<RouteConfigComponentProps> = React.memo(function H5Layout(props) {
  const { route } = props
  // const history = useHistory()
  // TODO 判断是否是微信环境，跳转到错误提示页
  // history.push('/wx-page-error')
  console.log('h5 layout')
  return (
    <>
      <h1>h5</h1>
      {renderRoutes(route?.routes)}
    </>
  )
})

export default Layout

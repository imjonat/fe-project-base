import '@/styles/global.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import routes, { history } from './routes'
import stores from '@/stores'

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={stores}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

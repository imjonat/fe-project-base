/* !
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'

export default class Page404 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <div>
          <img src={require('@/assets/images/404.svg')} />
        </div>
        <div>
          页面不存在，返回 <a href='/'>首页</a> 。
        </div>
      </div>
    )
  }
}

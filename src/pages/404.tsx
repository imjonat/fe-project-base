/* !
 * Copyright (C) 2016-present, Yuansuan.cn
 */

import React from 'react'
import img from '@/assets/404.svg'

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
          <img src={img} />
        </div>
        <div>
          页面不存在，返回 <a href='/'>首页</a> 。
        </div>
      </div>
    )
  }
}

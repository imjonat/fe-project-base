import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Button } from 'antd'
import { history } from '@/routes'

const HybridHome: React.FC = observer(props => {
  const commonStore = useStores('commonStore')

  return (
    <>
      <Button onClick={() => history.push('/')}>返回首页</Button>
      <Button onClick={() => history.push('/h5/aa')}>去h5</Button>
      {/* 耗时操作 */}
      {Array.from({ length: 10 ** 5 }).map((_, i) => {
        return <div key={i}>{Math.random()}</div>
      })}
      <div>Welcome Hybrid Home</div>
      <div>current theme: {commonStore.theme}</div>
      <button type='button' onClick={() => commonStore.setTheme('black')}>
        set theme to black
      </button>
      <button type='button' onClick={() => commonStore.setTheme('red')}>
        set theme to red
      </button>
    </>
  )
})

export default HybridHome

import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Button } from 'antd'
import { history } from '@/routes'

const H5Home: React.FC = observer(props => {
  console.log('h5 index')
  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')
  return (
    <>
      <Button onClick={() => history.push('/')}>返回首页</Button>
      <div>Welcome H5 Home</div>
      <div>store counter: {counterStore.counter}</div>
      <button type='button' onClick={() => counterStore.increment()}>
        increment
      </button>
      <button type='button' onClick={() => counterStore.decrement()}>
        decrement
      </button>
      <h5>commonStore.testObj.count: {commonStore.testObj.count}</h5>
      <Button
        onClick={() => {
          commonStore.testObj.add()
        }}>
        增加一个count
      </Button>
      <Button
        onClick={() => {
          history.push('/hybrid/aa')
        }}>
        跳转到hybrid/aa
      </Button>
    </>
  )
})

export default H5Home

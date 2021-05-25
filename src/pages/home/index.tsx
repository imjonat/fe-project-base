import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.less'
import { Button } from 'antd'
import { Http } from '@/utils'

interface IHomeProps {
  title: string
  backurl?: string
}

const Home: React.FC<any> = observer(props => {
  const { backurl, title } = props

  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')

  return (
    <>
      <div className={styles.title}>Welcome Home {title}</div>
      <div className={styles.result}>current counter：{counterStore.counter}</div>
      <div className={styles.result}>current theme：{commonStore.theme}</div>
      <p className={styles.row}>
        <Link to='/h5/aa'>H5 模块</Link>
      </p>
      <p className={styles.row}>
        <Link to='/hybrid/aa'>hybird 模块</Link>
      </p>
      <Button
        type='primary'
        onClick={() => {
          Http.post('/api/login', {}, { disableError: true }).then(res => {
            console.log(res)
          })
        }}>
        发送请求
      </Button>
    </>
  )
})

export default Home

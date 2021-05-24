import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'

const HybirdHome: React.FC = observer((props) => {
  const commonStore = useStores('commonStore')

  return (
    <>
      {Array.from({ length: 10 ** 4 }).map(() => {
        return <div key={Math.random()}>12313</div>
      })}
      <div>Welcome Hybird Home</div>
      <div>current theme: {commonStore.theme}</div>
      <button type="button" onClick={() => commonStore.setTheme('black')}>
        set theme to black
      </button>
      <button type="button" onClick={() => commonStore.setTheme('red')}>
        set theme to red
      </button>
    </>
  )
})

export default HybirdHome

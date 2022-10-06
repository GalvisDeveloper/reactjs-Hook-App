import React, {memo} from 'react'
import { Number } from '../../styles/General'

const SmallWithMemo = memo(({value}) => {

    console.log('is activated')

  return (
    <Number>{value}</Number>
  )
})

export default SmallWithMemo
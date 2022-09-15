import React from 'react'
import { Number } from '../../styles/General'

const SmallWithoutMemo = ({value}) => {

  console.log('is disabled')

  return (
    <Number>{value}</Number>
  )
}

export default SmallWithoutMemo
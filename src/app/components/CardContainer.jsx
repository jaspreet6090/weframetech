import React from 'react'
import { Card } from './utils'

const CardContainer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card color="red"/>
        <Card color="red" />
        <Card  color="red"/>
        <Card />
        <Card />
        <Card />
        <Card color="red"/>
        <Card color="red"/>
        <Card color="red"/>
      </div>
    </div>
  )
}

export default CardContainer

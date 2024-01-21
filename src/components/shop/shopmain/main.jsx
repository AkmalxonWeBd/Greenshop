import React from 'react'
import Releted_products from './releted products/RPraducts'
import Tabs from '../tabs/tabs'

function Main() {
  return (
    <div className='shopmain'>
        <div className='ProductImages'>
            <Tabs/>
            <Releted_products/>
        </div>
    </div>
  )
}

export default Main
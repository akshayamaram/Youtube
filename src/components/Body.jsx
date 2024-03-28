import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


const Body = () => {
  return (
    <div className='body-wrapper'>
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body
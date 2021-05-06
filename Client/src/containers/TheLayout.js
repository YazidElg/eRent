import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import background from "src/image_3.png";

const TheLayout = () => {

  return (
   
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
      <div style={{ 
      backgroundImage: `url(${background})`
    }}>
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    </div>
  )
}

export default TheLayout

import React from 'react'
import {Outlet} from 'react-router-dom';
import 'css/layout.css'
import { useState } from 'react'
const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const onClick = (e) => {
    e.preventDefault()
    console.log('gg')
    setHidden((prev) => {
      return !prev
    })
  }
  console.log(hidden)
  return (
    <>
    <button  className={'gg'} onClick={onClick}>
    <i className="gg-menu"></i>
    </button>
    <div className={hidden? "container hidden-sidebar": "container show-sidebar"}>
      <div className="sidebar">sidebar

      </div>
      <div className="header">

        <h1>
          Askarate.moscow
        </h1>

        <button className="share">
          Поделиться
        </button>

    </div>
    <div className="content">
      <Outlet/>
    </div>


    </div>
    </>
  )
}
export default Layout

import React from 'react'
import {Outlet} from 'react-router-dom';
import './layout.css'
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
    <div className={hidden? "container container-hidden-sidebar": "container"}>
      <div className={hidden ? 'sidebar-hidden' : "sidebar"}>sidebar
        <button  className={hidden ? 'sidebar-button button-hidden': 'sidebar-button'} onClick={onClick}>
        {hidden?  <i class="gg-menu"></i>: <i class="gg-chevron-double-right-r"></i>}
        </button>

      </div>
      <div className={hidden? "header": "header header-small"}>
        <button  className={hidden ? 'menu-button small-screen-hide': 'menu-button button-hidden'} onClick={onClick}>
        <i className="gg-menu"></i>
        </button>

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

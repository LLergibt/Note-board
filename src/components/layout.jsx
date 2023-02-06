import React from 'react'
import './layout.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const onClick = (e) => {
    e.preventDefault()
    setHidden((prev) => {
      return !prev
    })
  }
  console.log(hidden)
  return (
   <>
    <div className="layout">
    <div className={hidden? '' :  "sidebar"}>
      <button className={hidden ? "hidden-sidebar-button": "sidebar-button"} onClick={onClick}>
        {hidden? <i class="gg-chevron-double-right-r"></i>: <i class="gg-chevron-double-left-r"></i>}
      </button>
    </div>
    <div className="header">
      <h1>
        Askarate.moscow
      </h1>
      <div className="share">
      <button>
          Поделиться
        </button>
      </div>
    </div>
    </div>

    <div className="outlet">
      <Outlet/>
    </div>

   </>
  )
}
export default Layout

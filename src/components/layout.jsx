import React from 'react'
import './layout.css'
import { useState } from 'react'
const Layout = () => {
  const [hidden, setHidden] = useState(false);
  const onClick = (e) => {
    e.preventDefault()
    setHidden((prev) => {
      return !prev
    })
  }
  return (
    <div className={hidden? "container container-hidden-sidebar": "container"}>
      <div className={hidden ? 'sidebar-hidden' : "sidebar"}>sidebar

        <ul>
          <li>
            fdhvfi
          </li>
          <li>
            dsfsdojf
          </li>
          <li>
            dfdsfsd
          </li>
          <li>
            dfdsfsd
          </li>
        </ul>
      </div>
      <div className="header">

        <button  className={hidden ? '': 'sidebar-button'} onClick={onClick}>
        {hidden? <i class="gg-chevron-double-right-r"></i>: <i class="gg-chevron-double-left-r"></i>}
        </button>
        header
    </div>
      <div className="content">content</div>

    </div>
  )
}
export default Layout

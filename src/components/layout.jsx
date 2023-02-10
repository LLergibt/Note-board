import React from 'react'
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
    <div className={hidden? "container container-hidden-sidebar": "container"}>
      <div className={hidden ? 'sidebar-hidden' : "sidebar"}>sidebar
        <button  className={hidden ? 'sidebar-button button-hidden': 'sidebar-button'} onClick={onClick}>
        {hidden?  <i class="gg-menu"></i>: <i class="gg-chevron-double-right-r"></i>}
        </button>

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
        <button  className={hidden ? 'menu-button small-screen-hide': 'menu-button button-hidden'} onClick={onClick}>
        <i className="gg-menu"></i>
        </button>

        header
    </div>
      <div className="content">content</div>

    </div>
  )
}
export default Layout

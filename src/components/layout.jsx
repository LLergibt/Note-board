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
    <div className="container">
      <div className={hidden ? 'sidebar-hidden' : "sidebar"}>sidebar
        <button onClick={onClick}>
          focalboard
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
      <div className="header">header</div>
      <div className="content">content</div>

    </div>
  )
}
export default Layout

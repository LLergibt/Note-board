import React from 'react'
import 'css/layout.css'

const Header = ({onClickNoteButton}) => {
  return (
      <div className="header">
        <h1>
          Askarate.moscow
        </h1>

        <button className="share">
          Поделиться
        </button>
        <div className="filters">
          <button className="share" onClick={onClickNoteButton}>
          Создать
        </button>
        </div>

    </div>
  )
}
export default Header

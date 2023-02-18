import React from 'react';
import './popup-note.css';
const Note = ({setShowPopup}) => {
  const onClick = (e) => {
    e.preventDefault()
    setShowPopup((prev) => {
      return !prev
    })
  }
  return (
    <div className="popup-container" onClick={onClick}>
      <div className="popup">
      <h1>
        CSS для попапа заявления сборников
      </h1>
      <div className="main-modal">
        <div >
        <button className="note-property" >
          Статус
        </button>
        <button className="note-property">
          В процессе
        </button>
      </div>
        <div>
          <button className="note-property">
          Область
        </button>
        <button className="note-property">
           frontend
        </button>
      </div>
      </div>
    </div>
    </div>
  )

}
export default Note

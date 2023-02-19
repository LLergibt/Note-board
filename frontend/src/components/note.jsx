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
      <h1 className="title">
        CSS для попапа заявления сборников
      </h1>
      <div className="main-modal">
        <div className="property">
        <button className="note-property" >
          Статус
        </button>
        <button className="note-property">
          <p>
          В процессе
          </p>
        </button>
      </div>
        <div className="property">
          <button className="note-property title">
          Область
        </button>
        <button className="note-property data">
          <p>
           frontend
          </p>
        </button>
        </div>
      <div className="property">
        <button className="note-property data">
          Добавить свойство
        </button>
      </div>
      <div className="comment">
        <p>
        Добавить коментарий
        </p>
      </div>
      </div>
    </div>
    </div>
  )

}
export default Note

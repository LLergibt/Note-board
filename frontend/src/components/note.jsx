import React from 'react';
import './popup-note.css';
import PopupProperty from './popupProperty'
const Note = ({setShowPopup, note}) => {
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
        {note.title}
      </h1>
      <div className="main-modal">
        {note.properties.map((property, idx) => 
          <PopupProperty key={idx} property={property}/>
        )}
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

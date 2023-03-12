import React from 'react';
import 'css/popup-note.css';
import PopupProperty from 'components/popupProperty'
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

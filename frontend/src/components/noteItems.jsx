import React, {useState} from 'react';
import './itemNote.css'
import Note from './note'

const NoteItems = () => {
  const [showPopup, setShowPopup] = useState(false)
  const onClick = (e) => {
    e.preventDefault()
    setShowPopup((prev) => {
      return !prev
    })
  }
  return (
    <>
    <div className="noteItem" onClick={onClick}>
      <h1>
      CSS для попапа заявления сборников
      </h1>
      <p className="status">
        HOT
      </p>
      <p className="note-detail area">
        Frontend
      </p>
      <p className="note-detail responser">
        Гоша
      </p>
    </div>
    {showPopup && <Note setShowPopup={setShowPopup}/>}
    </>
    
  )
}
export default NoteItems

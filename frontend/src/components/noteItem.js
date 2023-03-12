import React, {useState} from 'react';
import 'css/itemNote.css'
import Note from 'components/note'
import PropertyItem from './propertyItem'

const NoteItem = ({note}) => {
  //const [showPopup, setShowPopup] = useState(false)
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
      {note.title}
      </h1>
      {note.properties.map((property, idx) => 
        <PropertyItem key={idx} property={property}/>
      )}

    </div>
    {showPopup && <Note setShowPopup={setShowPopup} note={note}/>}
    </>
    
  )
}
export default NoteItem

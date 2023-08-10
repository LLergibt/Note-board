import React, {useState, useEffect} from 'react';
import Note from 'components/popup/note'
import {useNote} from 'contexts/NoteProvider'
import {usePopup} from 'hooks/usePopup'

const NoteItem = ({note, properties}) => {
  //const [showPopup, setShowPopup] = useState(false)
  const {isPopup, hidePopup, showPopup} = usePopup()

  const {addNoteInContext, addPropertiesInContext} = useNote()
  const noteProperties = properties? properties.filter(property => property.note_id === note.id): []
  const onClick = (e) => {
    e.preventDefault()
    addNoteInContext(note)
    addPropertiesInContext(noteProperties)
    showPopup()
  }

  return (
    <>
     <div className="ml-10 border-2	my-5 w-48 min-h-full   rounded border-black" onClick={onClick}>
      <p className="text-lg text-center">
      {note.title}
      </p>
      {noteProperties.map((property) => (
      property.is_toggled &&
      <p key={property.id} className={`ml-4`}>
        {property.data}
      </p>
      
      )
)}

    </div>
    {isPopup && <Note onClickOutside={() => hidePopup()}/>}
    </>
    
  )
}
export default NoteItem

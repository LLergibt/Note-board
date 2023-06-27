import React, {useState} from 'react';
import Note from 'components/popup/note'
import PropertyItem from './propertyItem'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'

const NoteItem = ({note, properties}) => {
  //const [showPopup, setShowPopup] = useState(false)
  const {isPopup, hidePopup, showPopup} = usePopup()
  const {addNoteInContext, addPropertiesInContext} = useHandleNote()
  const noteProperties = properties? properties.filter(property => property.note_id === note.id): []
  const onClick = (e) => {
    e.preventDefault()
    addNoteInContext(note)
    addPropertiesInContext(noteProperties)
    showPopup()
  }
  return (
    <>
    <div className="noteItem" onClick={onClick}>
      <p className="title">
      {note.title}
      </p>
      {noteProperties.map((property) => <PropertyItem key={property.id} property={property}/>
)}

    </div>
    {isPopup && <Note onClickOutside={() => hidePopup()}/>
    }
    </>
    
  )
}
export default NoteItem

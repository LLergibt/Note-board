import React from 'react';
import PopupProperty from 'components/popupProperty'
import {useRef, useContext } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
const Note = ({onClickOutside}) => {
  const ref = useRef(null);
  const title = useRef('')
  useClickOutside(onClickOutside, ref)
  const {note, properties, onChangeNote, addProperty} = useHandleNote()
  console.log(properties)

  return (
    <div className="popup-container">
      <div ref={ref} className="popup">
        <form className="title" onSubmit={(event) => onChangeNote(event, {title: title.current.value}, 'title')}>
        <input ref={title}  defaultValue={note.title} >
        </input>
        </form>
      <div className="main-modal">
        {properties.map((property, idx) => 
          <PopupProperty key={idx} property={property}/>
        )}
          <button className="note-property" onClick={(event) => addProperty(event)}>
          Добавить свойство
        </button>
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

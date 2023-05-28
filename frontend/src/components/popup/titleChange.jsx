import React, {useRef, useEffect} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
const TitleChange = ({property, onClickOutside}) => {
  const ref = useRef(null);
  const title = useRef('')
  const {onChangeNote, onDeleteProperty} = useHandleNote()
  useClickOutside(onClickOutside, ref)
  return (
    <div ref={ref} className="note-property">
    <form onSubmit={event => onChangeNote(event, {id: property.id, title: title.current.value}, 'property_title')}>
           <input ref={title} defaultValue={property.title} className="note-property" >
           </input>
     </form>
     <button onClick={event => onDeleteProperty(event, property.id)}>
       Удалить
     </button>

     


    </div>
  )

}
export default TitleChange

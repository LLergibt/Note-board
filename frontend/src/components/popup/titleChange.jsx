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
    <form onSubmit={event => onChangeNote(event, {property_id: property.property_id, title: title.current.value}, 'property_title')}>
           <input ref={title} defaultValue={property.title} className="note-property" >
           </input>
     </form>
     <button onClick={event => onDeleteProperty(event, property.property_id)}>
       Удалить
     </button>

     


    </div>
  )

}
export default TitleChange

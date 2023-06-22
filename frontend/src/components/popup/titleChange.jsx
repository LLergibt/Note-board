import React, {useRef, useEffect} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'
import Types from 'components/popup/types'
const TitleChange = ({property, onClickOutside}) => {
  const ref = useRef(null);
  const title = useRef('')
  const {onChangeNote, onDeleteProperty} = useHandleNote()
  const {showPopup, hidePopup, isPopup} = usePopup()
  useClickOutside(onClickOutside, ref)
  return (
    <div ref={ref} className="note-property">
    <form onSubmit={event => onChangeNote(event, {property_id: property.property_id, title: title.current.value}, 'property_title')}>
           <input ref={title} defaultValue={property.title} className="note-property" >
           </input>
     </form>
     <button onClick={showPopup}>
       Тип {property.types_title}
     </button>
     <button onClick={event => onDeleteProperty(event, property.property_id, onClickOutside)}>
       Удалить
     </button>

     {isPopup && <Types onClickOutside={() => hidePopup()}/>}

     


    </div>
  )

}
export default TitleChange

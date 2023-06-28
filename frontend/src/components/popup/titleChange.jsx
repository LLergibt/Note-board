import React, {useRef, useEffect} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'
import Types from 'components/popup/types'
const TitleChange = ({property, onClickOutside}) => {
  const ref = useRef(null);
  const title = useRef('')
  const {onChangeNote, onDeleteProperty} = useHandleNote()
  const {changePopupByCall, isPopup} = usePopup()
  useClickOutside(onClickOutside, ref)
  return (
    <>
    <div className="h-32 h-screen w-screen flex -z-10">
    <div ref={ref} className="flex flex-col shadow-2xl	border rounded-sm py-3 font-light text-base md:inset-0 ">
      <form onSubmit={event => onChangeNote(event, {property_id: property.property_id, title: title.current.value}, 'property_title')}>
             <input ref={title} defaultValue={property.title} className="mx-4 p-1 m-2 border-black hover:bg-gray-300 border rounded-sm" >
             </input>
       </form>
       <button className="mx-4 text-start" onClick={changePopupByCall}>
         Тип {property.types_title}
       </button>
       <button className="mx-4 text-start" onClick={event => onDeleteProperty(event, property.property_id, onClickOutside)}>
         Удалить
       </button>
      </div>
       {isPopup ? <Types/> : ''}
      </div>

    </>

     


  )

}
export default TitleChange

import React from 'react';
import PopupProperty from 'components/popupProperty'
import {useRef, useContext, useEffect, useState } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
import axios from 'axios'

const Types = ({propertyId}) => {
  const [types, setTypes] = useState()
  const {onChangeNote} = useHandleNote()


  useEffect(() => {
    axios('board/types').then(response => setTypes(response.data))
  }, [])

  return (
    <>
      <div className="shadow-2xl h-1/2 self-end bg-white border rounded-sm py-3 w-64  font-light text-base">
      <h1 className="text-base  border-b pl-4 pb-4 mb-4 font-bold text-gray-900 dark:text-white">
         Изменить тип свойства
      </h1>
    <ul className="flex flex-col">
      {types && types.map((type, idx) => 
        <button key={idx} onClick={(e) => {onChangeNote(e, {id: propertyId, type_id: type.id, type_title: type.title}, 'type')}} className="text-start pl-4 hover:bg-violet-400 hover:text-white" >{type.title}</button>
      )
      }
    </ul>
    </div>
    </>


  )
}
export default Types

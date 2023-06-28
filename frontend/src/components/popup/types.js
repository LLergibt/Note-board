import React from 'react';
import PopupProperty from 'components/popupProperty'
import {useRef, useContext, useEffect, useState } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
import axios from 'axios'

const Types = ({onClickOutside}) => {
  const ref = useRef(null);
  const [types, setTypes] = useState()


  useEffect(() => {
    axios('board/types').then(response => setTypes(response.data))
  }, [])
  return (
    <div className="h-screen z-10">
      <div ref={ref} className="shadow-2xl h-1/2 my-16  bg-white border rounded-sm py-3 w-64  font-light text-base">
      <h1 className="text-base  border-b pl-4 pb-4 mb-4 font-bold text-gray-900 dark:text-white">
         Изменить тип свойства
      </h1>
    <ul className="flex flex-col">
      {types && types.map((type, idx) => <button className="text-start pl-4" key={idx}>{type.title}</button>)}
    </ul>
  </div>
  </div>


  )
}
export default Types

import React, {useRef, useEffect} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'

const SelectChoiceType = ({newOption}) => {
  //const {onChangeNote, onDeleteProperty} = useHandleNote()

  return (
    <div className="absolute z-100">
    <div className="shadow-2xl w-64 h-3/4  bg-white border rounded-sm  font-extralight text-base ">
      <p className="text-center py-3 pl-1 text-gray-400 ">
        {newOption ? newOption : 'Нет вариантов. Начните печатать, чтобы добавить новый'}
      </p>
    </div>
    </div>

  )

}
export default SelectChoiceType

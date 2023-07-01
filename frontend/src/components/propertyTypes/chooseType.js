import React from 'react'
import {useRef, createContext} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'
import ChoiceTypePopup from 'components/popup/choiceType'

export const PropertyNoteContext = createContext()
const ChooseType = ({property}) => {
  const data = useRef()
  const {showPopup, hidePopup, isPopup} = usePopup()
  return (
    <PropertyNoteContext.Provider value={property}>
    <div className="w-64">
      {isPopup ?  <ChoiceTypePopup onClickOutside={hidePopup}/>: 
      <button className="text-start  pl-6" onClick={showPopup}>

          <span className="text-gray-400">
      {property.data ? property.data : 'пустой'}
          </span>
    </button>
          }
  </div>
</PropertyNoteContext.Provider>

  )
}
export default ChooseType

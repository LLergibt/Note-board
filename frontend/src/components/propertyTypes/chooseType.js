import React from 'react'
import {useRef, createContext, useEffect, useState} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'
import ChoiceTypePopup from 'components/popup/choiceType'
import axios from 'axios'

export const SelectedChoicesContext  = createContext()
export const PropertyNoteIdContext  = createContext()
export const ChoicesContext  = createContext()
const ChooseType = ({property}) => {
  const data = useRef()
  const [selectedChoices, setSelectedChoices] = useState()
  const [choices, setChoices] = useState()
  console.log(selectedChoices, 'gg')

  useEffect(() => {
    if (!selectedChoices) {
      axios.get(`http://localhost:8000/notes/property/choices/selected?property_note_id=${property.id}`).then(response => setSelectedChoices(response.data[0]))
      axios.get(`http://localhost:8000/notes/property/choices?property_id=${property.property_id}`).then(response => setChoices(response.data))
    }
  }, [])

  const {showPopup, hidePopup, isPopup} = usePopup()
  return (
    <>
    <PropertyNoteIdContext.Provider value={{propertyNoteId: property.id}}>
    <SelectedChoicesContext.Provider value={{selectedChoices, setSelectedChoices}}>
    <ChoicesContext.Provider value={{choices, setChoices}}>
    <div className="w-64">
      {isPopup ?  <ChoiceTypePopup property={property} onClickOutside={hidePopup}/>: 
      <button className="text-start  pl-6" onClick={showPopup}>

          <span className="text-gray-400">
          {selectedChoices? selectedChoices.title : 'пустой'}
          </span>
    </button>
          }
  </div>
  </ChoicesContext.Provider>
  </SelectedChoicesContext.Provider>
  </PropertyNoteIdContext.Provider>
  </>


  )
}
export default ChooseType

import React from 'react'
import {useRef, createContext, useEffect, useState} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'
import SelectedChoice from 'components/popup/selectedChoice'
import axios from 'axios'
import MaterialIcon, {colorPalette} from 'material-icons-react';

export const SelectedChoicesContext  = createContext()
export const PropertyNoteIdContext  = createContext()
export const ChoicesContext  = createContext()

const ChooseType = ({property}) => {
  const [selectedChoices, setSelectedChoices] = useState()
  const [choices, setChoices] = useState()

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
      <SelectedChoice property={property}/>
  </ChoicesContext.Provider>
  </SelectedChoicesContext.Provider>
  </PropertyNoteIdContext.Provider>
  </>


  )
}
export default ChooseType

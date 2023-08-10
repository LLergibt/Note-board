import React, {useContext, useState, useEffect, createContext} from 'react'
import axios from 'axios'
import {useRefresh} from 'contexts/RefreshProvider'
import {useProperty} from 'contexts/PropertyProvider'

const ChoiceContext = createContext()

const ChoiceProvider = ({ children }) => {
  const [selectedChoices, setSelectedChoices] = useState()
  const [choices, setChoices] = useState()
  const property = useProperty()
  const {onReload} = useRefresh()

  const loadChoices = async () => {
    await axios.get(`http://localhost:8000/notes/property/choices?property_id=${property.property_id}`).then(response => setChoices(response.data))
    await axios.get(`http://localhost:8000/notes/property/choices/selected?property_note_id=${property.id}`).then(response => setSelectedChoices(response.data[0]))
  }
  const getChoices = () => {
    axios.get(`http://localhost:8000/notes/property/choices?property_id=${property.property_id}`).then(response => setChoices(response.data))
  }

  useEffect(() => {
    loadChoices()
  }
    , 
  [])

  
  const urlBase='notes/change/property/type/choose'
  const sendData = async (choice, url) => axios.post(`${urlBase}/${url}`, choice)

  const onCreateChoice = async (event, choice) => {
    event.preventDefault()
    const newChoice = await sendData({title: choice.title, property_id: choice.property_id}, '')
    const choiceData = newChoice.data
    selectChoice(choiceData)
    setChoices((prev) => {return [...prev, choiceData]})
    setSelectedChoices(choiceData)
  }
  const getSelectedChoice = () => {
    axios.get(`http://localhost:8000/notes/property/choices/selected?property_note_id=${property.id}`).then((response) => {setSelectedChoices(response.data[0])})
    }
  const selectChoice = async (choice) => {
    const body = {choose_id: choice.id, property_note_id: property.id, title: choice.title}
    if (selectedChoices) {
       const newChoice = await sendData(body, 'select')
       setSelectedChoices(newChoice.data[0])
       }
    else {
      const newChoice = await sendData(body, 'make-select')
      setSelectedChoices(newChoice.data[0])
      }
  }

  const deleteChoice = async (choice) => {
    await axios.delete(`notes/choose?id=${choice.id}`)
    getChoices()
    selectedChoices && isSelected(choice.id) && setSelectedChoices()
  }
  const deleteSelectedChoice = async () => {
    await axios.delete(`notes/choose/selected?id=${selectedChoices.id}`)
    loadChoices()
    onReload()
    setSelectedChoices()
  }
  const deleteSelectedChoiceFromState = () => {
    setSelectedChoices()
  }
  const isSelected = (choiceId) => {
    if (choiceId === selectedChoices.choose_id)  {
      return true
    }
    return false
  }
  const value = {
    selectedChoices,
    choices,
    onCreateChoice,
    selectChoice,
    deleteChoice,
    deleteSelectedChoice
  }


  return (
    <ChoiceContext.Provider value={value}>
      {children}
    </ChoiceContext.Provider>
  )
}
export default ChoiceProvider
export const useChoice = () => useContext(ChoiceContext)

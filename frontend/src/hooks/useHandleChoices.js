import {SelectedChoicesContext} from 'components/propertyTypes/chooseType'
import {useNote} from 'contexts/NoteProvider'
import {ChoicesContext} from 'components/propertyTypes/chooseType'
import {PropertyNoteIdContext} from 'components/propertyTypes/chooseType'
import {useContext, useEffect} from 'react'
import {RefreshContext} from 'components/layout'
import axios from 'axios'

export const useHandleChoices = () => {
  const {selectedChoices, setSelectedChoices} = useContext(SelectedChoicesContext)
  const {propertyNoteId} = useContext(PropertyNoteIdContext)
  const {choices, setChoices} = useContext(ChoicesContext)
  const onReload = useContext(RefreshContext)
  

  const urlBase='notes/change/property/type/choose'

  const sendData = async (choice, url) => axios.post(`${urlBase}/${url}`, choice)



  const onCreateChoice = async (event, choice) => {
    event.preventDefault()
    const newChoice = await sendData({title: choice.title, property_id: choice.property_id}, '')
    const choiceData = newChoice.data
    selectChoice(choiceData)
    //console.log(choiceData)
    setChoices((prev) => {return [...prev, choiceData]})
    // console.log(choiceData)
    setSelectedChoices(choiceData)
  }
  const getSelectedChoice = () => {
    //axios.get(`http://localhost:8000/notes/property/choices/selected?property_note_id=${propertyNoteId}`).then((response) => {console.log(response.data)})
    axios.get(`http://localhost:8000/notes/property/choices/selected?property_note_id=${propertyNoteId}`).then((response) => {setSelectedChoices(response.data[0])})

    }
  const selectChoice = async (choice) => {
    const body = {choose_id: choice.id, property_note_id: propertyNoteId, title: choice.title}
    if (selectedChoices) {
       const newChoice = await sendData(body, 'select')
       setSelectedChoices(newChoice.data[0])
      //getSelectedChoice()
       }
    else {
      const newChoice = await sendData(body, 'make-select')
      setSelectedChoices(newChoice.data[0])
      //getSelectedChoice()
      //getSelectedChoice()

      }
  }

  const deleteChoice = async (choice) => {
    //console.log(choice)
    await axios.delete(`notes/choose?id=${choice.id}`)
    onReload()

    //deleteSelectedChoiceFromState()

    
  }
  const deleteSelectedChoice = async () => {
    await axios.delete(`notes/choose/selected?id=${selectedChoices.id}`)
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



  return {
    selectedChoices,
    choices,
    onCreateChoice,
    selectChoice,
    deleteChoice,
    deleteSelectedChoice
  }

}

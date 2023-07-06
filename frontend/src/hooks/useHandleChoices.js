import {SelectedChoicesContext} from 'components/propertyTypes/chooseType'
import {useUpdateItem} from 'hooks/useUpdateItemInListState'
import {ChoicesContext} from 'components/propertyTypes/chooseType'
import {PropertyNoteIdContext} from 'components/propertyTypes/chooseType'
import {useContext} from 'react'
import axios from 'axios'

export const useHandleChoices = () => {
  const {selectedChoices, setSelectedChoices} = useContext(SelectedChoicesContext)
  const {propertyNoteId} = useContext(PropertyNoteIdContext)
  const {choices, setChoices} = useContext(ChoicesContext)
  const {removePropertyFromState} = useUpdateItem(choices, setChoices)

  const urlBase='notes/change/property/type/choose'

  const sendData = async (choice, url) => axios.post(`${urlBase}/${url}`, choice)

  const onCreateChoice = async (event, choice) => {
    event.preventDefault()
    const newChoice = await sendData({title: choice.title, property_id: choice.property_id}, '')
    const choiceData = newChoice.data
    selectChoice(choiceData)
    setChoices((prev) => {return [...prev, choiceData]})
    //setSelectedChoices(choiceData)
  }
  const selectChoice = (choice) => {
    console.log(choice)
    if (selectedChoices) {
      sendData({choose_id: choice.id, property_note_id: propertyNoteId}, 'select')
    }
    else {
      sendData({choose_id: choice.id, property_note_id: propertyNoteId}, 'make-select')
    }
  setSelectedChoices((prev) => {return {...prev, title: choice.title}})
  }

  const deleteChoice = (choice) => {
    console.log(choice)
    axios.delete(`notes/choose?id=${choice.id}`)
    removePropertyFromState(choice.id, "choose_id")
    isSelected(choice.id) && deleteSelectedChoiceFromState()
    //deleteSelectedChoiceFromState()

    
  }
  const deleteSelectedChoiceFromState = () => {
    setSelectedChoices({})
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
    deleteChoice
  }

}

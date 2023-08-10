import { useEffect, useState, useRef, useContext } from 'react';
import {NoteContext, PropertyContext} from 'components/layout'
import {RefreshContext} from 'components/layout'
import axios from 'axios'

export const useHandleNote = () => {
  const {note, setNote} = useContext(NoteContext)
  const {properties, setProperties} = useContext(PropertyContext)
  

  const onReload = useContext(RefreshContext)
  const urlBase='notes/change'
  const refreshNote = async () => {
    const response = await axios.get(`/notes/properties_of_note/?note_id=${note.id}`)
    setProperties(response.data)
  }

  const changeNote = (data, url) => axios.post(`${urlBase}/${url}`, data).then(() => {refreshNote() })

  const onChangeNote = async (event, property, expression) => {
    event.preventDefault()
    switch(expression) {
      case 'property_title':
        changeNote(property, 'property/title')
        break
      case 'property_data':
        changeNote({...property, note_id: note.id}, 'property/data')

        //changeDataInState({...property, note_id: note.id})
        break
      case 'title':
        changeNote({...property, id: note.id}, 'title')
        break
      case 'type':
        await changeNote(property, 'property/type')
        break
      case 'choice':
        changeNote(property, 'property/type/choose')
        break
  }
  }

  const onDeleteProperty = async (event, propertyId, onClickOutside) => {
    event.preventDefault()
    await axios.delete(`notes/property?id=${propertyId}`)
    refreshNote()
    onClickOutside()
  }
  const getPropertyNoteById = (propertyNoteId) => {
    console.log(properties)
    
  }

  const addProperty = async (event, boardId=1) => {
    event.preventDefault()
    const property = await axios.post('notes/property', {type_id: 1, board_id: boardId}).then((response) => response.data)
    refreshNote()
  }



  const addNoteInContext = noteItem => setNote(noteItem)
  const addPropertiesInContext = properties => setProperties(properties)

  return {
    note,
    properties,
    onChangeNote,
    addNoteInContext,
    addPropertiesInContext,
    onDeleteProperty,
    addProperty,
    getPropertyNoteById
  }


}

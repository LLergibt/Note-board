import { useEffect, useState, useRef, useContext } from 'react';
import {NoteContext, PropertyContext} from 'components/layout'
import {RefreshContext} from 'components/layout'
import axios from 'axios'

export const useHandleNote = () => {
  const {note, setNote} = useContext(NoteContext)
  const {properties, setProperties} = useContext(PropertyContext)

  const onReload = useContext(RefreshContext)
  const urlBase='notes/change'

  const changeNote = (data, url) => axios.post(`${urlBase}/${url}`, data)

  const onChangeNote = (event, property, expression) => {
    event.preventDefault()
    switch(expression) {
      case 'property_title':
        console.log(property)
        changeNote(property, 'property/title')
        break
      case 'property_data':
        changeNote({...property, note_id: note.id}, 'property/data')
        break
      case 'title':
        changeNote({...property, id: note.id}, 'title')
        break
    }
  }
  const onDeleteProperty = (event, propertyId) => {
    event.preventDefault()
    axios.delete(`notes/property?id=${propertyId}`)
  }

  const addProperty = (event, boardId=1) => {
    event.preventDefault()
    axios.post('notes/property', {type_id: 1, board_id: boardId} )
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
    addProperty
  }


}

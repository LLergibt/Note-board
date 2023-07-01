import { useEffect, useState, useRef, useContext } from 'react';
import {NoteContext, PropertyContext} from 'components/layout'
import {RefreshContext} from 'components/layout'
import {useUpdateItem} from 'hooks/useUpdateItemInListState'
import axios from 'axios'

export const useHandleNote = () => {
  const {note, setNote} = useContext(NoteContext)
  const {properties, setProperties} = useContext(PropertyContext)
  const {addPropertyInState, changeDataInState, changePropertyTitleInState, removePropertyFromState, changeTypeProperty} = useUpdateItem(properties, setProperties)
  

  const onReload = useContext(RefreshContext)
  const urlBase='notes/change'

  const changeNote = (data, url) => axios.post(`${urlBase}/${url}`, data)

  const onChangeNote = async (event, property, expression) => {
    event.preventDefault()
    switch(expression) {
      case 'property_title':
        changeNote(property, 'property/title')
        changePropertyTitleInState(property)
        break
      case 'property_data':
        changeNote({...property, note_id: note.id}, 'property/data')
        changeDataInState({...property, note_id: note.id})
        break
      case 'title':
        changeNote({...property, id: note.id}, 'title')
        break
      case 'type':
        changeNote(property, 'property/type')
        changeTypeProperty(property.id, {id: property.type_id, title: property.type_title, category: property.type_category})
        break
      case 'choice':
        changeNote(property, 'property/type/choose')
        break
    }
  }
  const onDeleteProperty = (event, propertyId, onClickOutside) => {
    event.preventDefault()
    axios.delete(`notes/property?id=${propertyId}`)
    removePropertyFromState(propertyId)
    onClickOutside()
  }

  const addProperty = async (event, boardId=1) => {
    event.preventDefault()
    const property = await axios.post('notes/property', {type_id: 1, board_id: boardId}).then((response) => response.data)
    const propertyNote = await axios.get(`notes/property-note/?note_id=${note.id}&property_id=${property.id}`).then((response) => response.data[0])

    addPropertyInState({...propertyNote, title: property.title})
    

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

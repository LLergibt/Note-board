import React, {useContext, useState, createContext} from 'react'
import axios from 'axios'
import {RefreshContext} from 'components/layout'

const NoteContext = createContext()

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState()
  const [properties, setProperties] = useState()

  const onCreateNote = async() => {
      const noteQuery = await axios.post('notes/', {
        board_id: 1
      })
      const note = noteQuery.data
      const propertiesQuery = await axios.get(`notes/properties_of_note/?note_id=${note.id}`)
      const properties = propertiesQuery.data

      setNote(note)
      setProperties(properties)
  }

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
  const value = {
    onCreateNote, 
    addNoteInContext,
    note,
    properties,
    onChangeNote,
    addNoteInContext,
    addPropertiesInContext,
    onDeleteProperty,
    addProperty,
    getPropertyNoteById,
    refreshNote
  }



  return (
    <NoteContext.Provider value={value}>
    {children}
    </NoteContext.Provider>
  )
}

export default NoteProvider
export const useNote = () => useContext(NoteContext)

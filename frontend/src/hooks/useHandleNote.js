import { useEffect, useState, useRef, useContext } from 'react';
import {NoteContext} from 'components/layout'
import {RefreshContext} from 'components/layout'
import axios from 'axios'

export const useHandleNote = () => {
  const {note, setNote} = useContext(NoteContext)
  const onReload = useContext(RefreshContext)

  const changePropertyTitle = (data) => axios.post('notes/change/property/title', data)
  const changePropertyData = (data) => axios.post('notes/change/property/data', {...data, note_id: note.id})
  const changeTitle = (data) => axios.post('notes/change/title', {...data, id: note.id})

  const onChangeNote = (event, property, expression) => {
    event.preventDefault()
    switch(expression) {
      case 'property_title':
        changePropertyTitle(property)
        break
      case 'property_data':
        changePropertyData(property)
        break
      case 'title':
         changeTitle(property)

    }
  }
  const addNoteInContext = noteItem => setNote(noteItem)

  return {
    note,
    onChangeNote,
    addNoteInContext
  }


}

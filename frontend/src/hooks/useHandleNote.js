import { useEffect, useState, useRef, useContext } from 'react';
import {NoteContext} from 'components/layout'
import {RefreshContext} from 'components/noteItems'
import axios from 'axios'

export const useHandleNote = () => {
  const {note, setNote} = useContext(NoteContext)
  const onReload = useContext(RefreshContext)

  const changePropertyTitle = (data) => axios.post('notes/property/change/title', data).then(() => onReload())
  const changePropertyData = (data) => axios.post('notes/property/change/data', {...data, note_id: note.id}).then(() => onReload())

  const onChangeNote = (event, property, expression) => {
    event.preventDefault()
    switch(expression) {
      case 'property_title':
        changePropertyTitle(property)
        break
      case 'property_data':
        changePropertyData(property)
        break
      default:
        console.log('')

    }
  }
  const addNoteInContext = noteItem => setNote(noteItem)

  return {
    note,
    onChangeNote,
    addNoteInContext
  }


}

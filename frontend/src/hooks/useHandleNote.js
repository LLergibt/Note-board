import { useEffect, useState, useRef, useContext } from 'react';
import {NoteContext} from 'components/layout'

export const useHandleNote = () => {
  const {note, setNote} = useContext(NoteContext)

  const changeNote = (items) => {

  }
  const onSubmit = (event, property) => {
   event.preventDefault()
   console.log(property.ref.current.value)
   console.log(property.name)
  }
  const addNoteInContext = noteItem => setNote(noteItem)

  return {
    note,
    onSubmit,
    changeNote,
    addNoteInContext
  }


}

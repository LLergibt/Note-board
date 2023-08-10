import React from 'react'
import {useRef, useEffect} from 'react'
import {useNote} from 'contexts/NoteProvider'

const TextType = ({ property }) => {
  const data = useRef()
  const { onChangeNote } = useNote()

  return (
    <form onSubmit={(event) => {onChangeNote(event, {id: property.id, data: data.current.value}, 'property_data')}}>
       <input  ref={data} defaultValue={property.data} placeholder="пустой">
       </input>
   </form>
  )

}
export default TextType

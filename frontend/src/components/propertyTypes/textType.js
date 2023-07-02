import React from 'react'
import {useRef} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'

const TextType = ({ property }) => {
  const data = useRef()
  const { onChangeNote } = useHandleNote()

  return (
    <form onSubmit={(event) => {onChangeNote(event, {id: property.id, data: data.current.value}, 'property_data')}}>
       <input  ref={data} defaultValue={property.data} placeholder="пустой">
       </input>
   </form>
  )

}
export default TextType

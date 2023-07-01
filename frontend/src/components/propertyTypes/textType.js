import React from 'react'
import {useRef} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'

const TextType = (property) => {
  const data = useRef()

  return (
             <input ref={data} defaultValue={property.data} placeholder="пустой">
           </input>
  )

}
export default TextType

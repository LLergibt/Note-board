import React from 'react';
import 'css/popup-note.css';
import {useRef} from 'react'
import PropertyItem from 'components/propertyItem'

const onSubmit = (event, property) => {
 event.preventDefault()
 console.log(property.ref.current.value)
 console.log(property.name)
}
const PopupProperty = ({property}) => {
       const title = useRef('')
       const data = useRef('')
       console.log(property)

        return (
          <div className="property">
            <form onSubmit={event => onSubmit(event, {name: 'property_title', ref: title})}>
            <input ref={title} defaultValue={property.property_title} className="note-property" >
            </input>
          </form>
            <form onSubmit={event => onSubmit(event, {name: 'property_data', ref: data})}>
          <input ref={data} defaultValue={property.property_data} className="note-property" placeholder="пустой">
          </input>
          </form>
        </div>
        )
}
export default PopupProperty

import React from 'react';
import 'css/popup-note.css';
import {useRef} from 'react'
import PropertyItem from 'components/propertyItem'

const PopupProperty = ({property, onSubmit}) => {
       const title = useRef('')
       const data = useRef('')

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

import React from 'react';
import 'css/popup-note.css';
import {useRef} from 'react'
import PropertyItem from 'components/propertyItem'
import {useHandleNote} from 'hooks/useHandleNote'

const PopupProperty = ({property}) => {
       const title = useRef('')
       const data = useRef('')
       const {onChangeNote} = useHandleNote()

        return (
          <div className="property">
            <form onSubmit={event => onChangeNote(event, {id: property.property_id, title: title.current.value}, 'property_title')}>
            <input ref={title} defaultValue={property.property_title} className="note-property" >
            </input>
          </form>
            <form onSubmit={event => onChangeNote(event, {property_id: property.property_id, data: data.current.value}, 'property_data')}>
          <input ref={data} defaultValue={property.property_data} className="note-property" placeholder="пустой">
          </input>
          </form>
        </div>
        )
}
export default PopupProperty

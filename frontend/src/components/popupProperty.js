import React from 'react';
import 'css/popup-note.css';
import {useRef, useState} from 'react'
import PropertyItem from 'components/propertyItem'
import TitleChange from 'components/popup/titleChange'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'

const PopupProperty = ({property}) => {
       const data = useRef('')
       const {onChangeNote} = useHandleNote()
       const {showPopup, hidePopup, isPopup} = usePopup()
       return (

          <div className="property">
            {isPopup ? 
                <TitleChange property={property} onClickOutside={() => hidePopup()}/>
                : 
                <button className="note-property" onClick={() => showPopup()} > {property.title} </button>}
            <form onSubmit={event => onChangeNote(event, {id: property.id, data: data.current.value}, 'property_data')}>
          <input ref={data} defaultValue={property.data} className="note-property" placeholder="пустой">
          </input>
          </form>
        </div>
        )
}
export default PopupProperty

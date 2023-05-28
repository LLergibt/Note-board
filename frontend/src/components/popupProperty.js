import React from 'react';
import 'css/popup-note.css';
import {useRef, useState} from 'react'
import PropertyItem from 'components/propertyItem'
import TitleChange from 'components/popup/titleChange'
import {useHandleNote} from 'hooks/useHandleNote'

const PopupProperty = ({property}) => {
       const data = useRef('')
       const {onChangeNote} = useHandleNote()
       const [titleChangePopup, setTitleChangePopup] = useState(false)
       return (

          <div className="property">
            {titleChangePopup ? 
                <TitleChange property={property} onClickOutside={() => setTitleChangePopup(false)}/>
                : 
                <button className="note-property" onClick={() => setTitleChangePopup(true)} > {property.title} </button>}
            <form onSubmit={event => onChangeNote(event, {property_id: property.id, data: data.current.value}, 'property_data')}>
          <input ref={data} defaultValue={property.data} className="note-property" placeholder="пустой">
          </input>
          </form>
        </div>
        )
}
export default PopupProperty

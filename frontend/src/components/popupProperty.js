import React from 'react';
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

          <div className="flex justify-between">
            <div className="">
              <button className="" onClick={() => showPopup()}>  {property.title} </button>
            {isPopup ? <TitleChange className="" property={property} onClickOutside={() => hidePopup()}/>: ''}
            </div>
            <form onSubmit={event => onChangeNote(event, {id: property.id, data: data.current.value}, 'property_data')}>
              <input className={isPopup? "invisible": ""} ref={data} defaultValue={property.data} placeholder="пустой">
            </input>
          </form>
        </div>
        )
}
export default PopupProperty

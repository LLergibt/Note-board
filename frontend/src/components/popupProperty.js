import React from 'react';
import {useRef, useEffect, useState} from 'react'
import PropertyItem from 'components/propertyItem'
import TitleChange from 'components/popup/titleChange'
import {useNote} from 'contexts/NoteProvider'
import {usePopup} from 'hooks/usePopup'

const PopupProperty = ({property}) => {
       const data = useRef('')
       const {onChangeNote} = useNote()
       const {showPopup, hidePopup, isPopup} = usePopup()
       return (

         <div className="flex justify-between">
            <div className="">
              <button className="" onClick={() => showPopup()}>  {property.title} </button>
            {isPopup ? <TitleChange className="" property={property} onClickOutside={() => hidePopup()}/>: ''}
            </div>
            <PropertyItem property={property}/>
        </div>
        )
}
export default PopupProperty

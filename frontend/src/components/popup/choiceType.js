import React, {useRef, useEffect, useState} from 'react'
import {useContext} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
import {usePopup} from 'hooks/usePopup'
import SelectChoiceType from 'components/propertyTypes/selectChoiceType'
import {PropertyNoteContext} from 'components/propertyTypes/chooseType'
import axios from 'axios'

const ChoiceTypePopup = ({onClickOutside}) => {
  const {onChangeNote} = useHandleNote()
  const [option, setOption] = useState('')
  const property = useContext(PropertyNoteContext)
  const inputReference = useRef(null);
  const ref = useRef('')
  const {changePopupByCall, showPopup, isPopup} = usePopup()

  const handleChange = (event) => {
    const value = event.target.value;
    setOption(value);
  }

  useEffect(() => {
    showPopup()
  }, [])
  useEffect(() => {
    if (option === '') {
      inputReference.current.focus()
    }
  })

  useClickOutside(onClickOutside, ref)
  return (
    <div ref={ref} className="">
    <form onSubmit={(event) => onChangeNote(event, {title: option, property_id: property.property_id, property_note_id: property.id}, 'choice')}>
    <input ref={inputReference} autoFocus onChange={handleChange} className={option? '': ""}>
    </input>
    </form>
    <button className={option ? "z-10 relative bottom-6 opacity-0" : "z-10 relative opacity-25 bottom-6"} onClick={changePopupByCall}>
       Пустой
    </button>


  {isPopup && <SelectChoiceType newOption={option}/>}
    </div>
  )

}
export default ChoiceTypePopup

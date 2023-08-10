import React, {useRef, useEffect, useState, useContext} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import {usePopup} from 'hooks/usePopup'
import SelectChoiceType from 'components/popup/selectChoiceType'
import {SelectedChoicesContext} from 'components/propertyTypes/chooseType'
import axios from 'axios'
import {useProperty} from 'contexts/PropertyProvider'
import {useChoice} from 'contexts/ChoiceProvider'

const ChoiceTypePopup = ({onClickOutside}) => {
  const [option, setOption] = useState('')
  const {selectedChoices, onCreateChoice} = useChoice()
  const property = useProperty()
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
      <div ref={ref} className="p-0 pl-6  py-1 m-0">
      <form onSubmit={(event) => onCreateChoice(event, {title: option, property_id: property.property_id, property_note_id: property.id}, 'choice')}>
        <input ref={inputReference} autoFocus placeholder={selectedChoices?.title} onChange={handleChange} className={option? '': ""} onClick={changePopupByCall}>
      </input>
      </form>


  {isPopup && <SelectChoiceType newOption={option}/>}
    </div>
  )

}
export default ChoiceTypePopup

import React, {useRef, useEffect, useState, useContext} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleChoices} from 'hooks/useHandleChoices'
import {usePopup} from 'hooks/usePopup'
import SelectChoiceType from 'components/popup/selectChoiceType'
import {SelectedChoicesContext} from 'components/propertyTypes/chooseType'
import axios from 'axios'

const ChoiceTypePopup = ({onClickOutside, property}) => {
  const [option, setOption] = useState('')
  const {selectedChoices, onCreateChoice} = useHandleChoices()
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
    console.log(selectedChoices)
    if (option === '') {
      inputReference.current.focus()
    }
  })

  useClickOutside(onClickOutside, ref)
  return (
      <div ref={ref} className="p-0 pl-6  m-0">
      <form onSubmit={(event) => onCreateChoice(event, {title: option, property_id: property.property_id, property_note_id: property.id}, 'choice')}>
      <input ref={inputReference} autoFocus onChange={handleChange} className={option? '': ""}>
      </input>
      </form>
      <button className={option ? "z-10 absolute bottom-6 m-0 p-0 opacity-0 top-20 my-1" : "absolute opacity-25 top-20 my-1"} onClick={changePopupByCall}>
        {selectedChoices? selectedChoices.title: "Пустой"}
      </button>


  {isPopup && <SelectChoiceType newOption={option}/>}
    </div>
  )

}
export default ChoiceTypePopup

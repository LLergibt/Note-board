import React, {useRef, useEffect} from 'react'
import {usePopup} from 'hooks/usePopup'
import ChoiceItem from 'components/choiceItem'
import {useChoice} from 'contexts/ChoiceProvider'

const SelectChoiceType = ({newOption}) => {
  const {choices, selectChoice} = useChoice()
  const check =  !newOption ? choices.length === 0 && true: false

  return (
    <div className="absolute z-100 my-5">
    <div className="shadow-2xl w-64 h-3/4  bg-white border rounded-sm  font-extralight text-base ">
      <ul className="flex flex-col">
        {choices.length > 0 &&  choices.map((choice, idx) => (
          <ChoiceItem key={idx} choice={choice}/>
        )



        )}
      </ul>

      <p className="text-center py-3 pl-1 text-gray-400 ">
        { check ? 'Нет вариантов. Начните печатать, чтобы добавить новый': newOption}
      </p>
    </div>
    </div>

  )

}
export default SelectChoiceType

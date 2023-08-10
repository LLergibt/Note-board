import React from 'react'
import {useRef, useState} from 'react'
import {useHandleNote} from 'hooks/useHandleNote'
import {useClickOutside} from 'hooks/useClickOutside'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


const DatePopup = ({ property, onClickOutside }) => {
  const ref = useRef()
  const {onChangeNote} = useHandleNote()
  useClickOutside(onClickOutside, ref)
  const [date, setDate] = useState(property.data ? new Date(property.data) : new Date());
  const handleDate = (newDate) => {
      setDate(new Date(newDate))
      onChangeNote({preventDefault: () => {}}, {id: property.id, data: newDate.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"})}, 'property_data')
  }

  return (
    <>
    <div className="absolute h-32 right-5" ref={ref}>
      <Calendar onChange={handleDate} value={date} />
    </div>
  </>
  )

}

export default DatePopup


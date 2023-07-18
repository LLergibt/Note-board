import React from 'react'
import {useState} from 'react'
import {usePopup} from 'hooks/usePopup'
import DatePopup from 'components/popup/date'


const DateType = ({ property }) => {
  const {changePopupByCall, showPopup, hidePopup, isPopup} = usePopup()
  const [date, setDate] = useState(new Date(property.data) ?? new Date());
  return (
    <>

    <div className="w-64">
    <button className="pl-6 text-start" onClick={showPopup}>
      {property.data? property.data: 'пустой'}
    </button>
  </div>

    {isPopup && <DatePopup onClickOutside={hidePopup} property={property}/>}
    </>
  )
}
export default DateType

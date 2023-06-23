import React from 'react';
import PopupProperty from 'components/popupProperty'
import {useRef, useContext, useEffect, useState } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
import axios from 'axios'

const Types = ({onClickOutside}) => {
  const ref = useRef(null);
  const [types, setTypes] = useState()
  console.log(types)

  useClickOutside(onClickOutside, ref)

  useEffect(() => {
    axios('board/types').then(response => setTypes(response.data))
  }, [])
  return (
    <ul ref={ref}>
      {types && types.map((type) => <button>{type.title}</button>)}
    </ul>


  )
}
export default Types

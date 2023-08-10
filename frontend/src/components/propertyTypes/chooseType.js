import React from 'react'
import {useRef, createContext, useEffect, useContext, useState} from 'react'
import {usePopup} from 'hooks/usePopup'
import SelectedChoice from 'components/popup/selectedChoice'
import axios from 'axios'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {useRefresh} from 'contexts/RefreshProvider'
import {useProperty} from 'contexts/PropertyProvider'
import ChoiceProvider from 'contexts/ChoiceProvider'


const ChooseType = () => {
  const {reloadDataAfterPostReq} = useRefresh()
  const property = useProperty()

  const {showPopup, hidePopup, isPopup} = usePopup()
  return (
    <>
    <ChoiceProvider>
      <SelectedChoice />
    </ChoiceProvider>
  </>


  )
}
export default ChooseType

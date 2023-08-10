import React, {useContext, useState, createContext} from 'react'
import axios from 'axios'
import {RefreshContext} from 'components/layout'

const PropertyContext = createContext()

const PropertyProvider = ({ children, value }) => {
  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  )
}
export const useProperty = () => useContext(PropertyContext)
export default PropertyProvider

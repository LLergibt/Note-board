import React from 'react';
import {useHandleType} from 'hooks/useHandleTypeOfProperty'
import TextType from 'components/propertyTypes/textType'
import ChooseType from 'components/propertyTypes/chooseType'
import DateType from 'components/propertyTypes/dateType'
import PropertyProvider from 'contexts/PropertyProvider'

const PropertyItem = ({property}) => {
  const Component = () => {switch(property.types_category) {
      case "text": 
          return <TextType property={property}/>
      case "choice": 
          return <ChooseType/>
      case "date": 
          return <DateType property={property}/>
    }}

  return (
    <>
    <PropertyProvider value={property}>
      {Component()}
    </PropertyProvider>
    </>
  )
}
export default PropertyItem

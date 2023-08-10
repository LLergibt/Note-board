import React from 'react';
import {useHandleType} from 'hooks/useHandleTypeOfProperty'
import TextType from 'components/propertyTypes/textType'
import ChooseType from 'components/propertyTypes/chooseType'
import DateType from 'components/propertyTypes/dateType'

const PropertyItem = ({property}) => {
  switch(property.types_category) {
      case "text": 
          return <TextType property={property}/>
      case "choice": 
          return <ChooseType property={property}/>
      case "date": 
          return <DateType property={property}/>
    }
}
export default PropertyItem

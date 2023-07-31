import React from 'react';
import {useHandleType} from 'hooks/useHandleTypeOfProperty'
import TextType from 'components/propertyTypes/textType'
import ChooseType from 'components/propertyTypes/chooseType'
import DateType from 'components/propertyTypes/dateType'

const PropertyItem = ({property}) => {
  //const { Component } = useHandleType(property.types_category, property)
  const componentController = {
    text: () => <TextType property={property}/>,
    choice: () => <ChooseType property={property}/>,
    date: () => <DateType property={property}/>,
  }
  const Component = componentController[property.types_category]

  //<form onSubmit={event => onChangeNote(event, {id: property.id, data: data.current.value}, 'property_data')}>
  //
  //           <input className={isPopup? "invisible": ""} ref={data} defaultValue={property.data} placeholder="пустой">
  //         </input>
  //       </form>
  return (
    <>
    {Component()}
    </>
    
  )
}
export default PropertyItem

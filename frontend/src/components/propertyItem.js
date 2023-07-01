import React from 'react';
import {useHandleType} from 'hooks/useHandleTypeOfProperty'
import TextType from 'components/propertyTypes/textType'
import ChooseType from 'components/propertyTypes/chooseType'

const PropertyItem = ({property}) => {
  //const { Component } = useHandleType(property.types_category, property)
  const componentController = {
    text: () => <TextType property={property}/>,
    choice: () => <ChooseType property={property}/>,
    func: () => <TextType property={property}/>,
  }
  const Component = componentController[property.types_category]
  console.log(property)

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

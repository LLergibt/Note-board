import React from 'react';
import 'css/itemNote.css'

const PropertyItem = ({property}) => {
  return (
    <>
      <p className="status">
        {property.property_data}
      </p>
    </>
    
  )
}
export default PropertyItem

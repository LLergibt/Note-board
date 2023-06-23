import React from 'react';
import 'css/itemNote.css'

const PropertyItem = ({property}) => {
  return (
    <>
      <p className="status">
        {property.data}
      </p>
    </>
    
  )
}
export default PropertyItem

import React from 'react';

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

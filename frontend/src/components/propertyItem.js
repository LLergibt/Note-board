import React from 'react';

const PropertyItem = ({property}) => {
  return (
    <>
      <p className="ml-4">
        {property.data}
      </p>
    </>
    
  )
}
export default PropertyItem

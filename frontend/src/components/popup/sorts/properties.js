import {useRef, useState, useEffect} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'
import SortPropertyItem from 'components/sortPropertyItem'
import axios from 'axios'
const Properties = ({onClickOutside}) => {
  const ref = useRef()
  const [properties, setProperties] = useState()
  useClickOutside(onClickOutside, ref)
  useEffect(() => {
    axios.get('/board/properties/?board_id=1').then(response => setProperties(response.data))
  }, [])

  return (
    <>
    <div ref={ref} className="absolute z-100 my-8">
    <div className="shadow-2xl w-64 h-3/4 text-black  bg-white border rounded-sm  font-extralight text-base ">
      {properties && properties.map((property) => (
        <SortPropertyItem property={property}/>
      ))}
    </div>
    </div>

    </>
  )
}
export default Properties

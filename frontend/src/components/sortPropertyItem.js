const SortPropertyItem = ({property}) => {
  return (
  <div className="flex">
    <input type="checkbox" className="mx-3"/>
    <p>
      {property.title}
    </p>
  </div>
  )

}
export default SortPropertyItem

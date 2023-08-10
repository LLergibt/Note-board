import Toggle from 'components/toggle'
import {useSorting} from 'hooks/useSorting'
const SortPropertyItem = ({property}) => {
  const {onToggleProperty} = useSorting()
  const onToggle = (isToggled) => {
    onToggleProperty({is_toggled: isToggled, id: property.id})
  }

  return (
  <div className="flex justify-between my-3">
  <p className="pl-2">
      {property.title}
    </p>
    <Toggle isToggled={property.is_toggled} onToggle={onToggle}/>
  </div>
  )

}
export default SortPropertyItem

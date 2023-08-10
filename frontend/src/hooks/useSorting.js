import axios from 'axios'
import {RefreshContext} from 'components/layout'
import {useRefresh} from 'contexts/RefreshProvider'
export const useSorting = () => {
  const {onReload} = useRefresh()
  const onToggleProperty = async (data) => {
    await axios.post('notes/change/property/toggle', data)
    onReload()
  }
  return {
    onToggleProperty
  }


}

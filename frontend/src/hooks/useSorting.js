import axios from 'axios'
import {RefreshContext} from 'components/layout'
import {useContext} from 'react'
export const useSorting = () => {
  const onReload = useContext(RefreshContext)
  const onToggleProperty = async (data) => {
    await axios.post('notes/change/property/toggle', data)
    onReload()
  }
  return {
    onToggleProperty
  }


}

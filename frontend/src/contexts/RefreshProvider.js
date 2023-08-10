import {createContext, useContext, useState} from 'react'
export const RefreshContext = createContext()
const RefreshProvider = ({children}) => {
  const [reloadDataAfterPostReq, set] = useState(false)
  const onReload = () => set(!reloadDataAfterPostReq)
  return (
    <RefreshContext.Provider value={{reloadDataAfterPostReq, onReload}}>
      {children}
    </RefreshContext.Provider>
  )
}
export default RefreshProvider
export const useRefresh = () => useContext(RefreshContext)

import React, {useState, useEffect} from 'react'
export const usePopup = (intermediateFunction = () => null) => {
  const [isPopup, setPopup] = useState(false)

  const showPopup = () => setPopup(true)
  const hidePopup = () => setPopup(false)

  useEffect(() => {
    if (isPopup) {
      intermediateFunction()
    }
  }, [isPopup])


  return {
    isPopup,
    showPopup,
    hidePopup
  }
}

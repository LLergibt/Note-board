import {usePopup} from 'hooks/usePopup'
const ButtonPopupTemplate = ({textButton, Popup}) => {
  const {showPopup, hidePopup, isPopup} = usePopup()
  console.log(isPopup)
  return (
    <>
    <button className="w-auto px-2 h-7 text-gray-500 hover:bg-gray-200" onClick={showPopup}>
      {textButton}
    </button>
    {isPopup && <Popup onClickOutside={hidePopup}/>}
  
    </>
  )

}
export default ButtonPopupTemplate

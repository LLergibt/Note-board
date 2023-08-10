import ChoiceTypePopup from 'components/popup/choiceType'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {usePopup} from 'hooks/usePopup'
import {useChoice} from 'contexts/ChoiceProvider'
import {useProperty} from 'contexts/PropertyProvider'

const SelectedChoice = () => {
  const {choices, setChoices, deleteSelectedChoice, selectedChoices, setSelectedChoices } = useChoice()
  const property = useProperty()


  const {showPopup, hidePopup, isPopup} = usePopup()
  return (
    <>
    <div className="w-64 ">
      {isPopup ?  <ChoiceTypePopup  onClickOutside={hidePopup}/>: 
      <div className="ml-3 hover:bg-gray-200 h-8 flex-nowrap flex rounded  text-center ">

        {selectedChoices? 
          <button className="bg-white max-w-full	 h-6 my-1  ml-1 rounded" onClick={showPopup}>
            {selectedChoices.title}
            <span className="relative top-1" onClick={deleteSelectedChoice}>
             <MaterialIcon className="" icon="close" size='18' color='gray'/>
             </span>
             </button>
             : 
          <button className="w-16 h-6 my-1  ml-1 rounded" onClick={showPopup}>
            пустой
          </button>}
    </div>
          }
  </div>
  </>


  )
}
export default SelectedChoice

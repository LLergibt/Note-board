import {useChoice} from 'contexts/ChoiceProvider'

const ChoiceItem = ({choice}) => {
    const {choices, selectChoice, deleteChoice} = useChoice()
    return (
      <div className="hover:bg-gray-200 ">
          <button className="text-start pl-4" onClick={() => {selectChoice(choice)}}>
            {choice.title}
          </button>
          <button className="hover:bg-gray-400 ml-4" onClick={() => deleteChoice(choice)}>
            удалить
          </button>
      </div>
  )
}
export default ChoiceItem

import {useHandleChoices} from 'hooks/useHandleChoices'

const ChoiceItem = ({choice}) => {
    const {choices, selectChoice, deleteChoice} = useHandleChoices()
    return (
      <div>
          <button className="text-start pl-4 hover:bg-violet-400 hover:text-white" onClick={() => {selectChoice(choice)}}>
            {choice.title}
          </button>
          <button className="hover:bg-violet-400 ml-4" onClick={() => deleteChoice(choice)}>
            удалить
          </button>
      </div>
  )
}
export default ChoiceItem

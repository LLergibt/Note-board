import React from 'react'
import ButtonPopupTemplate from 'components/buttonPopupTemplate'
import Properties from 'components/popup/sorts/properties'

const Header = ({onClickNoteButton}) => {
  return (
      <div className="flex flex-col mx-10 my-5 ">
        <div className="flex justify-between mb-6">
        <h1 className="font-bold text-xl">
          Askarate.moscow
        </h1>

        <button className="p-1 text-white bg-violet-500 w-32 rounded text-center">
          Поделиться
        </button>
        </div>


        <div className="place-self-end w-3/5 flex justify-between p-1 text-white   rounded text-center">
          <ButtonPopupTemplate textButton={'Свойства'} Popup={Properties}/>
          <button className="w-auto h-7 px-2 text-gray-500 hover:bg-gray-200" onClick={onClickNoteButton}>
            Сгруппировать по: 
            <span className="pl-2 text-black">
              Статус
            </span>
        </button>

          <button className="w-auto h-7 px-2 text-gray-500 hover:bg-gray-200" onClick={onClickNoteButton}>
            Фильтр
        </button>

          <button className="w-auto h-7 px-2 text-gray-500 hover:bg-gray-200" onClick={onClickNoteButton}>
            Сортировать
        </button>

          <button className="w-auto h-7  px-3 rounded bg-violet-500" onClick={onClickNoteButton}>
          Создать
        </button>
        </div>

    </div>
  )
}
export default Header

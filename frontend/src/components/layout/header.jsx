import React from 'react'

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

        <div className="place-self-end p-1 text-white bg-violet-500 w-20 rounded text-center">
          <button className="" onClick={onClickNoteButton}>
          Создать
        </button>
        </div>

    </div>
  )
}
export default Header

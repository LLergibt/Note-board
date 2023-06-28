import React from 'react';
import PopupProperty from 'components/popupProperty'
import {useRef, useContext } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import {useHandleNote} from 'hooks/useHandleNote'
const Note = ({onClickOutside}) => {
  const ref = useRef(null);
  const title = useRef('')
  useClickOutside(onClickOutside, ref)
  const {note, properties, onChangeNote, addProperty} = useHandleNote()
  console.log(properties)
  //<div className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
  //   <div ref={ref} className="relative w-full max-w-2xl max-h-full">
  //     </input>
  //     </form>
  //   <div className="main-modal">
  //     {properties.map((property, idx) => 
  //       <PopupProperty key={idx} property={property}/>
  //     )}
  //       <button className="note-property" onClick={(event) => addProperty(event)}>
  //       Добавить свойство
  //     </button>
  //   <div className="comment">
  //     <p>
  //     Добавить коментарий
  //     </p>
  //   </div>
  //   </div>
  // </div>
  // </div>

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4  overflow-y-auto  bg-opacity-75 bg-gray-500 md:inset-0 h-screen max-h-full">
    <div ref={ref} className="relative w-full  max-w-2xl my-56 mx-auto ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
               <form onSubmit={(event) => onChangeNote(event, {title: title.current.value}, 'title')}>
                  <input ref={title} defaultValue={note.title} className="text-xl font-semibold text-gray-900 dark:text-white">
                  </input>
               </form>

              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                </button>
            </div>
              <div className="p-6 space-y-6">
                {properties.map((property, idx) => 
                 <PopupProperty key={idx} property={property}/>
                )}
               <div className="comment">
                 <p>
                 Добавить коментарий
                 </p>
               </div>
               </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
         <button className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(event) => addProperty(event)}>
         Добавить свойство
       </button>

            </div>
        </div>
    </div>
</div>
  )

}
export default Note

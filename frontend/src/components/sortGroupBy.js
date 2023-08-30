import React, {useState, useEffect, useContext} from 'react';
import NoteItem from 'components/noteItem'
import {useRefresh} from 'contexts/RefreshProvider'
import {useSorting} from 'hooks/useSorting'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios'

const SortGroupBy = ({properties, sortChoice}) => {
  //<div className="flex flex-wrap  scroll-auto w-full">
  // {notes && notes.map((note) => 
  //   <NoteItem key={note.id} note={note} properties={properties}/>)}
  // </div>
  const [choice, setChoice] = useState('')
  const {onDeleteSortChoice, changeChoice} = useSorting()
  const onChoiceChange = (event) => {
    event.preventDefault()
    changeChoice({title: choice, id: sortChoice.id})
  }
  
  return (
    <>
    <div className="ml-5 flex-col w-full h-auto">
    <div className="flex">
      {sortChoice.title ? (
    <div className="flex">
    <form onSubmit={onChoiceChange}>
    <input className="w-36 bg-gray-300 pt-1 "  defaultValue={sortChoice.title} onChange={(e) => {setChoice(e.target.value)}}>
      </input>
     </form>
    <button className="relative top-1" onClick={() => onDeleteSortChoice(sortChoice.id)}>
       <MaterialIcon className="" icon="close" size='18' color='gray'/>
     </button>
     </div>
      )
      :
      <p>
        empty
      </p>
      }

   </div>
  <div className="flex flex-col flex-wrap  scroll-auto">
   {sortChoice.notes?.map((note) => 
     <NoteItem key={note.id} note={note} properties={properties} sortChoice={sortChoice}/>)}
   </div>
   </div>
    </>

  )
}
export default SortGroupBy

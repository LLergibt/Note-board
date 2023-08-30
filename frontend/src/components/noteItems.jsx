import React, {useState, useEffect, useContext} from 'react';
import NoteItem from 'components/noteItem'
import SortGroupBy from 'components/sortGroupBy'
import {useRefresh} from 'contexts/RefreshProvider'
import axios from 'axios'

const NoteItems = () => {
  const [sortChoices, setSortChoices] = useState()
  const [properties, setProperties] = useState()
  const {reloadDataAfterPostReq} = useRefresh()
  useEffect(() => {
    axios.get('/notes/?board=1').then(response => setSortChoices(response.data))
    axios.get('/notes/properties/?board_id=1').then(response => setProperties(response.data))

  }, [reloadDataAfterPostReq])
  //<div className="flex flex-wrap  scroll-auto w-full">
  // {notes && notes.map((note) => 
  //   <NoteItem key={note.id} note={note} properties={properties}/>)}
  // </div>
  return (
    <div className="flex flex-row-reverse snap-both h-32 ">
    {sortChoices?.map((sortChoice, idx) => 
      <SortGroupBy key={idx} properties={properties} sortChoice={sortChoice}/>
    )}
    </div>

  )
}
export default NoteItems

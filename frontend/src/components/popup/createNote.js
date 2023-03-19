import { useEffect, useState, useRef, useContext } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import 'css/itemNote.css'
import axios from 'axios'

export function PopupCreateNote({createNotePopup, onClickOutside}) {
  const ref = useRef(null);
  const [properties, setProperties] = useState()
  useEffect(() => {
    axios.get('board/properties/?board_id=1').then(response => setProperties(response.data))
  }, [])

  useClickOutside(onClickOutside, ref)



  //  useEffect(() => {
  //    const handleClickOutside = (event) => {
  //      if (ref.current && !ref.current.contains(event.target)) {
  //        onClickOutside && onClickOutside();
  //      }
  //    };
  //    document.addEventListener('click', handleClickOutside, true);
  //    return () => {
  //      document.removeEventListener('click', handleClickOutside, true);
  //    };
  //  }, [ onClickOutside ]);

  if(!createNotePopup)
    return null;

  return (
    <div  className='popup-container'>
      <div ref={ref} className="popup">
      <h1 className="title">
        untittled
      </h1>
      <div className="main-modal">
        {properties && properties.map((property, idx) => 
          <p key={idx}>
            {property.title}

          <br/>
        </p>
          
        )}
      <div className="comment">
        <p>
        Добавить коментарий
        </p>
      </div>
      </div>
      </div>
    </div> 
  )
}

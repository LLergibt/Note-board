import { useEffect, useState, useRef, useContext } from 'react';
import {useClickOutside} from 'hooks/useClickOutside'
import PopupProperty from 'components/popupProperty'
import 'css/itemNote.css'
import axios from 'axios'

export function PopupCreateNote({createNotePopup, onClickOutside}) {
  const ref = useRef(null);
  const titleRef = useRef('inutidnsg');
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
  console.log(properties)

  return (
    <div  className='popup-container'>
      <div ref={ref} className="popup">
      <input placeholder="untittled" ref={titleRef} className="title">
      </input>
      <div className="main-modal">
        {properties && properties.map((property, idx) => 
          <PopupProperty key={idx} property={property}/>
          
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

import { useEffect, useContext} from 'react';
import {useRefresh} from 'contexts/RefreshProvider'

export const useClickOutside = (onClickOutside, ref, onReload=null) => {
  //const {onReload} = useRefresh()
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onReload && onReload()
        onClickOutside && onClickOutside();

      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);
}

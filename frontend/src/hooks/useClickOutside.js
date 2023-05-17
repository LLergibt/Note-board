import { useEffect, useContext} from 'react';
import {RefreshContext} from 'components/layout'

export const useClickOutside = (onClickOutside, ref) => {
  const onReload = useContext(RefreshContext)
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

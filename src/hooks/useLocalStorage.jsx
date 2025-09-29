import { useEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
   const getInitial = () => {
      try {
         const item = window.localStorage.getItem(key);
         if (item !== null) return JSON.parse(item);
      } catch {}
      return typeof initialValue === 'function' ? initialValue() : initialValue;
   };

   const [storedValue, setStoredValue] = useState(getInitial);

   useEffect(() => {
      try {
         window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch {}
   }, [key, storedValue]);

   const remove = () => {
      try {
         window.localStorage.removeItem(key);
      } catch {}
   };

   return [storedValue, setStoredValue, remove];
}



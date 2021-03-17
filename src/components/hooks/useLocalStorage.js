import { useState } from 'react';

export const useLocalStorage = (key, initValue) => {
  const [value, setStoredValue] = useState(() => {
    // get from local storage by key in parameter
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initValue ;
  });

  const setVal = value => {
  // save state
    setStoredValue(value);
  //this will save to local storage  
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [value, setVal];
}
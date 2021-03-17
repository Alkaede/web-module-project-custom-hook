import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initVal) => {
  // calling local storage
  const [value, setValue] = useLocalStorage('dark mode is on?!?!?!', initVal)
  // return something from dark mode to use in app
  // return state of dark mode?
  // or return the values of localStorage state
  return [value, setValue];
}
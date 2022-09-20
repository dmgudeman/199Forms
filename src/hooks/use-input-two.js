import {useState} from 'react' ;

const useInputTwo = (validateValue) => {

  const [inputValue, setInputValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validateValue(inputValue);
  const hasError = !valueIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);

  }

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  }
  const reset = () => {
    setInputValue('');
    setInputIsTouched(false)
  }

  return {
    value:inputValue,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    inputChangeHandler,
    reset



  }

}

export default useInputTwo;
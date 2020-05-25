import React, {useReducer} from 'react';
import Button from '@material-ui/core/Button';


const useStateReducer = (prevState, newState) =>
  typeof newState === 'function' ? newState(prevState) : newState

const useStateInitializer = initialValue =>
  typeof initialValue === 'function' ? initialValue() : initialValue

function useState(initialValue) {
  return useReducer(useStateReducer, initialValue, useStateInitializer)
}

const CustomState = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <div>
      <div>The current count is {count}</div>
      <Button variant="contained" onClick={increment}>Increment</Button>
    </div>
  )
}

export default CustomState;
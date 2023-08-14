
// import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Button from './components/buttons/Button';
import PlanInfo from './components/plan-info/PlanInfo';
import { setDecreaseAction, setIncreaseAction } from './store/actions/counter.actions';




function App() {
  const dispatch = useDispatch();
  const {currentCount} = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(setIncreaseAction({name: 1, value: 2}));
  }

  const decrement = () => {
    dispatch(setDecreaseAction());
  }
 
  // const [data, setData] = useState();

  // const getUsersRequest = useCallback(async() => {
  //   const getData = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const response = await getData.json();

  //   setData(response);

  // }, [])

  return (
      <div className="App">
      <Button 
       variant='primary'
       style={{marginRight: 10}}
       onClick={increment}>
        Increase
      </Button>
      <Button 
       variant='primary'
       onClick={decrement}>
        Decrease
      </Button>

      <p> Current count : <strong>{currentCount}</strong> </p>
      <div>
        <PlanInfo  />
      </div>
    </div>
  )
}

export default App;

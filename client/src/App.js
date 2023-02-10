import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { fetchshortenedUrl, setUrlValue }  from './app/setter';
import { Button, Card, TextField, Box } from '@mui/material'

function App() {

  const { value, shortenedvalue } = useSelector(state => state.setter)

  const dispatch = useDispatch()
  return (
        <div className="App" style={{top: '50%'}}>
          <TextField id='filled-basic' onChange = { event => dispatch(setUrlValue(event.target.value))}></TextField>
          <Button onClick={() => {dispatch(fetchshortenedUrl(value))}}>clickme</Button>
          <div>Your shortern URL: {shortenedvalue}</div>
        </div>
  );
}

export default App;

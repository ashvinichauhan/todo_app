import './App.css';
import Todo from './Todo';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import db from './firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    });
    return () => unsubscribe();
  }, []);

  const addTodo = async (event) => {
    event.preventDefault(); // Will stop refresh
    if (input.trim()) {
      await addDoc(collection(db, 'todos'), { 
        todo: input, 
        timestamp: serverTimestamp() 
      });
      setInput(''); // Clear input field after adding todo
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel htmlFor="my-input">✅Write a To-do</InputLabel>
          <Input id="my-input" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" variant="contained" color="primary">
          Add To-Do
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

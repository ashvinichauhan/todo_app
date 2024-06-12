import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

function Todo({ text }) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          {/* Add an Avatar component here if needed */}
        </ListItemAvatar>
        <ListItemText primary={text} secondary="Dummy Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;

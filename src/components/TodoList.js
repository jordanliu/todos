import React from 'react';
import {List, Icon} from 'antd';
import '../App.css';

const TodoList = ({todos, deleteTodo}) => {

  return (
    <div className="todo-wrapper">
      <List>
        {todos.map((todo, index) => (
          <List.Item
            key={index.toString()}
            className="list-item"
            actions={[
              <Icon
                type="close-circle"
                theme="filled"
                className="check-circle"
                onClick={ () => {
                deleteTodo(index);
                }
              }
              />
            ]}
          >
            {todo}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default TodoList;

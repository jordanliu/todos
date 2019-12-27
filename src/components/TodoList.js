import React from 'react';
import {List, Icon} from 'antd';
import '../App.css';

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className="todo-wrapper">
      <List>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <List.Item
              key={index.toString()}
              className="list-item"
              actions={[
                <Icon
                  type="check-circle"
                  theme="filled"
                  className="circle check"
                />,
                <Icon
                  type="close-circle"
                  theme="filled"
                  className="circle closed"
                  onClick={() => {
                    deleteTodo(index);
                  }}
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

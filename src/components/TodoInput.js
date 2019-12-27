import React, {useState} from 'react';
import {Input, Button, Icon, message} from 'antd';
import '../App.css';

const TodoInput = ({saveTodo}) => {
  const [input, setInput] = useState('');
  const onChange = event => setInput(event.target.value);

  const onSubmit = event => {
    input.toString() === ''
    ? message.error('Enter a to-do item!')
    : message.success('To-do added!')

    event.preventDefault();
    saveTodo(input);
    setInput('')
  };

  return (
    <div className="field-input">
      <form onSubmit={onSubmit}>
      <Input
        className="global-search"
        maxLength={36}
        size="large"
        style={{width: '100%'}}
        placeholder="Enter a to do list item"
        value={input}
        onChange={onChange}
        suffix={
          <Button
            className="search-btn"
            style={{marginRight: -12}}
            size="large"
            type="primary"
            onClick={onSubmit}
          >
            <Icon type="plus" />
          </Button>
        }
      />
      </form>
    </div>
  );
}

export default TodoInput;

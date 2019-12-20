import React from 'react';
import {Input, Button, Icon} from 'antd';
import '../App.css';

function TodoInput(props) {
  function handleEnter() {
    console.log('test');
  }

  return (
    <div className="field-input">
      <Input
        className="global-search"
        maxLength={50}
        size="large"
        style={{width: '100%'}}
        placeholder="Enter a to do list item"
        onPressEnter={handleEnter}
        suffix={
          <Button
            className="search-btn"
            style={{marginRight: -12}}
            size="large"
            type="primary"
            onClick={handleEnter}
          >
            <Icon type="plus" />
          </Button>
        }
      />
    </div>
  );
}

export default TodoInput;

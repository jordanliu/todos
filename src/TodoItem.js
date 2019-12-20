import React from 'react';
import {List, Icon, Avatar} from 'antd';
import './App.css';

function TodoItem(props) {
  const data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    }
  ];

  return (
    <div>
      <List 
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className="list-item" actions={[<Icon type="close-circle" theme="filled" className="check-circle" />]}>
            {item.title}
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoItem;

import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import {Layout, Typography, Card} from 'antd';

const {Title} = Typography;
const {Header, Content} = Layout;

function App() {

const  [ todos, setTodos ] = useState([]);

  return (
    <div className="App">
      <Layout>
        <Header>
          <Title>todos</Title>
        </Header>
        <Content>

          <Card>
            <TodoInput saveTodo={(todoText) => {
              const trimmedText = todoText.trim();

              if(trimmedText.length > 0){
                setTodos([...todos, trimmedText]);
              }
            }}/>
          </Card>

          <TodoList 
          todos={todos}
          deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);

          setTodos(newTodos);
          }}/>

        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import {Layout, Typography, Card} from 'antd';
const {Title} = Typography;
const {Header, Content} = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Title>todos</Title>
        </Header>
        <Content>

          <Card>
            <TodoInput />
          </Card>

          <TodoItem />

        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Layout, Typography, Card, Input, Button, Icon } from 'antd';
import Footer from './Footer';
import TodoItem from './TodoItem';
const { Title } = Typography;
const { Header, Content } = Layout;


function App() {

  function handleEnter(){
    console.log("test");
  }

  return (
    <div className="App">
       <Layout>
          <Header>
          <Title>todos</Title>
          </Header>
          <Content>
            <Card>
         <div>
         <Input
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          placeholder="Enter a to do list item"
          onPressEnter={handleEnter}
          suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
                onClick={handleEnter}
              >
                <Icon type="plus" />
              </Button>
            }
          />
         </div>
            </Card>

            <TodoItem />
          </Content>
          <Footer />
      </Layout>
    </div>
  );
}

export default App;
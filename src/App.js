import React from 'react';
import './App.css';
import { Layout, Typography, Card, Input, Button, Icon } from 'antd';
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
          placeholder="Enter to do list item"
          onPressEnter={handleEnter}
          suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
              >
                <Icon type="plus" />
              </Button>
            }
          />
         </div>
            </Card>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
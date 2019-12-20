import React, { Component } from 'react';
import {
  Layout, Typography
} from 'antd';
import './App.css';
const { Title } = Typography;
const { Header, Content } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
          <Header>
          <Title>todos</Title>
          </Header>
          <Content>

          </Content>
      </Layout>
    );
  }
}

export default App;

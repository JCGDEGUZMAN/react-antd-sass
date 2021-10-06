import React from 'react';
import './App.scss';

import Layout from 'antd/lib/layout';

import MainHeader from './shared/Header';
import HomePage from './modules/HomePage';

const { Header, Content } = Layout;

function App() {

  return (
    <Layout className='main-app'>
      <Header className='main-header'>
        <MainHeader/>
      </Header>
      <Content>
        <HomePage/>
      </Content>
    </Layout>
  );
}

export default App;

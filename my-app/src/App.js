import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div >
    <Layout fixedHeader>
        <Header className='header-color' title={<span><span style={{ color: '#00' }}>Jamie Murphy </span><strong> Resume Website</strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

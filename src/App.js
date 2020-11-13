import React, { Component } from 'react'
import './App.css'
// import Header from './components/header';
import Footer from './components/footer';
// import {Menubar} from 'primereact/menubar';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';


import Sidebar from './components/sidebar';
import Header from './components/header';

class App extends Component {
	render() {

	  return (
		<div className="App" >
      <CssBaseline />
			  <Header/>
        <Sidebar />
      <div id="main" className='container' style={{ 'padding-top': '60px' , 'padding-left':'240px', 'height': '100%', 'width': '100%' }}>
        <main>
          <div className="content" id="content">
            {this.props.children}
          </div>
        </main>
        </div>
     
			<Footer />
      </div>
			
	  );
	}
  }
  
  export default withRouter(App);
  
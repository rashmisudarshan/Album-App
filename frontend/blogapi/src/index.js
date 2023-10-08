import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Single from './components/Single';
import Search from './components/Search';
import Admin from './Admin';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';


const routing = (

		<React.StrictMode>
      <Router>
      <Header />
      </Router>
			
      <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/album/:id" element={<Single />} />
      <Route path="search/album/:id" element={<Single />} />
      <Route path="/search" element={<Search />} />
      <Route exact path="/admin" element={<Admin />} />
		<Route exact path="/admin/create" element={<Create />} />
		<Route exact path="/admin/edit/:id" element={<Edit />} />
		<Route exact path="/admin/delete/:id" element={<Delete />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      </Routes>
      </Router>
			
		</React.StrictMode>
    
	
);



ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



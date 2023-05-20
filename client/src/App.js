import './App.css';
import { Route, useLocation }         from  'react-router-dom';
import {Home, Landing, Form, Detail}  from './Routes/route';
import { NavBar }                     from './components/Navbar/Nav';

function App() {

const location = useLocation();











  return (
    <div className="App">

      { location.pathname !== '/' && <NavBar /> }

      <Route exact path = '/'  component = {Landing}            />
      <Route path = '/home'    render    = {() =>  <Home />}    />
      <Route path = '/create'  render    = {() =>  <Form />}    />
      <Route path = '/detail'  render    = {() =>  <Detail />}  />

    </div>
  );
}

export default App;
 
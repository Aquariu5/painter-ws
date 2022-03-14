import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, ToggleButton, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { routes } from './router/routes';
// import { Route } from 'react-router-dom';
// import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Left } from './components/ui-components/Left';
// import { History } from './components/History';
// import { Menu } from './components/Menu';
import Chat from './components/Chat';

 import { Footer } from './components/Footer';
import cl from './styles/App.module.css';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas'
function App() {

  let [state, setState] = useState(1);
  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(prev => !prev);
  }


  return (
      <BrowserRouter>
          <div className={cl.App}>
              <Navbar bg="light">
              <Container>
              <Button onClick={handleShow} variant="warning">Left menu</Button>
              </Container>
              </Navbar>
              <Left show={show} handleShow={handleShow}/>
              <Toolbar />
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <div>
                  <Canvas/>
              </div>
              <Chat />
          </div>
          
          <Footer/>
          </div>
      </BrowserRouter>
    )
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import RandomJoke from './Pages/RandomJoke';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Home from './Pages/Home';
import Countries from './Pages/Countries';
import RecipePage from './Pages/RecipePage';
import Recipe from './Pages/Recipe';
import DictionaryPage from './Pages/DictionaryPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App bg-dark text-light">

        <header>
          <Navbar expand="lg" className="bg-info">
            <Container fluid>
              <Navbar.Brand href="#">My page</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/jokes'>Jokes</Nav.Link>
                  <Nav.Link as={Link} to='/countries'>Countries</Nav.Link>
                  <Nav.Link as={Link} to='/recipes'>Recipes</Nav.Link>
                  <Nav.Link as={Link} to='/dictionary'>Dictionary</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jokes' element={<RandomJoke />}/>
            <Route path='/countries' element={<Countries />} />
            <Route path='/recipes' element={<RecipePage />}/>
            <Route path='/recipes/:id' element={<Recipe />}/>
            <Route path='/dictionary' element={<DictionaryPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

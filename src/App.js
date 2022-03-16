import { useState } from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { Navbar, Container, Row, Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
             Library - Firebase CRUD 
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container style = {{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id = {bookId} setBookId = {setBookId} />
          </Col>
        </Row>
      </Container>  

      <Container>
        <Row>
          <Col>
            <BookList getBookId = {getBookIdHandler} />
          </Col>
        </Row>
      </Container> 
    </>
  );
}

export default App;
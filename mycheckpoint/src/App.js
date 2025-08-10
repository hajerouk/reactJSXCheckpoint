import './App.css';
import React from "react";
import Name from "./Name";
import product from './product';
import Price from './Price';
import Description from './Description';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function App() {
const firstName = "Hajer";  // Change ici pour tester, ou "" si pas de prénom
  return (
    <>
      <Container className="text-center mt-4">
        <h1> Welcome to my Store </h1>
        <p>Discover our new products.</p>
      </Container>

      <Container className="mt-4">
        <Row className="g-4 ">
          {product.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 product-card">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={product.image} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                  <Button variant="light" className="mt-auto btn-buy">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
       <div className="hello">
        {firstName ? (
          <>
            <span>Hello, {firstName}!</span>
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
              alt="Salut"
              style={{ width: "60px", height: "60px", animation: "wave 2s infinite" }}
            />
          </>
        ) : (
          <span>Hello, there!</span>
        )}
      </div>
    </>
  );
  
}

export default App;

import './App.css'; // Import du fichier CSS principal
import React from "react";
import Name from "./Name"; // Composant pour afficher le nom du produit
import product from './product'; // Tableau des produits
import Price from './Price'; // Composant pour afficher le prix
import Description from './Description'; // Composant pour afficher la description
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Composants Bootstrap React

function App() {
  // Variable contenant le prénom à afficher (changer la valeur pour tester)
  const firstName = "Hajer";

  return (
    <>
      {/* Titre et introduction */}
      <Container className="text-center mt-4">
        <h1>Welcome to my Store</h1>
        <p>Discover our new products.</p>
      </Container>

      {/* Grille des produits */}
      <Container className="mt-4">
        <Row className="g-4">
          {/* On parcourt le tableau 'product' pour afficher chaque produit */}
          {product.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 product-card">
                {/* Wrapper pour l'image avec styles spécifiques */}
                <div className="img-wrapper">
                  <Card.Img variant="top" src={product.image} />
                </div>

                {/* Corps de la carte avec nom, prix, description, bouton */}
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

      {/* Message personnalisé en fonction du prénom */}
      <div className="hello">
        {firstName ? (
          <>
            {/* Affiche 'Hello, [prénom]!' et une image animée */}
            <span>Hello, {firstName}!</span>
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
              alt="Salut"
              style={{ width: "60px", height: "60px", animation: "wave 2s infinite" }}
            />
          </>
        ) : (
          // Affiche ce message si prénom vide ou non défini
          <span>Hello, there!</span>
        )}
      </div>
    </>
  );
}

export default App;

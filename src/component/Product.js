import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ pro }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${pro._id}`}>
        <Card.Img src={pro.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${pro._id}`}>
          <Card.Title as="div">
            <strong>{pro.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={pro.rating} text={pro.numReviews} />
          </div>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <h3> ${pro.price}</h3>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

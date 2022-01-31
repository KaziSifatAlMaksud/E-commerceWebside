import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ pro }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${pro._id}`}>
        <Card.Img src={pro.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${pro._id}`}>
          <Card.Title as="div">
            <strong>{pro.name}</strong>
          </Card.Title>
        </Link>
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

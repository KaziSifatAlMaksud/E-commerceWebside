import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import products from "../products";
const ProductSceen = (props) => {
  const { id } = useParams();
  const product = products.find((x) => x._id === id);
  console.log(id);
  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <h1> {product.name}</h1>
      <Row>
        <Col>
          <Image src={product.image} alt={product.image} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductSceen;

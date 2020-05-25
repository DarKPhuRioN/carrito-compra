import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "./../Loading";
import Product from "./../Product";
import PropTypes from "prop-types";

const Products = ({ products, error, loading }) => {
  if (loading || !products) return <Loading />;

  return (
    <Container>
      <Row>
        {products.map((prod, key) => (
          <Product product={prod} key={key} />
        ))}
      </Row>
    </Container>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

export default Products;

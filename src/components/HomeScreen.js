import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "./CategoriesBar";
import Video from "./Video";

// const keys = Array.from({ length: 20 }, (_, i) => i);
// or
const keys = [...Array(20).keys()];

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {keys.map((key) => (
          <Col className="border border-info" lg={3} md={4} key={key}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;

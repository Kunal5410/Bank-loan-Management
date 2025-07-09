import React from 'react';
import { Card, Badge, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoanCard = (props) => {
  return (
    <Card id="cart" className="mb-4 ms-4">
      <Card.Body>
        {/* Title and Status */}
        <Row className="align-items-center mb-2">
          <Col>
            <Card.Title>{props.Loan_name}</Card.Title>
          </Col>
          <Col xs="auto">
            <Badge bg={props.bg}>{props.bg_status}</Badge>
          </Col>
        </Row>

        {/* Loan Details */}
        <Row className="mb-2 justify-content-between">
          <Col><strong>Interest Rate:</strong></Col>
          <Col xs="auto">{props.rate}</Col>
        </Row>

        <Row className="mb-2 justify-content-between">
          <Col><strong>Loan Range:</strong></Col>
          <Col xs="auto">{props.range}</Col>
        </Row>

        <Row className="mb-2 justify-content-between">
          <Col><strong>Max Tenure:</strong></Col>
          <Col xs="auto">{props.month}</Col>
        </Row>

        <Row className="mb-2 justify-content-between">
          <Col><strong>Applications:</strong></Col>
          <Col xs="auto">{props.number}</Col>
        </Row>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">
            <FaEye className="me-1" />
          </Button>
          <Button variant="outline-secondary" size="sm">
            <FaEdit className="me-1" />
          </Button>
          <Button variant="outline-danger" size="sm">
            <FaTrash className="me-1" /> 
          </Button>
        </ButtonGroup>

      </Card.Body>
    </Card>
  );
};

export default LoanCard;

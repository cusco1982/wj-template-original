import React from 'react';
import { Container } from 'reactstrap';

const Jumbotron = (props) => {
  return (
    <div>
      <div fluid style={{backgroundColor:"green", textAlign:"center", height:"50vh"}}>
        <Container fluid>
          <h1 className="display-3">#1 Mechanical Insulation Service</h1>
          <p className="lead">We believe that the satisfaction and safety of our customers is our #1 Priority.</p>
          <button>GET A QUOTE</button>
        </Container>
      </div>
    </div>
  );
};

export default Jumbotron;
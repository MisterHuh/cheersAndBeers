import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap';
import { relative } from 'path';

export const Jumbotron = () => {

  const jumboImg = './images/general/jumbotron.jpg';

  return (
    <div>
      <Jumbo fluid className="p-0 mb-1">
        <Container fluid className="jumbotronImgContainer p-0 position-relative">
          <img src={jumboImg} alt="jumbo" className="jumbotronImg"/>
          <h1 className="jumbotronText1 position-absolute">Trust me, you can dance</h1>
          <h1 className="jumbotronText2 position-absolute">- Beer</h1>
        </Container>
      </Jumbo>
    </div>
  );
};

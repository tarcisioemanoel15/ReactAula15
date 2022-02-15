import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

function App() {
  return (
    <Container>
      <Title>
        hello world
        <small> oii mundo </small>
      </Title>
      <Paragrafo>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Rem voluptas magni culpa neque dolorum eum veritatis veniam consequuntur,
        qui perferendis eius, ducimus, quo facilis? Eos delectus rerum natus illum aut?

      </Paragrafo>
    </Container>
  );
}

export default App;

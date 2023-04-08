import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CocktailCard from './CocktailCard';
import { Stack } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='header'>Tiny Tiki</h1>
          <p>Find your favorite tiki recipe in the list below.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Stack gap={4} className='col-md-5'>
            <CocktailCard />
            <CocktailCard />
            <CocktailCard />
            <CocktailCard />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App

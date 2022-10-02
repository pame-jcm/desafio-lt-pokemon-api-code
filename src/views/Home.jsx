import { Container, Row } from 'react-bootstrap';
import pokemon from '../assets/image/pokemon_prin.jpg';

const Home = () => {
  return (
    <>
        <Container className="mt-5">
            <Row className='justify-content-center text-center'>
            <h1>Bienvenido Maestro Pokemón</h1>
            <img src={pokemon} style={{ width:'58rem' }}/>
            </Row>
        </Container>
    </>
  )
}

export default Home
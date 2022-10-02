import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col} from 'react-bootstrap';

const DetallePokemon = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => getDetallePokemon,[]);

    const getDetallePokemon = async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await res.json();
            
            setPokemon(data);
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <>

        <Container>
            <Row className='justify-content-center mt-5'>
                <Card border="warning" style={{ width: '48rem'}}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={pokemon.sprites?.other?.dream_world?.front_default} style={{ padding:'38px', paddingLeft:'100px' }}/>
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title><strong>{pokemon.name}</strong></Card.Title>
                            <Card.Text>
                                
                                <ul>
                                    {pokemon.stats?.map(({base_stat, stat}, index) => (
                                        <li key={index}> {stat.name} : {base_stat}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Container>
      

    </>
  )
}

export default DetallePokemon
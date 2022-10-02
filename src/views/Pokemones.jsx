import { useEffect, useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {

    const [pokemons, setPokemons] = useState([]);
    const [name, setName] = useState([]);
    const navigate = useNavigate();

    useEffect(() => getPokemon, []);

    const getPokemon = async() => {

        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data = await res.json();

            setPokemons(data.results);

        } catch (error) {
            console.log(error);
        }
    }

    const handleChangePokemon = (name) => {
        
        setName(name);
    }

    const handleClickButton = () => {

        navigate(`${name}`);
    }
    

  return (
    <>
        <Container className="mt-5">
            <Row className='d-flex flex-column align-items-center text-center'>
                <h1>Selecciona un Pokemón</h1>
                <Form.Select style={{width:'15rem'}} onChange={(e) => handleChangePokemon(e.target.value)}>
                    <option>Pokemones</option>
                    {
                        pokemons.map(({ name }, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))
                    }
                </Form.Select>
                <Button variant="primary" style={{ margin:'15px', width:'15rem'}} onClick={() => handleClickButton()}>Ver Detalles</Button>
            </Row>
        </Container>
    </>
  )
}

export default Pokemones
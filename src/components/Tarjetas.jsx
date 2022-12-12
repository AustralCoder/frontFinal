import React from 'react'
import { Card, Button} from 'react-bootstrap';





const Tarjetas = ({characters}) => {

    let especie = characters.species;
    let estado = characters.status;
    let origen = characters.origin.name;


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ characters.image } />
                <Card.Body>
                <Card.Title>{ characters.name }</Card.Title>
                    <Card.Text>
                        <span> Specie: { especie }</span>
                        <br />
                        <span> Status: { estado }</span>
                        <br />
                        <span> Origin: { origen }</span> 
                    </Card.Text>
                <Button variant="primary">Card testing</Button>
            </Card.Body> 
        </Card>

    )
}

export default Tarjetas
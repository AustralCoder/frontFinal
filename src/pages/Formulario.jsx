import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState} from 'react';


const Formulario = () => {
    //api de db
    // const URL = 'http://localhost:3001/crear'; //LOCAL

    const URL = 'https://backfinal-production-66eb.up.railway.app/crear' //PROD
    //inicializamos variables vacias para el useState
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    });

    //función para setear las variables

    const handleChange = (e) => {

        setInputs({ 
                ...inputs,
                [e.target.name]: e.target.value
        })
    }


    //funcion del post

    const handleClick = async () => {


      await axios.post(URL, inputs) //enviamos datos

         setInputs({ //limpiamos los inputs
            nombre: "",
            apellido: "",
            dni: ""
        })
    }

    return (

        <div className='section m-5'>
            <Form>


            {Object.keys(inputs).map((key, index) => (
                
                    <Form.Group className="mb-3" key={index}>
                        <Form.Label>
                            {key}
                        </Form.Label>
                        <Form.Control 
                            name={key}
                            value={inputs[key]}
                            onChange={handleChange} 
                            required/>
                    </Form.Group>
                    ))}

                    <div className='text-center w-100'>
                        <Button variant="primary" type="submit" onClick={handleClick}>Enviar datos
                        </Button>
                    </div>


            
            </Form>

        </div>

    )
}

export default Formulario
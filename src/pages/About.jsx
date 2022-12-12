import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const About = () => {


    const [datos, setDatos] = useState([]);

    //api de mi data

   // const URL = 'http://localhost:3001/datos';//LOCAL

    const URL = 'https://backfinal-production-66eb.up.railway.app/datos'//PROD

    //creamos una funcion para el useEffect

    const getPersonas = async () => {
        try {
            const { data } = await axios.get(URL);  //es como hacer un fetch
            setDatos(data.datos)
            // setPersonas(data.persona)
            console.log(data.datos);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPersonas();
    }, []);





    return (
            <div className='section m-5'>
                <h2>
                    Welcome to the about page
                </h2>

                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                    </tr>
                </thead>
                <tbody>
                {datos.map(dato =>
                    <tr> 
                        <td>{dato._id}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.apellido}</td>
                        <td>{dato.dni}</td>
                    </tr>
                )}
                </tbody>
            </Table>

            </div>

    )
}

export default About
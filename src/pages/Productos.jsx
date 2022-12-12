import React from 'react'
import products from '../data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Productos = () => {
    return (
        <div className='section m-5'>
            {/* <h2>
            Welcome to the product page
            </h2>
            <div className='products'>
                {
                    products.map((product) =>{
                        return(
                            <article key={product.id}>
                                <h5>{product.name}</h5>
                                <img src={product.image} alt={product.name} />
                            </article>
                        );
                    })
                }
            </div> */}

    {products.map((product) => 
        <>
            <div className='d-flex flex-row'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title className='mb-5'>{product.name}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            </>
        )}
        </div>
    )
}

export default Productos
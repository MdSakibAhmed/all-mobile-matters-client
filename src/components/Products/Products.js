import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Products = ({product}) => {
    const {name,price,imgURL,model,_id} = product;
    const history = useHistory()
    

    return (
        // <div>
        // <img style={{width:"300px",height:"auto"}} src={imgURL} alt=""/>
        //     <h2>{name}</h2>
        //     <p>price: $ {price}</p>

        //     <button onClick={() => history.push(`/BuyNow/${_id}`)}>Buy Now</button>
            
        // </div>
        <Card style={{ width: '24rem', height:"500px", textAlign:"center", marginRight:"30px",marginBottom:"40px" }} className="shadow">
  <Card.Img variant="top" src={imgURL} style={{width:"300px",height:"300px"}} />
  <Card.Body className="d-flex flex-column justify-content-between">
    <Card.Title>{name}</Card.Title>
    <Card.Text>{model}</Card.Text>
    <Card.Title> ${price}</Card.Title>
    
    <Button variant="primary" onClick={() => history.push(`/BuyNow/${_id}`)}>Buy Now</Button>
  </Card.Body>
</Card>
    );
};

export default Products;
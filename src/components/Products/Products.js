import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Products = ({product}) => {
    const {name,price,imgURL,brand,_id} = product;
    const history = useHistory()
    

    return (
       
        <Card style={{ width: '24rem', height:"500px", textAlign:"center", marginRight:"30px",marginBottom:"40px" }} className="shadow">
  <Card.Img variant="top" src={imgURL} style={{width:"300px",height:"300px"}} />
  <Card.Body className="d-flex flex-column justify-content-between">
    <Card.Title>{name}</Card.Title>
    <Card.Text> <span className=" text-black-50">Brand:</span> {brand}</Card.Text>
    <Card.Title> ${price}</Card.Title>
    
    <Button variant="primary" onClick={() => history.push(`/BuyNow/${_id}`)}>Buy Now</Button>
  </Card.Body>
</Card>
    );
};

export default Products;
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const CheckOutProduct = ({product}) => {
    const {name,price,imgURL} = product
    return (
        // <div>
        // <img src={imgURL} alt=""/>
        //     <p>name:{name}</p>
        //     <p>price:{price}</p>

        // </div>
        
     <Table   hover>
  <thead>
    <tr>
     
      <th>Description</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    
   
    <tr>
      <td>{name}</td>
      <td >1</td>
      <td >${price}</td>
  
    </tr>
    <tr>
      <td colSpan="2">Total</td>
     
      <td >${price}</td>
  
    </tr>
  </tbody>
</Table>

    );
};

export default CheckOutProduct;
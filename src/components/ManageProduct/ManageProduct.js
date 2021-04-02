import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import ManageProductList from '../ManageProductList/ManageProductList';

const ManageProduct = () => {

    const [products,setProducts] = useState([])
    const [successLoadData, setSuccessLoadData] = useState(true)

    useEffect(()=> {
        fetch("https://cherry-surprise-80306.herokuapp.com/products").then(res => res.json()).then(data => {
            setProducts(data)
            setSuccessLoadData(false)
            })
    },[products])
    
    return (
        <>
        {successLoadData && <Spinner animation="border" />}

<Table   hover>
  <thead>
    <tr>
     
      <th>Description</th>
      <th>Brand</th>
       <th>Price</th>
      <th>Quantity</th>
      <th>Action</th>
     
    </tr>
  </thead>

  <tbody>
    
  {products.map(pd => <ManageProductList key={pd._id} product={pd}></ManageProductList>)}
    
   
  </tbody>
</Table>

            
        </>
    );
};

export default ManageProduct;
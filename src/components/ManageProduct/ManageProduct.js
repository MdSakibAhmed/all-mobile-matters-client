import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageProductList from '../ManageProductList/ManageProductList';

const ManageProduct = () => {

    const [products,setProducts] = useState([])

    useEffect(()=> {
        fetch("https://cherry-surprise-80306.herokuapp.com/products").then(res => res.json()).then(data => {
            setProducts(data)
            })
    },[])
    
    return (
        <>

<Table   hover>
  <thead>
    <tr>
     
      <th>Description</th>
      <th>Model</th>
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
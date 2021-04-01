import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageProductList from '../ManageProductList/ManageProductList';

const ManageProduct = () => {

    const [products,setProducts] = useState([])

    useEffect(()=> {
        fetch("http://localhost:5000/products").then(res => res.json()).then(data => {
            setProducts(data)
            })
    },[])
    
    return (
        <>
            {products.map(pd => <ManageProductList key={pd._id} product={pd}></ManageProductList>)}
        </>
    );
};

export default ManageProduct;
import React from 'react';

const ManageProductList = ({product}) => {
    const {name,price,imgURL,_id} = product;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        }).then(response => {
            console.log(response);
        })
    }


    return (
        <>
            <p>name: {name}</p>
            <p>price: {price}</p>
            <img src={imgURL} alt=""/>
            <button onClick={() =>  handleDelete(_id)}>delete</button>
            <button>edit</button>
        </>
    );
};

export default ManageProductList;
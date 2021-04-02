import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const ManageProductList = ({product}) => {
    const {name,price,brand,_id} = product;

    const handleDelete = (id) => {
        fetch(`https://cherry-surprise-80306.herokuapp.com/delete/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        }).then(response => response.json()).then(result => {
            if(result){
            }
        })
    }
    return (
    <tr>
      <td>{name}</td>
      <td>{brand}</td>
       <td >${price}</td>
      <td >1</td>
      <td><FontAwesomeIcon  style={{color:"green",marginRight:"15px",}} icon={faEdit}/><FontAwesomeIcon onClick={()=> handleDelete(_id)} style={{color:"red", cursor:"pointer"}} icon={faTrashAlt}/></td>

    </tr>
    );
};

export default ManageProductList;
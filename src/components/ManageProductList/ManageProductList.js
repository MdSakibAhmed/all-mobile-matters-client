import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const ManageProductList = ({product}) => {
    const {name,price,model,_id} = product;
const history = useHistory()
    const handelManageProduct = (e) =>{
        fetch(`https://cherry-surprise-80306.herokuapp.com/delete/${_id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        }).then(response => response.json()).then(result => {
            if(result){
               
                const deletedProduct = e.target.parentNode.parentNode
                console.log(deletedProduct);

                e.target.parentNode.parentNode.parentNode.removeChild(deletedProduct)

                // history.push(`/admin/manageProduct`)

            }
        })

    }
    // const handleDelete = (id) => {
    //     fetch(`https://cherry-surprise-80306.herokuapp.com/delete/${id}`,{
    //         method:"DELETE",
    //         headers:{"Content-Type":"application/json"}
    //     }).then(response => response.json()).then(result => {
    //         if(result){
    //             console.log(result)

    //             // history.push(`/admin/manageProduct`)

    //         }
    //     })
    // }
    return (
    <tr>
      <td>{name}</td>
      <td>{model}</td>
       <td >${price}</td>
      <td >1</td>
      <td><FontAwesomeIcon  style={{color:"green",marginRight:"15px",}} icon={faEdit}/><FontAwesomeIcon onClick={handelManageProduct} style={{color:"red", cursor:"pointer"}} icon={faTrashAlt}/></td>

    </tr>
    );
};

export default ManageProductList;
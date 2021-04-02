import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';


const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [successLoadData, setSuccessLoadData] =  useState(true)
    const [orders, setOrders] = useState([])
    useEffect(()=> {
        fetch(`https://cherry-surprise-80306.herokuapp.com/orders?email=${loggedInUser.email}`).then(res => res.json()).then(data =>  {
            setOrders(data)
            setSuccessLoadData(false)
        })

    },[])
    return (
        <div className="mt-4 container">
        <h1 className="">My Orders</h1>
        <div className="text-center">
 {successLoadData && <Spinner className="" animation="border" />}
        </div>
       
            {orders.map(pd => <OrderList key={pd._id} product={pd} ></OrderList>)}
        </div>
    );
};

export default Orders;
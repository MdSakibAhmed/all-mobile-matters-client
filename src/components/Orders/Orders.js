import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';


const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:5000/orders?email=${loggedInUser.email}`).then(res => res.json()).then(data =>  {
            setOrders(data)
        })

    },[])
    return (
        <div>
            {orders.map(pd => <OrderList key={pd._id} product={pd}></OrderList>)}
        </div>
    );
};

export default Orders;
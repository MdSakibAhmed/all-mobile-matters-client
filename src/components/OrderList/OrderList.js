import React from 'react';

const OrderList = ({product}) => {
    const {name,price,imgURL,current_date} = product;
    return (
        <div>
        <img src={imgURL} alt=""/>
            <p>name:{name}</p>
            <p>price:{price}</p>
            <p>current_date: {current_date}</p>

        </div>
    );
};

export default OrderList;
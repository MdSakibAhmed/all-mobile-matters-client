import React from 'react';


const OrderList = ({product}) => {
    const {name,imgURL,model,current_date,_id} = product;
    return (
        <div className="d-flex border container pt-3 mb-4 justify-content-around align-items-center">
         
       
<div>
<h3 >Order <span className="text-primary">#{_id}</span> </h3>
<p>Placed on {current_date}</p>
    <img style={{width:"200px"}} src={imgURL} alt=""/>
</div>
        
        <div className="  text-start ">
            <h4 className=" ">{name} {model}</h4>
            <p className=""> <span className="text-black-50 d-inline">Qty</span> :1</p>
            <button className="bg-gray border-0 rounded "> Delivered</button>
            </div>

        </div>
    );
};

export default OrderList;
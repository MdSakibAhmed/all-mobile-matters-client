import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState({
    email: "",
    name: "",
    price: "",
    imgURL: "",
    current_date: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        const newOrder = { ...order };
        newOrder.email = loggedInUser.email;
        newOrder.name = data.name;
        newOrder.price = data.price;
        newOrder.imgURL = data.imgURL;
        newOrder.current_date = new Date().toDateString("dd/MM/yyy");
        setOrder(newOrder);
      });
  }, [productId]);

  const handleAddOrder = () => {
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then(res => res.json()).then(result => {
        console.log(result);

        result &&  setOrderSuccess(true);
    })
  };

  return (
    <Container className="mt-5">
      {orderSuccess? (
        <h1 className="text-center text-success">Your order has been received successfully</h1>
      ) : (
        <CheckOutProduct product={product} />
      )}

      {/* {!order.success && <button onClick={handleAddOrder}>Checkout</button>} */}

      <div
        style={{ width: "150px", marginLeft: "auto" }}
        className="mb-2 ml-auto"
      >
        {!orderSuccess && (
          <Button onClick={handleAddOrder} variant="primary" size="lg">
            Checkout
          </Button>
        )}
      </div>
    </Container>
  );
};

export default CheckOut;

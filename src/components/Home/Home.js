import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";

import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [successLoadData, setSuccessLoadData] = useState(true);

  useEffect(() => {
    fetch("https://cherry-surprise-80306.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSuccessLoadData(false);
      });
  }, []);

  return (
    <>
      <div
        style={{
          width: "300px",
          margin: "30px auto 0 auto",
          textAlign: "center",
        }}
      >
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Mobile"
            className=" mr-sm-2 "
          />
          <Button className="mt-3" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="d-flex flex-wrap justify-content-center mt-5 ">
        {successLoadData && (
          <Spinner className="text-center" animation="border" />
        )}
        {products.map((pd) => (
          <Products key={pd._id} product={pd}></Products>
        ))}
      </div>
    </>
  );
};

export default Home;

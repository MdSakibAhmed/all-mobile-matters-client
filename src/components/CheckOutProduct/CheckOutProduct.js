import React from "react";
import { Container, Table } from "react-bootstrap";

const CheckOutProduct = ({ product }) => {
  const { name, price } = product;
  return (

    <Table hover>
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>1</td>
          <td>${price}</td>
        </tr>
        <tr>
          <td colSpan="2"> <strong> Total</strong></td>

          <td> <strong>${price}</strong></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CheckOutProduct;

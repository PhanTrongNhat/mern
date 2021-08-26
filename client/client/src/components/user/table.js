import React from "react";
import { Button } from "reactstrap";

export default function Table(Props) {
  const { product, number } = Props;
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{product._id}</td>
      <td>{product.username}</td>
      <td>{product.password}</td>
      <td>
        <Button>edit</Button>
      </td>
      <td>
        {" "}
        <Button>update</Button>
      </td>
      <td>
        {" "}
        <Button>delete</Button>
      </td>
    </tr>
  );
}

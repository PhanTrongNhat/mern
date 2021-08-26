import React, { useState } from "react";
import { Button } from "reactstrap";
import productsApi from "../../api/productsApi";
export default function Table(Props) {
  const { product, number, reloadPage } = Props;

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(product.name);
  const [cost, setCost] = useState(product.cost);
  const editProduct = () => {
    setIsEdit(!isEdit);
  };
  const changeName = (value) => {
    console.log(value);
    setName(value);
  };
  const changeCost = (value) => {
    console.log(value);
    setCost(value);
  };
  const updateProduct = () => {
    const update = async () => {
      await productsApi.updateProduct({ ...product, cost, name });
      reloadPage();
      setIsEdit(!isEdit);
    };
    update();
  };
  const deleteProduct = () => {
    const deleteP = async () => {
      await productsApi.deleteProduct({_id:product._id});
      reloadPage();
    
    };
    deleteP();
  };
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{product._id}</td>

      <td>
        {isEdit ? (
          <input
            type="text"
            value={name}
            onChange={(e) => changeName(e.target.value)}
          ></input>
        ) : (
          product.name
        )}
      </td>
      <td>{product.image}</td>
      <td>
        {isEdit ? (
          <input
            type="text"
            value={cost}
            onChange={(e) => changeCost(e.target.value)}
          ></input>
        ) : (
          product.cost
        )}
      </td>
      <td>
        <Button onClick={editProduct}>edit</Button>
      </td>
      <td>
        {" "}
        <Button onClick={updateProduct}>update</Button>
      </td>
      <td>
        {" "}
        <Button onClick={deleteProduct}>delete</Button>
      </td>
    </tr>
  );
}

import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import productApi from "../api/productsApi";
import Item from "../components/product/table";
export default function Products() {
  const [products, setProducts] = useState();
  const [isReload, setReload] = useState(false);
  const reloadPage = ()=>{
    console.log('reload');
    setReload(!isReload);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isReload]);
  return (
    <div className="screen-home">
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text"></input>
        <label htmlFor="cost">Cost:</label>
        <input id="cost" type="text"></input>
        <label htmlFor="image">Image:</label>
        <input id="image" type="text"></input>
      </form>
      <Table>
        <thead>
          <tr>
            <th>number</th>
            <th>id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Cost</th>
            <th>Edit</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?products.map((item,index) => (
            <Item  key={index} reloadPage={reloadPage} number={index} product={item}></Item>
          )):""}
        </tbody>
      </Table>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import productApi from "../api/productsApi";
import Item from "../components/product/table";
import FormAddProduct from "../components/product/formAddProduct";
import Pagination from "../components/general/pagination";
export default function Products(Props) {
  const [products, setProducts] = useState();
  const [isReload, setReload] = useState(false);
  const [isAddProduct, setAddProduct] = useState(false);
  const [pagination, setPaginationconst] = useState({
    _page: 1,
   
    _totalRows: 0,
  });

  const urlParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlParams);

  const reloadPage = () => {
    console.log("reload");
    setReload(!isReload);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (params) {
          data = await productApi.getAll(params);
        } else {
          data = await productApi.getAll({ _page: 1, _limit: 3 });
        }

        setProducts(data.data);
        setPaginationconst({
          ...pagination,_totalRows:data._totalRows
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isReload]);

  const displayAddProduct = () => {
    setAddProduct(!isAddProduct);
  };
  return (
    <div className="screen-home">
      <Button onClick={displayAddProduct}>Add Product</Button>
      {isAddProduct ? (
        <FormAddProduct reloadPage={reloadPage}></FormAddProduct>
      ) : (
        ""
      )}

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
          {products
            ? products.map((item, index) => (
                <Item
                  key={index}
                  reloadPage={reloadPage}
                  number={index}
                  product={item}
                ></Item>
              ))
            : ""}
        </tbody>
      </Table>
      <Pagination pagination={pagination}   reloadPage={reloadPage} ></Pagination>
    </div>
  );
}

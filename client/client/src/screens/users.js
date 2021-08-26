import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import userApi from "../api/userApi";
import Item from "../components/user/table";
export default function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await userApi.getAll();
        console.log(data);
        setUsers(data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="screen-home">
      <Table>
        <thead>
          <tr>
            <th>number</th>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?users.map((item,index) => (
            <Item  key={index} number={index} product={item}></Item>
          )):""}
        </tbody>
      </Table>
    </div>
  );
}

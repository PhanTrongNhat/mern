import React, { useEffect, useState } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import productApi from "../../api/productsApi";
//import productApi from "../api/productsApi";

export default function FormAdd(Props) {
    const {  reloadPage } = Props;
  const [name, setName] = useState();
  const [cost, setCost] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [provider, setProvider] = useState();
  const [categori,setCategori] = useState();
  const onChangeName = (e) => {
    setName(e);
  };
  const onChangeCost = (e) => {
    setCost(e);
  };
  const onChangeImage = (e) => {
    setImage(e);
  };
  const onChangeCategori = (e)=>{
      setCategori(e)
  }
  const onChangeDescription = (e) => {
    setDescription(e);
  };
  const onChangeProvider = (e) => {
    setProvider(e);
  };
  const handleAddProduct = () => {
    const callApi = async () => {
      await productApi.addProduct({
        name,
        cost,
        image,
        description,
        provider,
        categori
      });
    };
    callApi();
    reloadPage();
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            id="name"
            type="text"
            onChange={(e) => onChangeName(e.target.value)}
            required
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cost">Cost:</Label>
          <Input
            id="cost"
            type="text"
            onChange={(e) => onChangeCost(e.target.value)}
            required
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">Image:</Label>
          <Input
            id="image"
            type="text"
            onChange={(e) => onChangeImage(e.target.value)}
            required
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="categori">Categori:</Label>
          <Input
            type="textarea"
            name="text"
            id="categori"
            onChange={(e) => onChangeCategori(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Input
            type="textarea"
            name="text"
            id="description"
            onChange={(e) => onChangeDescription(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="provider">Provider:</Label>
          <Input
            id="provider"
            type="text"
            onChange={(e) => onChangeProvider(e.target.value)}
            required
          ></Input>
        </FormGroup>
        <FormGroup>
          <Button onClick={handleAddProduct}>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

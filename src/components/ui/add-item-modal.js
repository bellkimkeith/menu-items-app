"use client";

import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import AddButton from "./add-button";

function AddItemModal() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [option, setOption] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setCost("");
    setCategory("");
    setOption("");
    setPrice("");
    setPrice("");
  }

  function addItemHandler() {
    onCloseModal();
  }

  return (
    <>
      <AddButton onClick={() => setOpenModal(true)} />
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cost" value="Cost" />
              </div>
              <TextInput
                id="cost"
                type="number"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
              </div>
              <Select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                required
              >
                <option>Snack</option>
                <option>Meal</option>
                <option>Dessert</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput
                id="price"
                type="number"
                value={price}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="stock" value="Stock" />
              </div>
              <TextInput
                id="stock"
                type="number"
                value={stock}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="option" value="Options" />
              </div>
              <Select
                id="option"
                value={option}
                onChange={(event) => setOption(event.target.value)}
                required
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>N/A</option>
              </Select>
            </div>
            <div className="w-full">
              <Button className="min-w-full" onClick={addItemHandler}>
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddItemModal;

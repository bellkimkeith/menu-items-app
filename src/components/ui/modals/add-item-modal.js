"use client";

import { Button, Label, Modal, Toast } from "flowbite-react";
import { useState } from "react";
import AddButton from "../add-button";
import { Form, Formik } from "formik";
import ItemSchema from "../../../schemas";
import CustomInput from "../../form/custom-input";
import CustomSelect from "../../form/custom-select";
import { useDispatch, useSelector } from "react-redux";
import { categoriesList } from "../../../features/categories/categoriesSlice";
import { optionsList } from "../../../features/options/optionsSlice";
import { child, push, ref, set } from "firebase/database";
import { db } from "../../../utils/firebase";
import { addItem } from "../../../features/items/itemsSlice";
import { Toaster, toast } from "sonner";
import { FaCheck } from "react-icons/fa";

function AddItemModal() {
  const [openModal, setOpenModal] = useState(false);
  const categories = useSelector(categoriesList);
  const options = useSelector(optionsList);
  const dispatch = useDispatch();

  function onCloseModal() {
    setOpenModal(false);
  }

  async function writeItemData(
    id,
    { name, cost, category, price, stock, option }
  ) {
    await set(ref(db, `items/${id}`), {
      id: id,
      name: name,
      cost: cost,
      category: category,
      price: price,
      stock: stock,
      option: option,
    });
  }

  async function onSubmit(values, actions) {
    const newItemId = push(child(ref(db), "items")).key;
    dispatch(addItem({ id: newItemId, ...values }));
    await writeItemData(newItemId, values);
    toast.success(
      <div className="flex flex-row space-x-3">
        <FaCheck className="h-5 w-5 text-green-600 dark:text-green-500" />
        <Label className="text-black dark:text-black">
          Add Item Successfull
        </Label>
      </div>
    );
    actions.resetForm();
  }

  return (
    <>
      <AddButton onClick={() => setOpenModal(true)} />
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              cost: 0,
              category: "",
              price: 0,
              stock: 0,
              option: "",
            }}
            validationSchema={ItemSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off" autoCorrect="off">
                <div className="space-y-4">
                  <CustomInput label="Name" name="name" type="text" />
                  <CustomSelect
                    label="Option"
                    name="option"
                    options={options}
                  />
                  <CustomSelect
                    label="Category"
                    name="category"
                    options={categories}
                  />
                  <CustomInput label="Cost" name="cost" type="number" />
                  <CustomInput label="Price" name="price" type="number" />
                  <CustomInput label="Stock" name="stock" type="number" />
                  <div className="w-full">
                    <Button
                      disabled={isSubmitting}
                      className="min-w-full"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <Toaster richColors position="bottom-center" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddItemModal;

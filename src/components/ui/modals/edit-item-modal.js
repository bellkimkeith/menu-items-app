"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Form, Formik } from "formik";
import ItemSchema from "../../../schemas";
import CustomInput from "../../form/custom-input";
import CustomSelect from "../../form/custom-select";
import { useDispatch, useSelector } from "react-redux";
import { categoriesList } from "../../../features/categories/categoriesSlice";
import { optionsList } from "../../../features/options/optionsSlice";
import { child, push, ref, set, update } from "firebase/database";
import { db } from "../../../utils/firebase";
import { HiOutlinePencil } from "react-icons/hi";
import { editItem } from "../../../features/items/itemsSlice";

function EditItemModal({ itemData }) {
  const [openModal, setOpenModal] = useState(false);
  const categories = useSelector(categoriesList);
  const options = useSelector(optionsList);
  const dispatch = useDispatch();

  function onCloseModal() {
    setOpenModal(false);
  }

  async function editItemData({ name, cost, category, price, stock, option }) {
    await update(ref(db, `items/${itemData.id}`), {
      id: itemData.id,
      name: name,
      cost: cost,
      category: category,
      price: price,
      stock: stock,
      option: option,
    });
  }

  async function onSubmit(values) {
    await editItemData(values);
    dispatch(editItem({ id: itemData.id, ...values }));
    setOpenModal(false);
  }

  return (
    <>
      <Button size="xs" onClick={() => setOpenModal(true)} color="light">
        <HiOutlinePencil className="mr-1 h-4 w-4" />
        Edit
      </Button>
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Formik
            initialValues={{
              name: itemData.name,
              cost: itemData.cost,
              category: itemData.category,
              price: itemData.price,
              stock: itemData.stock,
              option: itemData.option,
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditItemModal;

"use client";

import { Button, Label, Modal } from "flowbite-react";
import { useState } from "react";
import { HiTrash, HiOutlineExclamationCircle } from "react-icons/hi";

function DeleteItemModal({ deleteItemHandler }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button size="xs" onClick={() => setOpenModal(true)} color="failure">
        <HiTrash className="mr-1 h-4 w-4" />
        <Label className="hidden sm:block text-white">Delete</Label>
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center z-1">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteItemHandler}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteItemModal;

import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import FromComponent from '../from/FromComponents';
export default function ButtonComponent() {
    const [openModal, setOpenModal] = useState(false);

    
  return (
    <>
      <div className="flex justify-center my-5">
        <Button color="success" onClick={() => setOpenModal(true)}>Create Product</Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create New Product</Modal.Header>
        <Modal.Body>
          <FromComponent getDataForm={getDataForm}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createProduct}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}




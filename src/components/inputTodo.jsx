import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Read from "./read";
import StateContext from "../context/stateContext";

const InputTodo = () => {
  const apikey = process.env.REACT_APP_API_KEY;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [todo, settodoList] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    settodoList(localStorage.getItem("Todo"));
  }, []);

  const updateAPIData = () => {
    axios.put(`${apikey}${id}`, {
      todo,
    });

    alert(id);
  };
  const localdata = () => {
    localStorage.setItem("ID", id);
    alert(id);
  };

  return (
    <>
      <StateContext.Provider value={todo}>
        <Button
          variant="primary"
          onClick={function (event) {
            handleShow();
            localdata();
          }}
        >
          Add/Change ToDo
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ToDo Creat/Change</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Input:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={todo}
                  onChange={(e) => settodoList(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateAPIData}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </StateContext.Provider>
    </>
  );
};

export default InputTodo;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const apikey = process.env.REACT_APP_API_KEY;
  const pData = () => {
    if (todo.length > 3) {
      axios
        .post(`${apikey}`, {
          name,
          surname,
          todo,
        })
        .then(() => {
          navigate("/read");
        });
    } else {
      alert("The number of characters cannot be less than 3");
    }
  };
  return (
    <div className="Mainfunc">
      <Form>
        <Form.Group className="mb-3" controlId="input">
          <Form.Label>
            <h6>Name:</h6>
          </Form.Label>
          <Form.Control
            minLength={3}
            type="text"
            placeholder="Name:"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="input1">
          <Form.Label>
            {" "}
            <h6>Surname:</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Surname:"
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="input2">
          <Form.Label>
            {" "}
            <h6>Todo:</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="..."
            onChange={(e) => setTodo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={pData}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;

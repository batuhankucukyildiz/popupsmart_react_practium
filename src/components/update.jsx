import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

const Update = () => {
  const apikey = process.env.REACT_APP_API_KEY;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("First Name"));
    setSurname(localStorage.getItem("Last Name"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`${apikey}${id}`, {
        name,
        surname,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="Mainfunc">
      <Form>
        <Form.Group className="mb-3" controlId="input">
          <Form.Label>
            {" "}
            <h6>Name:</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name:"
            value={name}
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
            value={surname}
            placeholder="Surname:"
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;

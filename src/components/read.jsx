import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(`${apikey}`);
      setAPIData(response.data);
    };
    fecthData();
  }, []);
  const getData = () => {
    axios.get(`${apikey}`).then((getData) => {
      setAPIData(getData.repo);
    });
  };
  const setData = (repo) => {
    let { id, name, surname } = repo;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", name);
    localStorage.setItem("Last Name", surname);
    console.log(repo);
  };

  const onDelete = (id) => {
    axios.delete(`${apikey}${id}`).then(() => {
      getData();
    });
  };
  const apikey = process.env.REACT_APP_API_KEY;

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              {" "}
              <h6>Id:</h6>
            </th>
            <th>
              {" "}
              <h6>First Name:</h6>
            </th>
            <th>
              {" "}
              <h6>Last Name:</h6>
            </th>
            <th>
              {" "}
              <h6>Update:</h6>
            </th>
            <th>
              {" "}
              <h6>Delete:</h6>
            </th>
          </tr>
        </thead>
        {APIData.map((repo) => (
          <tbody>
            <tr>
              <td>
                {" "}
                <h6>{repo.id}</h6>
              </td>
              <td>
                <h6>{repo.name}</h6>
              </td>
              <td>
                <h6>{repo.surname}</h6>
              </td>
              <Link to="/update">
                <Button variant="success" onClick={() => setData(repo)}>
                  Update
                </Button>
              </Link>
              <td>
                <Button variant="danger" onClick={() => onDelete(repo.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Read;

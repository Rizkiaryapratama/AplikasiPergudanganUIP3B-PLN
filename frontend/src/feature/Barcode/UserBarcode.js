import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./barcode.css";

var Barcode = require("react-barcode");

function FiturBarcode() {
  const [users, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);

  const getUserById = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data.id);
  };

  return (
    <div className="first">
      <div className="title">Lihat Barcode Disini</div>
      <div className="barcode">
        <Barcode value={id} />
      </div>
    </div>
  );
}

export default FiturBarcode;

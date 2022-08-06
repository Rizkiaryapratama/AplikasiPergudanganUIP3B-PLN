import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./barcode.css";

var Barcode = require("react-barcode");

function FiturBarcode() {
  const [stocks, setStock] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getStockById();
    // eslint-disable-next-line
  }, []);

  const getStockById = async () => {
    const res = await axios.get(`http://localhost:5000/stocks/${id}`);
    setStock(res.data.id);
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

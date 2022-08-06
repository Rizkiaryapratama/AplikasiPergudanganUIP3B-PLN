import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {QRCodeSVG} from 'qrcode.react';

function StockQRCode() {
    const [stocks, setStock] = useState([]);
    // eslint-disable-next-line
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
    <div>
        <QRCodeSVG  value={id} size="50" />
    </div>
  )
}

export default StockQRCode
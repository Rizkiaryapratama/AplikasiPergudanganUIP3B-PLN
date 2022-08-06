import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import StockQRCode from "../../feature/QRCode/StockQRCode";
import "../../pages/StockList/stockList.css"

export default function WidgetSm() {

  const [stocks, setStock] = useState([]);

  useEffect(() => {
    getStocks();
    // eslint-disable-next-line
  }, []);

  const getStocks = async () => {
    const response = await axios.get("http://localhost:5000/stocks/?limit=2")
    setStock(response.data);
  };

  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">Data Barang Masuk Terbaru</span>
        <table className="table is-striped is-fullwidth">
          <thead>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock._id}>
                <td>{stock.nama_barang}</td>
                <td>{stock.jumlah}</td>
                <td>
                  <Moment format="DD-MM-YYYY">{stock.tgl_masuk}</Moment>
                </td>
                <td>
                  <div className="qrcode">
                    <StockQRCode />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

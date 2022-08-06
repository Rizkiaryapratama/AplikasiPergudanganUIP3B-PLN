import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./stockList.css";
import swal from "@sweetalert/with-react";
import Moment from "react-moment";
import StockQRCode from "../../feature/QRCode/StockQRCode";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Swal = () => {
  swal({
    content: <div>berhasil menghapus data!</div>,
    button: true,
    icon: "success",
  });
};

const StockList = () => {
  const [stocks, setStock] = useState([]);

  useEffect(() => {
    getStocks();
    // eslint-disable-next-line
  }, []);

  const getStocks = async () => {
    const response = await axios.get("http://localhost:5000/stocks");
    setStock(response.data);
  };

  const deleteStock = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/stocks/${id}`);
      getStocks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <Topbar/>
    <div className="userList">
    <Sidebar/>
      <div className="userListUser">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Jumlah Stock</th>
              <th>Nama Supplier</th>
              <th>Tanggal Masuk</th>
              <th>Kategori</th>
              <th>QR Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={stock._id}>
                <td>{index + 1}</td>
                <td>{stock.nama_barang}</td>
                <td>{stock.jumlah}</td>
                <td>{stock.nama_supplier_stock}
                </td>
                <td>
                  <Moment format="DD-MM-YYYY">{stock.tgl_masuk}</Moment>
                </td>
                <td>{stock.kategori}</td>
                <td>
                  <div className="qrcode">
                    <StockQRCode />
                  </div>
                </td>
                <td>
                  <Link
                    to={`../editstock/${stock._id}`}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      deleteStock(stock._id);
                      Swal();
                    }}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                  {/* <Link to={`/stocks/barcode/${stock._id}`}
                    className="button is-info is-small">
                      Barcode
                    </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="addnew">
          <Link to="../addstock" className="button is-success">
            Add New
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StockList;

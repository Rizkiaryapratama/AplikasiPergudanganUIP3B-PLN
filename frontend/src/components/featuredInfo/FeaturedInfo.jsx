import "./featuredInfo.css";
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsBoxSeam, BsFillPersonLinesFill, BsBoxArrowUpRight } from "react-icons/bs";

export default function FeaturedInfo() {
  const [stocks, setStock] = useState([]);
  const [suppliers, setSupplier] = useState([]);
  const [users, setUser] = useState([]);

  useEffect(() => {
    getStocks();
    getSuppliers();
    getUsers();
    // eslint-disable-next-line
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const getStocks = async () => {
    const response = await axios.get("http://localhost:5000/stocks");
    setStock(response.data);
  };

  const getSuppliers = async () => {
    const response = await axios.get("http://localhost:5000/suppliers");
    setSupplier(response.data);
  };

  const totalSupplier = suppliers.length;

  const totalUser = users.length;

  const totalStock = stocks.reduce(
    (total, currentStock) => (total = total + currentStock.jumlah),
    0
  );

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Barang Masuk</span>
        <div className="featuredMoneyContainer">
          <span className="icons">
            <BsBoxSeam size="100px" />
          </span>
          <span className="featuredMoney">{totalStock}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Supplier</span>
        <div className="featuredMoneyContainer">
          <span className="icons">
            <BsFillPersonLinesFill size="100px" />
          </span>
          <span className="featuredMoney">{totalSupplier}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Barang Keluar</span>
        <div className="featuredMoneyContainer">
        <span className="icons">
            <BsBoxArrowUpRight size="100px" />
          </span>
          <span className="featuredMoney">{totalUser}</span>
        </div>
      </div>
    </div>
  );
}

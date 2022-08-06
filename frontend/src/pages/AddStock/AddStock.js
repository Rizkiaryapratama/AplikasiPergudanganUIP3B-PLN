import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./stock.css";
import swal from "@sweetalert/with-react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Swal = () => {
  swal({
    content: <div>berhasil menambah data!</div>,
    button: true,
    icon: "success",
  });
};

const AddStock = () => {
  const [nama_barang, setNamaBarang] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [nama_supplier_stock, setNamaSupplierStock] = useState("");
  const [tgl_masuk, setTglMasuk] = useState();
  const [kategori, setKategori] = useState("");
  const navigate = useNavigate();
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
    getSuppliers();
    // eslint-disable-next-line
  }, []);

  const getSuppliers = async () => {
    const response = await axios.get("http://localhost:5000/suppliers");
    setSupplier(response.data);
  };

  const saveStock = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/stocks", {
        nama_barang,
        jumlah,
        nama_supplier_stock,
        tgl_masuk,
        kategori,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="user">
        <Sidebar />
        <div className="container">
        <center>
          <h2 className="userTitle">Tambah Stock Barang</h2>
        </center>

          <form onSubmit={saveStock}>
            <div className="field">
              <label className="label">Nama Barang</label>
              <div className="control">
                <input
                  type="text"
                  className="input3"
                  value={nama_barang}
                  onChange={(e) => setNamaBarang(e.target.value)}
                  placeholder="Input nama barang"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Jumlah</label>
              <div className="control">
                <input
                  type="number"
                  className="input3"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  placeholder="Input jumlah barang masuk"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Nama Supplier</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={nama_supplier_stock}
                    onChange={(e) => setNamaSupplierStock(e.target.value)}
                    placeholder="Input Nama Supplier"
                    className="input3"
                  >
                    <option value="" disabled hidden>
                      Input nama Supplier
                    </option>
                    {suppliers.map((supplier) => (
                      <option key={supplier._id} value={supplier.nama_supplier}>
                        {supplier.nama_supplier}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Tanggal Masuk</label>
              <div className="control">
                <input
                  type="date"
                  className="input3"
                  value={tgl_masuk}
                  onChange={(e) => setTglMasuk(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Kategori</label>
              <div className="control">
                <input
                  type="text"
                  className="input3"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  placeholder="Input kategori barang masuk"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button
                  onClick={Swal}
                  type="submit"
                  className="button is-success"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStock;

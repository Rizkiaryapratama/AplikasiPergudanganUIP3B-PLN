import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./user.css";
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

const AddUser = () => {
  const [nama_barang, setNamaBarang] = useState("");
  const [peminjam, setPeminjam] = useState("");
  const [tgl_pinjam, setTglPinjam] = useState([]);
  const [tgl_kembali, setTglKembali] = useState("99/99/9999");
  const [status, setStatus] = useState("Dipinjam");
  const navigate = useNavigate();

  const [stocks, setStock] = useState([]);

  useEffect(() => {
    getStocks();
    // eslint-disable-next-line
  }, []);

  const getStocks = async () => {
    const response = await axios.get("http://localhost:5000/stocks");
    setStock(response.data);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama_barang,
        peminjam,
        tgl_pinjam,
        tgl_kembali,
        status,
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
        <h2 className="userTitle">Tambah Barang</h2>
        </center>

            <form onSubmit={saveUser}>
              <div className="field">
                <label className="label">Nama Barang</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={nama_barang}
                      onChange={(e) => setNamaBarang(e.target.value)}
                      placeholder="Input Nama Barang"
                      className="input3"
                    >
                      <option value="" disabled hidden>
                        Input nama Barang
                      </option>
                      {stocks.map((stock) => (
                        <option key={stock._id} value={stock.nama_barang}>
                          {stock.nama_barang}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Peminjam</label>
                <div className="control">
                  <input
                    type="text"
                    className="input3"
                    value={peminjam}
                    onChange={(e) => setPeminjam(e.target.value)}
                    placeholder="Input nama peminjam"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Pinjam</label>
                <div className="control">
                  <input
                    type="date"
                    className="input3"
                    value={tgl_pinjam}
                    onChange={(e) => setTglPinjam(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Kembali</label>
                <div className="control">
                  <input
                    type="date"
                    className="input3"
                    value={tgl_kembali}
                    onChange={(e) => setTglKembali(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Status</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="input4"
                    >
                      <option value="Dipinjam">Dipinjam</option>
                      <option value="Kembali">Kembali</option>
                    </select>
                  </div>
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

export default AddUser;

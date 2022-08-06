import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./supplier.css";
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
  const [nama_supplier, setNamaSupplier] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_tlp, setNoTlp] = useState("");
  const navigate = useNavigate();

  const saveSupplier = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/suppliers", {
        nama_supplier,
        alamat,
        no_tlp,
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
            <h2 className="userTitle">Tambah Supplier</h2>
          </center>
          <form onSubmit={saveSupplier}>
            <div className="field">
              <label className="label">Nama Supplier</label>
              <div className="control">
                <input
                  type="text"
                  className="input3"
                  value={nama_supplier}
                  onChange={(e) => setNamaSupplier(e.target.value)}
                  placeholder="Input nama supplier"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input3"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Input alamat supplier"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">No Telepon</label>
              <div className="control">
                <input
                  type="number"
                  className="input3"
                  value={no_tlp}
                  onChange={(e) => setNoTlp(e.target.value)}
                  placeholder="Input nomor telepon supplier"
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

export default AddUser;

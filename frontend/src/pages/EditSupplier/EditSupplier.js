import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./supplier.css";
import swal from "@sweetalert/with-react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Swal = () => {
  swal({
    content: <div>berhasil mengupdate data!</div>,
    button: true,
    icon: "success",
  });
};

const EditSupplier = () => {
  const [nama_supplier, setNamaSupplier] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_tlp, setNoTlp] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSupplierById();
    // eslint-disable-next-line
  }, []);

  const getSupplierById = async () => {
    const res = await axios.get(`http://localhost:5000/suppliers/${id}`);
    setNamaSupplier(res.data.nama_supplier);
    setAlamat(res.data.alamat);
    setNoTlp(res.data.no_tlp);
  };

  const updateSupplier = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/suppliers/${id}`, {
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
          <h2 className="userTitle">Edit data Supplier</h2>
          <form onSubmit={updateSupplier}>
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
              <label className="label">Nomor Telepon</label>
              <div className="control">
                <input
                  type="number"
                  className="input3"
                  value={no_tlp}
                  onChange={(e) => setNoTlp(e.target.value)}
                  placeholder="Input no telepon supplier"
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
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSupplier;

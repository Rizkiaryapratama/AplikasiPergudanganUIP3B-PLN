import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./supplierList.css";
import swal from "@sweetalert/with-react";
// import Moment from "react-moment";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Swal = () => {
  swal({
    content: <div>berhasil menghapus data!</div>,
    button: true,
    icon: "success",
  });
};

const SupplierList = () => {
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = async () => {
    const response = await axios.get("http://localhost:5000/suppliers");
    setSupplier(response.data);
  };

  const deleteSupplier = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/suppliers/${id}`);
      getSuppliers();
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
              <th>Nama Supplier</th>
              <th>Alamat</th>
              <th>No Telepon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr key={supplier._id}>
                <td>{index + 1}</td>
                <td>{supplier.nama_supplier}</td>
                <td>{supplier.alamat}</td>
                <td>{supplier.no_tlp}</td>
                <td>
                  <Link
                    to={`../editsupplier/${supplier._id}`}
                    className="button is-info is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      deleteSupplier(supplier._id);
                      Swal();
                    }}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="addnew">
          <Link to="../addsupplier" className="button is-success">
            Add New
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupplierList;

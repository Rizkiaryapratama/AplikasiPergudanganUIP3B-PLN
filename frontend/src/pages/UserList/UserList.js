import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { DataGrid } from "@material-ui/data-grid";
import "./userList.css";
import swal from "@sweetalert/with-react";
import Moment from "react-moment";
import UserQRCode from "../../feature/QRCode/UserQRCode";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Swal = () => {
  swal({
    content: <div>berhasil menghapus data!</div>,
    button: true,
    icon: "success",
  });
};

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="userList">
      <Sidebar/>
        <div className="userListUser">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Barang</th>
                <th>Peminjam</th>
                <th>Tanggal Pinjam</th>
                <th>Tanggal Kembali</th>
                <th>Status</th>
                <th>QR Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.nama_barang}</td>
                  <td>{user.peminjam}</td>
                  <td>
                    <Moment format="DD-MM-YYYY">{user.tgl_pinjam}</Moment>
                  </td>
                  <td>
                    <Moment format="DD-MM-YYYY">{user.tgl_kembali}</Moment>
                  </td>
                  <td>{user.status}</td>
                  <td>
                    <div className="qrcode">
                      <UserQRCode />
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`../edituser/${user._id}`}
                      className="button is-info is-small"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteUser(user._id);
                        Swal();
                      }}
                      className="button is-danger is-small"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/users/barcode/${user._id}`}
                      className="button is-info is-small"
                    >
                      Barcode
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="addnew">
            <Link to="../adduser" className="button is-success">
              Add New
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

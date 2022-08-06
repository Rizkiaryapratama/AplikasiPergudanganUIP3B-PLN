import "./sidebar.css";
import { LineStyle, PermIdentity } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Barang Masuk</h3>
          <ul className="sidebarList">
            <Link to="/stocks" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Data Barang Masuk
              </li>
            </Link>
            <Link to="/addstock" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Tambah Stock
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Barang Keluar</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Data Barang Keluar
              </li>
            </Link>
            <Link to="/adduser" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Tambah Barang Keluar
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Supplier</h3>
          <ul className="sidebarList">
            <Link to="/suppliers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Data Supplier
              </li>
            </Link>
            <Link to="/addsupplier" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Tambah Supplier
              </li>
            </Link>
          </ul>
        </div>

      </div>
    </div>
  );
}

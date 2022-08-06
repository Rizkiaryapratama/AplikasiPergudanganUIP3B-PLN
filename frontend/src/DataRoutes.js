import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import AddUser from "./pages/AddUser/AddUser";
import EditUser from "./pages/EditUser/EditUser";
import AddSupplier from "./pages/AddSupplier/AddSupplier";
import SupplierList from "./pages/SupplierList/SupplierList";
import EditSupplier from "./pages/EditSupplier/EditSupplier";
import UserBarcode from "./feature/Barcode/UserBarcode";
import StockList from "./pages/StockList/StockList";
import AddStock from "./pages/AddStock/AddStock";
import EditStock from "./pages/EditStock/EditStock";

function DataRoutes() {
  return (
    <Router>      
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<UserList />} />

          <Route path="/adduser" element={<AddUser />} />

          <Route path="edituser/:id" element={<EditUser />} />

          <Route path="/suppliers" element={<SupplierList />} />

          <Route path="/addsupplier" element={<AddSupplier />} />

          <Route path="/editsupplier/:id" element={<EditSupplier />} />

          <Route path="/users/barcode/:id" element={<UserBarcode />} />

          <Route path="/stocks" element={<StockList />} />

          <Route path="/addstock" element={<AddStock />} />

          <Route path="editstock/:id" element={<EditStock />} />

          <Route path="/stocks/barcode/:id" element={<UserBarcode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default DataRoutes;

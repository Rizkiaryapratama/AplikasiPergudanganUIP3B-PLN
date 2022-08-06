import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
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
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const userAccount = localStorage.getItem("token");

  return (
    <Router>
      <div className="container">
        <Routes>
          {userAccount && <Route path="/" exact element={<Home />} />}
          {userAccount && <Route path="/stocks" exact element={<StockList />} />}
          {userAccount && <Route path="/users" exact element={<UserList />} />}
          {userAccount && <Route path="/adduser" element={<AddUser />} />}
          {userAccount && <Route path="/edituser/:id" element={<EditUser />} />}
          {userAccount && <Route path="/suppliers" element={<SupplierList />} />}
          {userAccount && <Route path="/addsupplier" element={<AddSupplier />} />}
          {userAccount && <Route path="/editsupplier/:id" element={<EditSupplier />} />}
          {userAccount && <Route path="/users/barcode/:id" element={<UserBarcode />} />}
          {userAccount && <Route path="/addstock" element={<AddStock />} />}
          {userAccount && <Route path="/editstock/:id" element={<EditStock />} />}
          {userAccount && <Route path="/stocks/barcode/:id" element={<UserBarcode />} />}
          
          <Route path="/signup" exact element={<Signup />} />

          <Route path="/login" exact element={<Login />} />

          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/stocks" element={<Navigate replace to="/login" />} />
          <Route path="/users" element={<Navigate replace to="/login" />} />
          <Route path="/adduser" element={<Navigate replace to="/login" />} />
          <Route path="/edituser/:id" element={<Navigate replace to="/login" />} />
          <Route path="/suppliers" element={<Navigate replace to="/login" />} />
          <Route path="/addsupplier" element={<Navigate replace to="/login" />} />
          <Route path="/editsupplier/:id" element={<Navigate replace to="/login" />} />
          <Route path="/users/barcode/:id" element={<Navigate replace to="/login" />} />      
          <Route path="/addstock" element={<Navigate replace to="/login" />} />  
          <Route path="/editstock/:id" element={<Navigate replace to="/login" />} />
          <Route path="/stocks/barcode/:id" element={<Navigate replace to="/login" />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

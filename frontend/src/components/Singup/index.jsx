import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import loginLogo from "../../assets/img/DrawKit Vector Illustration Project Manager/PNG/DrawKit Vector Illustration Project Manager (4).png";
import plnlogo from "../../assets/img/logo-pln.png";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <img src={loginLogo} className={styles.loginlogo} />
        </div>
        <div className={styles.right2}>
          <div className={styles.left}>
            <img src={plnlogo} className={styles.plnlogo} />
            <div className={styles.signin}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h2>Register</h2>
                <p> Buat akun system pergudangan </p>
                <p className={styles.firstnamedesc}>Nama Depan*</p>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  className={styles.input}
                />
                <p className={styles.lastnamedesc}>Nama Belakang*</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className={styles.input}
                />
                <p className={styles.emaildesc}>Email*</p>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <p className={styles.passdesc}>Password*</p>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.signbutton}>
                  Register
                </button>
              </form>
                <p style={{margin: "12px"}}>
                  Sudah memiliki akun?
                  <Link to="/login">
                    <p className={styles.signin}>Sign In</p>
                  </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import loginLogo from "../../assets/img/DrawKit Vector Illustration Project Manager/PNG/DrawKit Vector Illustration Project Manager (4).png";
import plnlogo from "../../assets/img/logo-pln.png";
import computerlogo from "../../assets/img/undraw_cloud_files_wmo8.svg";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.right}>
          <img src={loginLogo} className={styles.loginlogo} />
        </div>
        <div className={styles.right2}>
          <div className={styles.left}>
            <img src={plnlogo} className={styles.plnlogo}/>
            <div className={styles.signup}>
            <center>
              <img src={computerlogo} className={styles.computerlogo}/>
            </center>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p> Masuk ke system pergudangan </p>
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
                  Sign In
                </button>
              </form>
              <p style={{margin: "12px"}}>Belum memiliki akun?
              <Link to="/signup">
                <p className={styles.signup}>
                  Sign Up
                </p>
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

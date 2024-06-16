import React, { useState } from "react";
import styles from "./Login.module.css";
import { SHA512 } from "crypto-js";
import { useHistory } from "react-router-dom";
import url from "../../../Config/url";

const Login = (props) => {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [farmer, setFarmer] = useState(false);
  console.log(props.testProp, "test props");
  const handleToggleLogin = () => {
    setFarmer(!farmer);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (loginEmail === "" || loginPassword === "") {
        alert("Please Fill All The Fields");
        return;
      }
      let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(loginEmail)) {
        alert("Please Enter Valid Email");
        return;
      }
      const hashPassword = SHA512(loginPassword).toString();
      const data = {
        email: loginEmail,
        password: hashPassword,
        role: farmer ? "farmer" : "farm attendant",
      };
      const res = await fetch(`${url}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.status) {
        localStorage.setItem("admin", JSON.stringify(resData.data));
        // window.location.href = "/c/dashboard";
        history.push("/dashboard");
      } else {
        alert("Invalid Username or Password!");
        // alert(resData.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.form_container}>
          <div className={styles.form_inner}>
            <form action="#" className={styles.login}>
              <h3 className={styles.heading}>Login</h3>
              <div className={styles.slide_controls}>
                <input
                  type="radio"
                  name="slide"
                  id="farmer"
                  checked={!farmer}
                />
                <input
                  type="radio"
                  name="slide"
                  id="farm attendant"
                  checked={farmer}
                />
                <label
                  htmlFor="farm attendant"
                  className={`${styles.slide} ${
                    !farmer ? styles.login : styles.signup
                  }`}
                  onClick={handleToggleLogin}
                  style={{
                    color: !farmer ? "#fff" : "#4829B2",
                    backgroundColor: !farmer ? "#4829B2" : "#fff",
                  }}
                >
                  Farm Attendant
                </label>
                <label
                  htmlFor="farmer"
                  className={`${styles.slide} ${
                    farmer ? styles.login : styles.signup
                  }`}
                  onClick={handleToggleLogin}
                  style={{
                    color: farmer ? "#fff" : "#4829B2",
                    backgroundColor: farmer ? "#4829B2" : "#fff",
                  }}
                >
                  Farmer
                </label>
                <div className="slider-tab" />
              </div>
              <div className={styles.field}>
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <div className={styles.pass_link}>
                <a href="#">Forgot password?</a>
              </div>
              <div className={`${styles.field} ${styles.btn}`}>
                <div className={styles.btn_layer}></div>
                <input type="submit" value="Login" onClick={handleLogin} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

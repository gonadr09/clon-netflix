import React from "react";
import { AuthContext } from "../../../features/auth/context/AuthContext";
import useForm from "../../hooks/useForm";
import styles from "./styles/Login.module.css"

const Login = () => {
  const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (
    <>
      <header className={styles.banner}>
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" value={userForm.username} onChange={handleChange} required></input>
          <input type="password" name="password" id="password" placeholder="Password" value={userForm.password} onChange={handleChange} required></input>
          <div>
            <div>
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <a href="#">Need help?</a>
          </div>
          <button>Login</button>
          <p>*This is a fake login, you can enter with any username.</p>
        </form>
      </header>
    </>
  );
};

export default Login;

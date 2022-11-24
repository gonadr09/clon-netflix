import React from "react";
import styles from "./styles/Login.module.css"

const Login = () => {
  return (
    <>
      <header className={styles.banner}>
        <form>
          <h2>Sign In</h2>
          <input type="text" name="username" id="username" placeholder="Username" autoComplete="off"></input>
          <input type="password" name="password" id="password" placeholder="Password"></input>
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

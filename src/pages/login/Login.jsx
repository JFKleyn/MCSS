import { useState } from "react";
import { useNavigate } from "react-router";
import { loginAdmin } from "../../services/auth";
import { Header } from "../../components/Header";
import "./Login.css";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    setErrorMessage("");

    try {
      await loginAdmin(email, password);
      navigate("/admin");
    } catch {
      setErrorMessage("Invalid email or password.");
    }
  }

  return (
    <>
    <Header />
    <section className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <p>ADMIN PORTAL</p>
        <h1>Login</h1>

        {errorMessage && <div className="login-error">{errorMessage}</div>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </section>
    </>
  );
}
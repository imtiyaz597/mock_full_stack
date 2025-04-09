import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input type="email" required className="form-control mb-2" placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="btn btn-primary">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

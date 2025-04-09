import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input type="password" required className="form-control mb-2" placeholder="New password"
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn btn-success">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;

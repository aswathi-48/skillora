import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    alert("Login successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Image */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="w-[320px] space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-primary py-2 rounded font-semibold">
            Login
          </button>

          <p className="text-xs text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

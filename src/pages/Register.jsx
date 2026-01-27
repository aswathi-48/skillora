import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((u) => u.email === form.email);
    if (emailExists) {
      alert("Email already registered");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Image */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="register"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[320px] space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">Create Account</h2>

          <input
            type="text"
            placeholder="Username"
            required
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

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
            Register
          </button>

          <p className="text-xs text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

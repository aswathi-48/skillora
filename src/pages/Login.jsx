import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, ArrowLeft, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

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
    navigate("/");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-neutral-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-neutral-900/90 mix-blend-multiply" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="bg-primary/20 p-3 rounded-full inline-block mb-4">
              <GraduationCap className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-neutral-300">Access your student portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <input
                  type="email"
                  required
                  className="w-full bg-neutral-800/50 border border-neutral-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-secondary transition-colors placeholder-neutral-500"
                  placeholder="student@skillora.edu"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <input
                  type="password"
                  required
                  className="w-full bg-neutral-800/50 border border-neutral-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-secondary transition-colors placeholder-neutral-500"
                  placeholder="••••••••"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-neutral-300">
                <input type="checkbox" className="mr-2 rounded bg-neutral-800 border-neutral-700 text-secondary focus:ring-secondary" />
                Remember me
              </label>
              <a href="#" className="text-secondary hover:text-yellow-400 transition-colors">Forgot Password?</a>
            </div>

            <button className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-neutral-400 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-secondary hover:text-yellow-400 font-semibold transition-colors">
              Register Now
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link to="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

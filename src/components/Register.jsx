import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  console.log(name, "nnnnnnnnn", email, password);
  const handleSubmit = (e) => {
    e.preventDefault("/");
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="bg-gray-900 border border-slate-400 rounded-md bg-opacity-30 relative shadow-xl backdrop-filter backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center mt-4">Register</h1>
        <form action="post" onSubmit={handleSubmit}>
          <div className="relative my-4 px-4">
            <input
              className="block w-72 py-2.5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-white focus:blue-600 peer"
              type="text"
              name="username"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="absolute test-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-500 peer-focuse:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate-y-6">
              Username
            </label>
          </div>
          <div className="relative my-4 px-4">
            <input
              className="block w-72 py-2.5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-white focus:blue-600 peer"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute test-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-500 peer-focuse:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate-y-6">
              Email
            </label>
          </div>
          <div className="relative my-4 px-4">
            <input
              className="block w-72 py-2.5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-white focus:blue-600 peer"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute test-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-600 peer-focuse:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate-y-6">
              password
            </label>
          </div>
          <div className="relative my-4 px-4">
            <input
              className="block w-72 py-2.5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-white focus:blue-600 peer"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute test-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-600 peer-focuse:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:translate-y-6">
              Confirm Password
            </label>
          </div>
          <div className="px-4 py-2">
            <button className="w-full mb-f4 text-[18px] rounded bg-gray-500 hover:bg-gray-600 transition-colors duration-300 mb-4">
              Register
            </button>
          </div>
        </form>

        <div className="px-4 py-2 flex justify-between max-sm:flex-col max-sm:w-0.5">
          <h3>Already have an an account?</h3>
          <Link to="/">
            <button className="px-1 text-[18px] rounded bg-gray-500 hover:bg-gray-600 transition-colors duration-300 ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;

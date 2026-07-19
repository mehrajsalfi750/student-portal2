import { useState } from "react";
import logo from "../assets/logo.png";
import students from "../data/students";

function Login({ onLogin }) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanedStudentId = studentId.trim();
    const cleanedPassword = password.trim();

    const matchedStudent = students.find(
      (student) =>
        student.id === cleanedStudentId &&
        student.password === cleanedPassword
    );

    if (!matchedStudent) {
      setErrorMessage("Invalid Student ID or password.");
      return;
    }

    setErrorMessage("");
    onLogin(matchedStudent);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="bg-blue-950 px-8 py-8 text-center text-white">
          <img
            src={logo}
            alt="Independent University, Bangladesh logo"
            className="mx-auto h-24 w-24 rounded-full bg-white object-contain p-2"
          />

          <h1 className="mt-5 text-2xl font-bold">
            Independent University, Bangladesh
          </h1>

          <p className="mt-2 text-sm text-blue-200">Student Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-8 py-8">
          <div>
            <label
              htmlFor="studentId"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Student ID
            </label>

            <input
              id="studentId"
              type="text"
              value={studentId}
              onChange={(event) => {
                setStudentId(event.target.value);
                setErrorMessage("");
              }}
              placeholder="Enter your Student ID"
              autoComplete="username"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorMessage("");
              }}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-950 px-4 py-3 font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Login
          </button>

          <p className="text-center text-xs text-slate-500">
            Use your university Student ID and password.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
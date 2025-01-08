import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "antd";

export default function LoginPage() {
  const [regNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!regNumber || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      console.log("Logging in with:", regNumber, password);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to the voting page on success
      navigate("/vote");
    } catch (err) {
      setError("Invalid registration number or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <div className="flex justify-center">
          <img
            src="assets/uni_logo.png"
            alt="University Logo"
            className="h-16 mb-2"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-green-600">
          Login to Vote
        </h1>

        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            className="mb-4"
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="regNumber" className="block font-medium text-gray-700">
              Registration Number
            </label>
            <Input
              id="regNumber"
              type="text"
              placeholder="Enter your registration number"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <Input.Password
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <Button
            type="outlined"
            htmlType="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
          >
            Log In
          </Button>
        </form>

        <div className="text-center text-sm mt-4">
          <a
            href="/forgot-password"
            className="text-green-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

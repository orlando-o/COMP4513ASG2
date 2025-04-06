const LoginForm = ({ redirect }) => {
  const handleLogin = () => {
    redirect("gallery");
  };

  const handleRegister = () => {
    redirect("gallery");
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="w-1/2 mr-2 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="w-1/2 ml-2 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

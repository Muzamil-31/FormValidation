import Navbar from "../components/NavBar";
function NotFound() {
  return (
    <>
      <Navbar />
    <div className="flex min-h-100 flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        The URL you entered does not exist.
      </p>

      <a
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Go to Home
      </a>
    </div>
    </>
  );
}

export default NotFound;
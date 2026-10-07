import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="flex gap-2 pb-3">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `rounded-md px-4 py-2 text-sm font-medium ${
            isActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        Form
      </NavLink>

      <NavLink
        to="/records"
        className={({ isActive }) =>
          `rounded-md px-4 py-2 text-sm font-medium ${
            isActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        Records
      </NavLink>
    </nav>
  );
}

export default Navbar;
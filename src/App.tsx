import { NavLink, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import FormRecords from "./components/FormRecords";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <nav className="flex gap-2 border-b border-gray-200 pb-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              Form
            </NavLink>

            <NavLink
              to="/records"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              Records
            </NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/records" element={<FormRecords />} />
          </Routes>
        </div>
      </main>
    </FormProvider>
  );
}

export default App;
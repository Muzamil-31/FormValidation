import { Link, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import FormRecords from "./components/FormRecords";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-gradient-to-br from-violet-100 via-sky-50 to-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <nav className="flex justify-end gap-3">
            <Link
              to="/"
              className="rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50"
            >
              Form
            </Link>

            <Link
              to="/records"
              className="rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm transition hover:border-violet-400 hover:bg-violet-50"
            >
              Records
            </Link>
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
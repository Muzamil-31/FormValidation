import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { FormProvider } from "./context/FormContext";
import Records from "./pages/Records";

function App() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-900 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <Routes>
            <Route>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </FormProvider>
  );
}

export default App;
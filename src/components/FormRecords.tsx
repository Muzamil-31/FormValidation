import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

function FormRecords() {
  const navigate = useNavigate();

  const {
    records,
    deleteRecord,
    editRecord,
  } = useFormContext();

  const handleEdit = (record: typeof records[0]) => {
    editRecord(record);
    navigate("/");
  };

  return (
    <section className="w-full rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-xl shadow-violet-100/70 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
          Employee Records
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-800">
          Records
        </h1>
      </div>

      {records.length === 0 ? (
        <p className="text-sm text-slate-500">
          No records found.
        </p>
      ) : (
        <div className="space-y-4">
          {records.map((record) => (
            <div
              key={record.id}
              className="rounded-2xl border border-violet-100 bg-slate-50 p-5"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <p>
                  <strong>First Name:</strong> {record.firstName}
                </p>

                <p>
                  <strong>Last Name:</strong> {record.lastName}
                </p>

                <p>
                  <strong>Email:</strong> {record.email}
                </p>

                <p>
                  <strong>Phone:</strong> {record.phone}
                </p>

                <p>
                  <strong>Age:</strong> {record.age}
                </p>

                <p>
                  <strong>Gender:</strong> {record.gender}
                </p>

                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {record.dateOfBirth}
                </p>

                <p>
                  <strong>City:</strong> {record.city}
                </p>

                <p>
                  <strong>State:</strong> {record.state}
                </p>

                <p>
                  <strong>Occupation:</strong>{" "}
                  {record.occupation}
                </p>
              </div>

              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => handleEdit(record)}
                  className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-400"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => deleteRecord(record.id)}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FormRecords;
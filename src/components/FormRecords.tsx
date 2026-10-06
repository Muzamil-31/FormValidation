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
    <section className="w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Employee Records</h1>
      </div>

      {records.length === 0 ? (
        <p className="rounded-md bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
          No records found.
        </p>
      ) : (
        <div className="space-y-4">
          {records.map((record) => (
            <div
              key={record.id}
              className="rounded-md border border-gray-200 p-4 sm:p-5"
            >
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">First Name:</strong> {record.firstName}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Last Name:</strong> {record.lastName}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Email:</strong> {record.email}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Phone:</strong> {record.phone}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Age:</strong> {record.age}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Gender:</strong> {record.gender}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Date of Birth:</strong>{" "}
                  {record.dateOfBirth}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">City:</strong> {record.city}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">State:</strong> {record.state}
                </p>

                <p className="text-gray-600">
                  <strong className="font-medium text-gray-900">Occupation:</strong>{" "}
                  {record.occupation}
                </p>
              </div>

              <div className="mt-4 flex justify-end gap-2 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={() => handleEdit(record)}
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => deleteRecord(record.id)}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
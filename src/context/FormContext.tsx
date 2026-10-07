import { createContext, useContext, useEffect, useState } from "react";
import type { FormData, RecordData } from "../types/form";
import { loadRecords, saveRecords } from "../storage/formStorage";

type FormContextType = {
  records: RecordData[];
  editingRecord: RecordData | null;
  addRecord: (data: FormData) => void;
  updateRecord: (data: RecordData) => void;
  deleteRecord: (id: string) => void;
  editRecord: (record: RecordData) => void;
  clearEditing: () => void;
};

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [records, setRecords] = useState<RecordData[]>(loadRecords);

  useEffect(() => {
  saveRecords(records);
}, [records]);

  const [editingRecord, setEditingRecord] =
    useState<RecordData | null>(null);

  const addRecord = (data: FormData) => {
    const newRecord: RecordData = {
      ...data,
      id: Date.now().toString(),
    };

    setRecords((currentRecords) => [
      ...currentRecords,
      newRecord,
    ]);
  };


  const updateRecord = (data: RecordData) => {
    setRecords((currentRecords) =>
      currentRecords.map((record) =>
        record.id === data.id ? data : record
      )
    );
  };

  const deleteRecord = (id: string) => {
    setRecords((currentRecords) =>
      currentRecords.filter((record) => record.id !== id)
    );
  };

  const editRecord = (record: RecordData) => {
    setEditingRecord(record);
  };

  const clearEditing = () => {
    setEditingRecord(null);
  };

  return (
    <FormContext.Provider
      value={{
        records,
        editingRecord,
        addRecord,
        updateRecord,
        deleteRecord,
        editRecord,
        clearEditing,   
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormContext must be used inside FormProvider"
    );
  }

  return context;
}
const STORAGE_KEY = "formRecords";

export function loadRecords() {
  const records = localStorage.getItem(STORAGE_KEY);

  return records ? JSON.parse(records) : [];
}

export function saveRecords(records: unknown[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}
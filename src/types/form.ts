export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  dateOfBirth: string;
  city: string;
  state: string;
  occupation: string;
};

export type RecordData = FormData & {
  id: string;
};
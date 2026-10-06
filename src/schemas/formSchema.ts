import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Phone number is required"),
  age: z.number().min(1, "Age is required"),
  gender: z.string().min(1, "Please select gender"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  occupation: z.string().min(2, "Occupation is required")
});
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/formSchema";
import { useFormContext } from "../context/FormContext";
import type { FormData } from "../types/form";

function Form() {
  const {
    addRecord,
    updateRecord,
    editingRecord,
    clearEditing,
  } = useFormContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
  if (editingRecord) {
    updateRecord({
      ...data,
      id: editingRecord.id,
    });

    clearEditing();
    reset();
    return;
  }

  addRecord(data);
  reset();
};

  useEffect(() => {
  if (editingRecord) {
    reset(editingRecord);
  }
}, [editingRecord, reset]);

  const fieldClassName =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-200";

  return (
    <section className="w-full rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-xl shadow-violet-100/70 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Employee Form
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName")}
              className={fieldClassName}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName")}
              className={fieldClassName}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className={fieldClassName}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              type="text"
              {...register("phone")}
              className={fieldClassName}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Age
            </label>
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
              className={fieldClassName}
            />
            {errors.age && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.age.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Gender
            </label>
            <select
              {...register("gender")}
              className={`${fieldClassName} appearance-none`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth")}
              className={fieldClassName}
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              City
            </label>
            <input
              type="text"
              {...register("city")}
              className={fieldClassName}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              State
            </label>
            <input
              type="text"
              {...register("state")}
              className={fieldClassName}
            />
            {errors.state && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Occupation
            </label>
            <input
              type="text"
              {...register("occupation")}
              className={fieldClassName}
            />
            {errors.occupation && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.occupation.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          >
            {editingRecord ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
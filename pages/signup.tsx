import React from "react";
import { FormProvider, useForm } from "react-hook-form";

interface SignupType {
  email: string;
  password: string;
  password_confirm: string;
}

const SignupPage = () => {
  const methods = useForm<SignupType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: SignupType) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-center text-2xl font-semibold text-blue-900">Sign Up</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <div>
              <label htmlFor="">Email</label>
            </div>

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-400">{errors.email.message}</p>}
          </div>
          <div className="mt-8">
            <div>
              <label htmlFor="">Password</label>
            </div>

            <input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-400">{errors.password.message}</p>}
          </div>
          <div className="mt-8">
            <div>
              <label htmlFor="">Confirm Password</label>
            </div>

            <input
              type="password"
              {...register("password_confirm", {
                required: "Verify your password",
              })}
            />
            {errors.password_confirm && (
              <p className="text-red-400">{errors.password_confirm.message}</p>
            )}
          </div>
          <div className="flex justify-center pt-8">
            <button type="submit">
              <p>Submit</p>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignupPage;

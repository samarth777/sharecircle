import React from "react";
import { FormProvider, useForm } from "react-hook-form";

interface LoginType {
  email: string;
  password: string;
}

const LoginPage = () => {
  const methods = useForm<LoginType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginType) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Log In</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;

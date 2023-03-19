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
    </div>
  );
};

export default LoginPage;

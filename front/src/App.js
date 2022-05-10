import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().integer().positive(),
});

const defaultValues = {
  name: "",
  age: 0,
};

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  function submit(data) {
    console.log(JSON.stringify(data));
  }

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register("name")} type="text" placeholder="nome" />
        {errors.name && "First name is required"}
        <input {...register("age")} type="number" placeholder="idade" />
        {errors.age && "Age must be positive number"}
        <hr />
        <button type="submit">Submeter!</button>
      </form>
    </React.Fragment>
  );
};
export default App;

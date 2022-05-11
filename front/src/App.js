import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@material-ui/core/TextField";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().integer().positive(),
});

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="FIRST_NAME"
          {...register("firstName", {
            required: true,
            onChange: (e) => {
              const newString = Number(e.target.value);
              return newString;
            },
          })}
        />
        {errors.firstName && <span>Campo obrigatório</span>}
        <input
          type="number"
          placeholder="AGE"
          {...register("age", { maxLength: 2 })}
        />
        {errors.age && <h6>Verifique a idade digitada</h6>}
        <hr />
        <button type="submit">Submeter!</button>
      </form>
    </React.Fragment>
  );
};
export default App;

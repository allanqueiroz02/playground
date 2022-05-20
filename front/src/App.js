import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@material-ui/core/TextField";

const schema = yup.object().shape({
  primeiroNome: yup
    .string()
    .uppercase("Foi uppercase")
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  email: yup
    .string()
    .email()
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  idade: yup
    .number()
    .positive("Idade precisa ser um nº positivo")
    .integer()
    .min(18, "Você precisa ter no mínimo 18 anos"),
  senha: yup
    .string()
    .min(4, "A senha deve conter pelo menos 4 caracteres")
    .max(20, "A senha deve conter no máximo 20 caracteres"),
  confirmar_senha: yup
    .string()
    .oneOf([yup.ref("senha"), null], "Senhas não conferem"),
  apenasNumero: yup
    .string()
    .matches(/velocidade/, "Este campo deve receber apenas números"),
});

const defaultValues = {
  primeiroNome: "",
  email: "",
  idade: null,
  senha: null,
  confirmar_senha: null,
  apenasNumero: null,
};

const App = () => {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = methods;

  function submit(data) {
    console.log(data);
  }
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        ...defaultValues,
      });
      alert("Submeteu com sucesso!")
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input
            {...register("primeiroNome")}
            placeholder="Informe nome"
            style={{ display: "block", width: "92%" }}
          />
          {errors["primeiroNome"]?.message}
        </label>
        <label>
          <input
            {...register("email")}
            placeholder="Informe email"
            style={{ display: "block", width: "92%" }}
          />
          {errors["email"]?.message}
        </label>
        <label>
          <input
            {...register("idade")}
            placeholder="Informe idade"
            style={{ display: "block", width: "92%" }}
          />
          {errors["idade"]?.message}
        </label>
        <label>
          <input
            {...register("senha")}
            placeholder="Informe senha"
            style={{ display: "block", width: "92%" }}
          />
          {errors["senha"]?.message}
        </label>
        <label>
          <input
            {...register("confirmar_senha")}
            placeholder="confirmar senhar"
            style={{ display: "block", width: "92%" }}
          />
          {errors["confirmar_senha"]?.message}
        </label>
        <label>
          <input
            {...register("apenasNumero")}
            placeholder="Numero ae caraio"
            style={{ display: "block", width: "92%" }}
          />
          {errors["apenasNumero"]?.message}
        </label>
        <hr />
        <button type="submit">Submeter!</button>
      </form>
    </React.Fragment>
  );
};
export default App;

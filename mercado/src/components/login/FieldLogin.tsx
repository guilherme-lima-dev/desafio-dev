import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import ButtonLogin from './ButtonLogin'
import { useForm } from 'react-hook-form-mui'

type FormValues = {
  email: string
  password: string
};

export default function FieldLogin() {

  // validation 
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form

  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form
    onSubmit={(event) =>
    void handleSubmit(onSubmit)(event)}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>

        <TextField
          id="Email"
          type="email"
          label="Email"
          variant="outlined"
          margin="dense"
          size="small"
          {...register("email", {
            required: "Insira seu email",
            pattern: {
              value:  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i,
              message: "Email invalido"
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          id="Pass"
          type="password"
          label="Senha"
          variant="outlined"
          margin="dense"
          size="small"
          {...register("password", {
            required: "Insira sua senha",
            // Aqui vai a validação da senha
            pattern: {
              value:/^(?=.*[0-9])[0-9a-zA-Z$*&@#]{8,}$/,
              message: "Senha invalida"
            }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <FormControlLabel  control={<Checkbox id='remember'/>} label="Relembre-me" />

        <ButtonLogin title="login" />
      </form>
  )
}

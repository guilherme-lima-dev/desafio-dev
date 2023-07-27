/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm } from 'react-hook-form-mui'
import { schema } from '../../Controller/ValidationRegister'
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodError, z } from "zod"
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import ButtonLogin from './ButtonLogin'

type FormProps = z.infer<typeof schema>;

export default function FieldLogin() {

  const { 
    register, 
    handleSubmit, 
    formState:{ errors } 
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  });

  console.log({ errors })

  const handleForm = (data: FormProps) => {
    console.log({ data });
    try {
      const result = schema.parse(data)
      console.log({result})
    }catch(err){
      if (err instanceof ZodError){
        console.error(err.flatten());
      }
    }
  }

  return (
    <form
    onSubmit={handleSubmit(handleForm)}
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
          {...register('email')}
          error={!! errors.email?.message}
          helperText={errors.email?.message}
        />

        <TextField
          id="Pass"
          type="password"
          label="Senha"
          variant="outlined"
          margin="dense"
          size="small"
          {...register('password')}
          error={!! errors.password?.message}
          helperText={errors.password?.message}
        />

        <FormControlLabel  control={<Checkbox id='remember'/>} label="Relembre-me" />

        <ButtonLogin title="login" />
      </form>
  )
}

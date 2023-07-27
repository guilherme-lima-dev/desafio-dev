/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TextField } from '@mui/material'
import ButtonLogin from '../login/ButtonLogin'
import { useForm } from 'react-hook-form-mui'
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodError, z } from "zod"
import { schema } from '../../Controller/ValidationRegister'

type FormProps = z.infer<typeof schema>;

export default function FieldRegister() {
  
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
          id="nome"
          type="name"
          label="Nome"
          variant="outlined"
          margin="dense"
          size="small"
          {...register('name')}
          error={!! errors.name?.message}
          helperText={errors.name?.message}
        />

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
        
        <TextField
          id="ConPass"
          type="password"
          label="Confirme a Senha"
          variant="outlined"
          margin="dense"
          size="small"
          {...register('confirmPassword')}
          error={!! errors.confirmPassword?.message}
          helperText={errors.confirmPassword?.message}
        />

        <ButtonLogin title="Registrar" />
      </form>
  )
}

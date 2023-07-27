import { z } from "zod"

export const schema = z.object({
  //validation name
  name: z.string({
    required_error: "Preencha este campo"
  }),
  
  //validation email
  email: z.string().email('Email invalido'),
  
  //validation password
  password: z.string().min(8, 'A senha deve ter ao menos 8 digitos')
  .regex (/^(?=.*\d)(?=.*[0-9])(?=.*[A-Z])(?=.*[$*.&@#])[0-9a-zA-Z$*&.@#]{8,}$/, 
  'A senha deve conter ao menos: um número, uma letra maíuscula, um caractere especial '),
  
  //validation Confirmation of password
  confirmPassword: z.string()
}) .refine((fields) => fields.password == fields.confirmPassword, {
  path:['confirmPassword'],
  message: 'As senhas precisam ser iguais'
});

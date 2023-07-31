import { Typography } from "@mui/material";
import BoxShadow from "../components/BoxShadow";
import FieldRegister from "../components/register/FieldRegister";

export default function Register() {
  return (
  <BoxShadow>
    <Typography variant='h3' color="primary">Cadastro</Typography>
    <FieldRegister/>
  </BoxShadow>
  )
}


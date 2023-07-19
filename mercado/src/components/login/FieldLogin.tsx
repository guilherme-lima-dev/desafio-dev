import { Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material';
import ButtonLogin from './ButtonLogin';

function FieldLogin() {
  return (
    <FormControl>
      <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" ></TextField>
         
      <TextField id="outlined-basic" label="Senha" variant="outlined" margin="dense" size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}></TextField>

      <FormControlLabel control={<Checkbox />} label="Relembre-me" />

     <ButtonLogin title='login'/>

    </FormControl>
  )
}
export default FieldLogin

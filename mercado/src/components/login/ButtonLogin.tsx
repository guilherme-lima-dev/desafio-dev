import { Button, Typography } from '@mui/material'
import { IButtonProps } from '../../Interfaces/IButtonProps'


function ButtonLogin(  { title }: IButtonProps ) {
  return (
    <Button type="submit" variant="contained" color="primary">
      <Typography sx={{ color: 'white' }}>{ title }</Typography>
    </Button>
  );
}

export default ButtonLogin
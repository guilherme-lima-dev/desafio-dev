import { Button, Typography } from '@mui/material';

export interface IButtonProps{
  title?: string;
}

function ButtonLogin(  { title }: IButtonProps ) {
  return (
    <Button type="submit" variant="contained" color="primary">
      <Typography sx={{ color: 'white' }}>{ title }</Typography>
    </Button>
  );
}

export default ButtonLogin
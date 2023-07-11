import { Avatar, Box, Button, Checkbox, Container, FormControl, FormControlLabel, TextField, ThemeProvider, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import theme from '../themes/theme';

function FormuControl() {
  return(
    <ThemeProvider theme={theme}>
      <Container  maxWidth='xl' sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            maxWidth: 400,
            minWidth: 400,
            boxShadow: 24,
            py: 4,
            px: 1
          }}> 
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <Box>
            <FormControl>
              <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" >
              </TextField>
              <TextField id="outlined-basic" label="Senha" variant="outlined" margin="dense" size="small" >
              </TextField>
              <FormControlLabel control={<Checkbox />} label="Relembre-me" />
              <Button
                variant="contained"
                color="primary">
                  <Typography sx={{color: 'white' }}>Login</Typography> 
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default FormuControl
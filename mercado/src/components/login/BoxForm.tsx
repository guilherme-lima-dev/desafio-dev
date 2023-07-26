import { Avatar, Box, Container, ThemeProvider } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import theme from '../../themes/theme';
import FieldLogin from './FieldLogin';
import BoxQuest from './BoxQuest';

export default function BoxForm() {
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
          <FieldLogin/>
          <BoxQuest/>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
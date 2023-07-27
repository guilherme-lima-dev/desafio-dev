import { Box, Container } from '@mui/material'
import { IBoxShadow } from '../Interfaces/IBoxShadow'

export default function BoxShadow( {children}: IBoxShadow ) {
  return(
  <Container maxWidth='xl' sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      {children}
    </Box>
  </Container>
  )
}

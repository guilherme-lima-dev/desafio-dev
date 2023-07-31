import { Avatar, ThemeProvider } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import theme from '../../themes/theme'
import FieldLogin from './FieldLogin'
import BoxQuest from './BoxQuest'
import BoxShadow from '../BoxShadow'

export default function BoxForm() {
  return (
    <ThemeProvider theme={theme}>
      <BoxShadow>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <FieldLogin />
        <BoxQuest />
      </BoxShadow>
    </ThemeProvider>
  )
}
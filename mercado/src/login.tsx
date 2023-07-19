import { useState } from 'react'
import Button from '@mui/material/Button';

function Login() {
  const [count, setCount] = useState(0)

  return (
    <Button
      onClick={() => setCount((count) => count + 1)}
      sx={{ color: 'black' }}
      variant="contained">
      Contagem {count}
    </Button>
  )
}

export default Login
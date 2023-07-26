import { Grid, Link } from "@mui/material"

function BoxQuest() {
  return(
    <Grid container sx={{padding: 3}}>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  )
}
export default BoxQuest
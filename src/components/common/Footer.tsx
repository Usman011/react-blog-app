import { Box, Divider, Stack } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { Centered } from './styles'

const Footer = () => {
  return (
    <Box
      pb={1}
      width='100vw'
      position='fixed'
      bottom={0}
      sx={{
        background: '#fff'
      }}
    >
      <Divider />
      <Box pt={2}>
        <Container component='footer' maxWidth='lg'>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant='h6' fontWeight='bold'>
                Blog App
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign='right' justifyContent='space-between'>
              <Centered justifyContent='flex-end'>
                <Stack
                  direction='row'
                  divider={<Divider orientation='vertical' flexItem />}
                  spacing={2}
                >
                  <FacebookIcon />

                  <GitHubIcon />
                  <LinkedInIcon />

                  <EmailIcon />
                </Stack>
              </Centered>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer

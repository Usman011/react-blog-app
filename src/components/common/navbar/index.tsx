import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import useAuthStore, { logoutUser } from 'stores/auth'
import { Centered, Flex, LightStyledLink, StyledLink } from '../styles'
import { INPUT_VARIANTS } from 'types/form.types'
import { ROUTES } from 'types/routes.types'

function ResponsiveAppBar() {
  const auth = useAuthStore()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='lg' sx={{ height: '65px' }}>
        <Toolbar disableGutters>
          <Centered>
            <StyledLink to={ROUTES.HOME}>
              <Typography
                variant='h3'
                sx={{
                  mr: 2,
                  display: { xs: 'block', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                BLOG
              </Typography>
            </StyledLink>
          </Centered>

          <Box sx={{ flexGrow: 1 }} />

          {auth.isAuthenticated ? (
            <Flex gap={2}>
              <LightStyledLink to={ROUTES.CREATE_POST}>
                <Button variant={INPUT_VARIANTS.OUTLINED} color='inherit'>
                  Create Post
                </Button>
              </LightStyledLink>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <StyledLink to={ROUTES.PROFILE_SETTING}>
                    <MenuItem>
                      <Typography textAlign='center'>Profile Setting</Typography>
                    </MenuItem>
                  </StyledLink>

                  <MenuItem onClick={logoutUser}>
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Flex>
          ) : (
            <Flex gap={2}>
              <LightStyledLink to={ROUTES.LOGIN}>
                <Button variant={INPUT_VARIANTS.OUTLINED} color='inherit'>
                  Login
                </Button>
              </LightStyledLink>
              <LightStyledLink to={ROUTES.SIGNUP}>
                <Button variant={INPUT_VARIANTS.OUTLINED} color='inherit'>
                  Signup
                </Button>
              </LightStyledLink>
            </Flex>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar

import { MouseEvent, useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import useAuthStore, { logoutUser } from 'stores/auth'
import { INPUT_VARIANTS } from 'types/form.types'
import { ROUTES } from 'types/routes.types'
import { anchorOrigin } from 'constants/component'
import { Centered, Flex, LightStyledLink, StyledLink, styledLogo } from '../styles'

function ResponsiveAppBar() {
  const auth = useAuthStore()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl' sx={{ height: '65px' }}>
        <Toolbar disableGutters>
          <Centered>
            <StyledLink to={ROUTES.HOME}>
              <Typography variant='h3' sx={styledLogo}>
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
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='user profile' />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={anchorOrigin}
                  keepMounted
                  transformOrigin={anchorOrigin}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    component={LightStyledLink}
                    to={ROUTES.PROFILE_SETTING}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign='center'>Profile Setting</Typography>
                  </MenuItem>

                  <MenuItem onClick={logoutUser}>
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Flex>
          ) : (
            <Flex gap={2}>
              <Button
                component={LightStyledLink}
                to={ROUTES.LOGIN}
                variant={INPUT_VARIANTS.OUTLINED}
                color='inherit'
              >
                Login
              </Button>

              <Button
                component={LightStyledLink}
                to={ROUTES.SIGNUP}
                variant={INPUT_VARIANTS.OUTLINED}
                color='inherit'
              >
                Signup
              </Button>
            </Flex>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar

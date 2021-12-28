import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import logobig from '../assets/images/logo-big.png'
import AccountMenu from '../shared/AccountMenu';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Stack, Badge,
     Toolbar, InputBase, Drawer, List ,ListItem,
    Typography, 
    Box,Divider, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'
// stylesss

const useStyles = makeStyles({
  Abar: {
    backgroundColor: '#fff!important',
    color: "black!important",
    margin: 0
  }
})




// stylesss
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [showSearch, setShowSearch] = React.useState(false)
  const changeVal = () => {
    setShowSearch(!showSearch)
  }
  const classes = useStyles()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className={classes.Abar} position="static" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={1} style={{ justifyContent: 'space-around' }} className="px-5">
            <Grid item md={2}>

              <img src={logobig} alt="" />

            </Grid>
            <Grid item md={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              {showSearch ? (
                <div className="d-flex search_input_bar w-100">
                  <InputBase className="search_input" type="text" placeholder="Search for a specific result" />
                  <Box component="span">
                    <SearchIcon />
                  </Box>
                </div>
              ) :
                (
                  <>
                    <Button color='inherit' component={Link} to='/regcard'>regcard</Button>
                    <Button color='inherit' component={Link} to='/plusaccount'>plusaccount</Button>
                    <Button color='inherit' component={Link} to='/resultitself' >Resultitself</Button>
                    <Button color='inherit' component={Link} to='/accountl2direct'>Accountl2direct</Button>
                    <Button color='inherit' component={Link} to='/accountdirect'>Accountdirect</Button>
                    <Button color='inherit' className="btn btn_primary_gradient"  >Truthifi+</Button>
                  </>
                )}
              <IconButton onClick={changeVal} style={{ marginRight: 24 }}>
                {!showSearch ? <SearchIcon /> : <CloseIcon />}

              </IconButton>
              <Badge>
                <NotificationsNoneIcon style={{ marginRight: 8 }} />
              </Badge>
              <AccountMenu />
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem color='inherit' component={Link} to='/regcard'>regcard</ListItem>

        </List>
        <Divider />
        <List>

          <ListItem color='inherit' component={Link} to='/plusaccount'>plusaccount</ListItem>

        </List>
        <Divider />
        <List>
          <ListItem color='inherit' component={Link} to='/resultitself' >Resultitself</ListItem>


        </List>
        <Divider />
        <List>

          <ListItem color='inherit' component={Link} to='/accountl2direct'>Accountl2direct</ListItem>

        </List>
        <Divider />
        <List>
          <ListItem color='inherit' component={Link} to='/accountdirect'>Accountdirect</ListItem>

        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

      </Main>
    </Box>
  );
}

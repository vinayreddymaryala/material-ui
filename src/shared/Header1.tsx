import React, { useState } from 'react'
import { Button, Stack, AppBar, Toolbar, Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'
//new
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logobig from '../assets/images/logo-big.png'
import AccountMenu from './AccountMenu';
import CloseIcon from '@mui/icons-material/Close';

//search field .........
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
//search field ........
const useStyles = makeStyles({
    Abar: {

       

    }
})



function Header1() {
    
    const [showSearch, setShowSearch] = React.useState(false)
    const changeVal = () => {
        setShowSearch(!showSearch)
    }
    const classes = useStyles();
    return (


        <AppBar style={{ position: 'static',
        backgroundColor: '#fff', 
        color: "black"}}>
            <Toolbar >

                <IconButton color='inherit' style={{ paddingRight: 28 }}>
                    <img src={logobig} alt="" />
                </IconButton>
                {showSearch ? (
                    <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                ) : (
                    <>
                        <Button color='inherit' component={Link} to='/regcard'>regcard</Button>
                        <Button color='inherit' component={Link} to='/plusaccount'>plusaccount</Button>
                        <Button color='inherit' component={Link} to='/resultitself' >Resultitself</Button>
                        <Button color='inherit' component={Link} to='/accountl2direct'>Accountl2direct</Button>
                        <Button color='inherit' component={Link} to='/accountdirect'>Accountdirect</Button>
                        <Button color='inherit' className="btn btn_primary_gradient" component={Link} to='/accountdirect'>Truthifi+</Button>
                    </>
                )}
                <Button onClick={changeVal}>
                    <Search>
                        <SearchIconWrapper>
                            {showSearch ? <CloseIcon />  : <SearchIcon />}
                        </SearchIconWrapper>
                    </Search>
                </Button>
                <Typography pl={2}>
                    <NotificationsNoneOutlinedIcon />
                </Typography>
                <Typography pl={3}>
                    <AccountMenu />
                </Typography>
            </Toolbar>
        </AppBar>

    )
}
export default Header1

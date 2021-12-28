import React, { useState } from 'react'
import { Button, Stack, AppBar, Toolbar,InputBase, Typography, Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'
//new
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import logobig from '../assets/images/logo-big.png'
import AccountMenu from './AccountMenu';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
    Abar: {
        backgroundColor: '#fff!important',
        color: "black!important",
margin:0
    }
})


function Header1() {
    const classes=useStyles()

    const [showSearch, setShowSearch] = React.useState(false)
    const changeVal = () => {
        setShowSearch(!showSearch)
    }
    return (


        <AppBar className={classes.Abar} 
       sx={{position:'static'}}>
            <Toolbar >
                <Grid container spacing={1} style={{ justifyContent: 'space-around' }} className="px-5">
                    <Grid item md={2}>
                        <img src={logobig} alt="" />
                    </Grid>
                    <Grid item md={10} style={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                        {showSearch ? (
                           <div className="d-flex search_input_bar w-100">
                           <InputBase className="search_input" type="text" placeholder="Search for a specific result" />
                           <Box component="span">
                           <SearchIcon/>
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
                            {!showSearch ?   <SearchIcon/>:<CloseIcon /> }
                            
                        </IconButton>
                        
                        <NotificationsNoneOutlinedIcon style={{ marginRight: 8 }} />
                        <AccountMenu />
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>

    )
}
export default Header1

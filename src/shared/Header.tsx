import React, { useState } from 'react'
import {Button,Stack} from '@mui/material'
import { makeStyles } from '@mui/styles';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountMenu from './AccountMenu'
import { Link } from 'react-router-dom'
import searchkey from '../assets/images/search.png'
import search from '../assets/images/search.png'
// import bell from '../assets/images/bell.png'
// import DownArrow from '../assets/images/down-arrow.png'
import logobig from '../assets/images/logo-big.png'

const useStyles =makeStyles({
    btn:{
        textAlign: "center",
    marginTop: "50px"
  },
})
  
function Header() {
    const classes = useStyles();
    const [show, setShow] = useState(true)
    const showSearch = () => {
        setShow(!show)
    }
    
    return (
      
        <div>
            <header>
                <div className='header_wrapper'>
                    <div className='cb_box'>
                        <div className='nav-header p-none pt-lg pb-lg w-100 d-flex align-items-center'>
                            <div className='nav-list' style={{ width: '80%' }}>
                                <ul className='d-flex w-100'>
                                    <li className="logo-truthifi pl-none">
                                        <img src={logobig} alt="" /></li>
                                    {show ? (
                                        <>
                                            <Link to='Regcard' className='my-auto'><li>regcard</li></Link>
                                            <Link to='PlusAccount' className='my-auto'><li>plusaccount</li></Link>
                                            <Link to='Resultitself' className='my-auto'><li>Resultitself</li></Link>
                                            <Link to='Accountl2direct' className='my-auto'><li>Accountl2direct</li></Link>
                                            <Link to='Accountdirect' className='my-auto'><li>Accountdirect</li></Link>
                                            {/* <li className='my-auto'><button type='button' className='btn btn_primary_gradient'>TRUTHIFI +</button></li> */}
                                    <Stack > <Button  variant='contained' >TRUTHIFI +</Button></Stack>
                                        </>
                                    ) : (
                                        <li className='w-100'>
                                            <div className='d-flex search_input_bar'>
                                                <input className='search_input py-2' type='text'
                                                    placeholder='Search for a specific result' />
                                                <span style={{ top: 8 }}><a onClick={showSearch}> {/*<img src={searchkey} alt='' /> */}
                                               <Stack direction='row'> <SearchOutlinedIcon/></Stack></a></span>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className='nav-items' style={{ width: '20%' }}>
                                <ul className=''>
                                    {show && <li> <a onClick={showSearch}> {/*<img src={search} alt='' />*/}
                                    <Stack direction='row'> <SearchOutlinedIcon/></Stack></a></li>} 
                                    {/* <li><img src={bell} alt='' /></li> */}
                                    <li><NotificationsNoneOutlinedIcon/></li>

                                    {/* <li className='dropdown'>
                                        <span className='btn profile_dropdown dropdown-toggle' role='button'
                                            id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false'>
                                            Truthifi  {/*<span className='pl-xs'><img src={DownArrow} alt='' /></span> */}
                                            {/* <span><ArrowDropDownTwoToneIcon/></span> */}
                                        {/* </span>
                                        <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                                            <li><a className='dropdown-item' href='#'>Action</a></li>
                                            <li><a className='dropdown-item' href='#'>Another action</a></li>
                                            <li><a className='dropdown-item' href='#'>Something else here</a></li>
                                        </ul> */}
                                    {/* </li> */} 
<AccountMenu/>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header

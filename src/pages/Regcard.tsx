import React from 'react'
import bannerkey from '../assets/images/bannerkey.png'
import SearchBar from '../compponents/SearchBar'
import searchkey from '../assets/images/search.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SearchIcon from '@mui/icons-material/Search'
import calc from '../assets/images/calc.png'
import Printblue from '../assets/images/print-blue.png'
import ControlledAccordions from '../compponents/ControlledAccordions'
import { Button, Typography,TextField } from '@mui/material';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'




  
function Regcard() {
    return (
        <div>
            <div className='pink__banner'>
                <div className='cb_box'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'></div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='printbtnPos text-center'>
                                <Button style={{backgroundColor: '#fff'}} startIcon={<LocalPrintshopIcon />}>
                                    <Typography variant='body1' className='pr-sm'></Typography>print summary</Button>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='pink__banner_title pt-md'>
                                Result Group
                            </div>
                            <div className='pink__banner_title pt-md'>
                                <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt...</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='text-center'>
                                <img src={bannerkey} alt='' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>



            <div className='cb_box' >
                <div className='pt-xlg pb-lg'>

                     <div style={{width: "100"}} className='d-flex search_input_bar'>{/* <input className='search_input' type='text'
                        placeholder='Search for a specific result' /> */}
                        {/* <TextField id="outlined-basic" className='search_input' label='Search for a specific result'  /> */}
                        <SearchBar/>
                        {/* <span><img src={searchkey} alt='' /></span> */}
                        {/* <span> <SearchOutlinedIcon /></span> */}
                    </div>

                </div>
                <ControlledAccordions />
            

            </div>

        </div>
    )
}
export default Regcard
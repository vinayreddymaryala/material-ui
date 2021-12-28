import React from 'react'
import bannerkey from '../assets/images/bannerkey.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ControlledAccordions from '../components/ControlledAccordions'
import { Button, Typography, Grid } from '@mui/material';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'





function Regcard() {
    return (
        <div>
            <Grid container>
                <Grid item md={12}>
            <div className='pink__banner'>
                <div className='cb_box'>
                    <div className='row'>
                            <div className='printbtnPos text-center'>
                                <Button style={{ backgroundColor: '#fff' }} startIcon={<LocalPrintshopIcon />}>
                                    <Typography variant='body1' className='pr-sm'></Typography>print summary</Button>
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
            </Grid>
            </Grid>

<Grid container spacing={1}>
<Grid item md={12}>
                    <div className='pt-xlg'>
                        <div className='d-flex search_input_bar'> <input className='search_input' type='text'
                            placeholder='Search for a specific result' />
                            <span><SearchIcon /></span></div>
                    </div>
                   </Grid>
                    </Grid>
                    <Grid container>
                    <Grid item md={12}>
            <ControlledAccordions />

            </Grid>
            </Grid>
        </div>

      
    )
}
export default Regcard
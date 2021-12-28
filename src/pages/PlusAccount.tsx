import React from 'react'
import UnstyledTabsBasic from "../components/Plus-unstyledtabs"
import testbrain from '../assets/images/test-brain.png'
import searchpng from '../assets/images/search.png'
import keyicon from '../assets/images/key-icon.png'
import keyiconwhite from '../assets/images/key-icon-white.png'
import keyicongrey from '../assets/images/key-icon-grey.png'
import lock from '../assets/images/lock.png'
import {Typography,Button,Box} from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'



function PlusAccount() {

    return (
        <div>
            <div className='blue__banner'>
                <div className='cb_box'>
                    <div className='pt-xl'>
                        <Button style={{backgroundColor: '#fff',marginLeft:"100" ,display: 'flex', justifyContent: 'right'}} startIcon={<LocalPrintshopIcon />}>
                                    print summary</Button>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='blue__banner_text pt-md'>
                                <Typography>Here's where our “why” statement goes</Typography>
                            </div>
                            <div className='blue__banner_text24 pt-md'>
                                <Typography>And here: a concise “how”</Typography>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='text-center'>
                                <img src={testbrain} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
<UnstyledTabsBasic/>
           
        </div>
    )

}
export default PlusAccount

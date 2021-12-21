import React from 'react'
import testbrain from '../assets/images/test-brain.png'
import searchpng from '../assets/images/search.png'
import keyicon from '../assets/images/key-icon.png'
import keyiconwhite from '../assets/images/key-icon-white.png'
import keyicongrey from '../assets/images/key-icon-grey.png'
import lock from '../assets/images/lock.png'
import Pisdf from './Plus-unstyledtabs'
import {Typography,Button} from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'



function PlusAccount() {

    return (
        <div>
            <div className='blue__banner'>
                <div className='cb_box'>
                    <div className='pt-xl'>
                    {/* <Button type='button' className='btn btn__print'>print summary</Button> */}
                        {/* <Button type='button' className='btn btn__print'>print summary</Button> */}
                        <Button style={{backgroundColor: '#fff',marginLeft:"100" ,display: 'flex', justifyContent: 'right'}} startIcon={<LocalPrintshopIcon />}>
                                    <Typography variant='body1' className='pr-sm'></Typography>print summary</Button>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                            <div className='blue__banner_text pt-md'>
                                <p>Here's where our “why” statement goes</p>
                            </div>
                            <div className='blue__banner_text24 pt-md'>
                                <p>And here: a concise “how”</p>
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
            <div className='cb_box'>
                <div className='tabs'>
                    <input type='radio' name='tabs' id='tabone' />
                    <label htmlFor='tabone'>Overview</label>
                    <div className='tab'>
                        <div className=''>
                            <div className='pt-xlg'>
                                <div className='d-flex search_input_bar'> <input className='search_input' type='text'
                                    placeholder='Search for a specific result' />
                                    <span><img src={searchpng} alt='' /></span> </div>
                            </div>
                            <div className='clearfix'></div>
                            <div className='clearfix'></div>
                            <div className='font20'>Jump in with these lorem ipsum dolor...</div>
                            <div className='clearfix'></div>
                            <div className='clearfix'></div>

                            <div className='inLineDivs'>
                                <div className='card_box'>
                                    <div className='text-center'>
                                        <img src={keyicon} alt='' />
                                    </div>
                                    <div className='card_contnet_title pt-md'>Result Group</div>
                                    <div className='card_text pt-md'>
                                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt...</p>
                                    </div>
                                    <div className='card_text pt-md'>
                                        <p>Result status</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-none'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar' role='progressbar' style={{ width: 100, backgroundColor: '#06bbd9', border: '2px solid rgb(6, 187, 217)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} ></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 pl-xs pr-xs mt-sm'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar  progress-bar-striped bg-warning' style={{ width: 30, border: '2px solid rgb(255, 207, 129)' }}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-xs pl-0'>

                                            <div className='progress progressBar'>
                                                <div className='progress-bar' style={{ border: '2px solid rgb(176, 190, 197)', backgroundColor: '#ECEFF1' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-lg'>
                                        <p className='progressBarValue_Txt'>2 ready, 1 processing, 5 need more info</p>
                                    </div>
                                    <div className='clearfix'></div>
                                    <div className='text-right'>
                                        <button type='button' className='btn btn__blue__primary'>view X Results</button>
                                    </div>
                                </div>
                                <div className='card_box'>
                                    <div className='text-center'>
                                        <img src={keyicon} alt='' />
                                    </div>
                                    <div className='card_contnet_title pt-md'>Result Group</div>
                                    <div className='card_text pt-md'>
                                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt...</p>
                                    </div>
                                    <div className='card_text pt-md'>
                                        <p>Result status</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-none'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar' role='progressbar' style={{ width: '100', backgroundColor: '#06BBD9', border: '2px solid rgb(#06bbd9)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 pl-xs pr-xs mt-sm'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar  progress-bar-striped bg-warning' style={{ width: '30', border: ' 2px solid rgb(255, 207, 129)' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-xs pl-0'>

                                            <div className='progress progressBar'>
                                                <div className='progress-bar' style={{ border: '2px solid rgb(176, 190, 197)', backgroundColor: '#ECEFF1' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-lg'>
                                        <p className='progressBarValue_Txt'>2 ready, 1 processing, 5 need more info</p></div>
                                    <div className='clearfix'></div>
                                    <div className='text-right'>
                                        <button type='button' className='btn btn__blue__primary'>view X Results</button>
                                    </div>
                                </div>
                                <div className='card_box card_aqua'>
                                    <div className='text-center'>
                                        <img src={keyiconwhite} alt='' />
                                        <span><button type='button' className=' btn btn__blue__grey'>truthifi</button></span>
                                    </div>
                                    <div className='card_contnet_title pt-md'>Result Group</div>
                                    <div className='card_text pt-md'>
                                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt...</p>
                                    </div>
                                    <div className='card_text pt-md'>
                                        <p>Result status</p>
                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-none'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar' role='progressbar' style={{ width: 100, backgroundColor: '#06BBD9', border: '2px solid( 6, 187, 217)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 pl-xs pr-xs mt-sm'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar  progress-bar-striped bg-warning' style={{ width: 30, border: '2px solid rgb(255, 207, 129)' }}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-xs pl-0'>

                                            <div className='progress progressBar'>
                                                <div className='progress-bar' style={{ border: '2px solid rgb(176, 190, 19)', backgroundColor: '#ECEFF1' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card_text mt-lg'>
                                        <p className='progressBarValue_Txt'>2 ready, 1 processing, 5 need more info</p></div>

                                    <div className='clearfix'></div>

                                    <div className='text-right'>
                                        <button type='button' className='btn btn__blue__grey'>view X Results</button>
                                    </div>
                                </div>
                                <div className='card_box card_pink'>
                                    <div className='text-center'>
                                        <img src={keyiconwhite} alt='' />
                                    </div>
                                    <div className='card_contnet_title pt-md'>Result Group</div>
                                    <div className='card_text pt-md'>
                                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt...</p>
                                    </div>
                                    <div className='card_text pt-md'>
                                        <p>Result status</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-none'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar' role='progressbar' style={{ width: '100', backgroundColor: '#06BBD9', border: '2px solid rgb(6, 187, 217)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 pl-xs pr-xs mt-sm'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar  progress-bar-striped bg-warning' style={{ width: 30, border: '2px solid rgb(255, 207, 129)' }}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-xs pl-0'>

                                            <div className='progress progressBar'>
                                                <div className='progress-bar' style={{ border: '2px solid rgb(176, 190, 197)', backgroundColor: '#ECEFF1' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card_text mt-lg'>
                                        <p className='progressBarValue_Txt'>2 ready, 1 processing, 5 need more info</p></div>

                                    <div className='clearfix'></div>
                                    <div className='text-right'>
                                        <button type='button' className='btn btn__blue__grey'>view X Results</button>
                                    </div>
                                </div>
                                <div className='card_box card_box_disabled'>
                                    <div className='text-center'>
                                        <img src={keyicongrey} alt='' />
                                    </div>
                                    <div className='card_contnet_title pt-md'>Result Group <span><img src={lock} alt='' /></span></div>
                                    <div className='card_text pt-md'>
                                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt...</p>
                                    </div>
                                    <div className='card_text pt-md'>
                                        <p>Result status</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-none'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar' role='progressbar' style={{ width: '100', backgroundColor: '#06BBD9', border: '2px solid rgb(6, 187, 217)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 pl-xs pr-xs mt-sm'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar  progress-bar-striped bg-warning' style={{ width: '30', border: '2px solid rgb(255, 207, 129)' }}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-xs pl-0'>

                                            <div className='progress progressBar'>
                                                <div className='progress-bar' style={{ border: '2px solid rgb(176, 190, 197)', backgroundColor: '#ECEFF1' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-lg'>
                                        <p className='progressBarValue_Txt'></p></div>
                                    <div className='clearfix'></div>
                                    <div className='text-right'>
                                        <button type='button' className='btn btn_primary_gradient' style={{ width: '100%' }}>upgrade to access</button>
                                    </div>

                                </div>
                                <div className='card_box card_box_disabled'>
                                    <div className='text-center'>
                                        <img src={keyicongrey} alt='' />
                                    </div>
                                    <div className='card_contnet_title pt-md'>Result Group <span><img src={lock} alt='' /></span></div>
                                    <div className='card_text pt-md'>
                                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt...</p>
                                    </div>
                                    <div className='card_text pt-md'>
                                        <p>Result status</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-none'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar' role='progressbar' style={{ width: '100%', backgroundColor: '#06BBD9', border: '2px solid rgb(6, 187, 217)' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 pl-xs pr-xs mt-sm'>
                                            <div className='progress progressBar'>
                                                <div className='progress-bar  progress-bar-striped bg-warning' style={{ width: '30', border: '2px solid (255, 207, 129)' }}></div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-4 mt-sm pr-xs pl-0'>

                                            <div className='progress progressBar'>
                                                <div className='progress-bar' style={{ border: '2px solid rgb(176, 190, 197)', backgroundColor: '#ECEFF1' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card_text mt-lg'>
                                        <p className='progressBarValue_Txt'></p></div>
                                    <div className='clearfix'></div>

                                    <div className='text-right'>
                                        <button type='button' className='btn btn_primary_gradient' style={{ width: '100' }}>upgrade to access</button>
                                    </div>
                                </div>
                            </div>
                            <div className='clearfix'></div>
                            <div className='clearfix'></div><div className='clearfix'></div>
                            <div className='clearfix'></div><div className='clearfix'></div>
                            <div className='clearfix'></div><div className='clearfix'></div>
                            <div className='clearfix'></div><div className='clearfix'></div>
                            <div className='clearfix'></div>
                        </div>

                        <div className='clearfix'></div>
                        <div className='clearfix'></div><div className='clearfix'></div>
                        <div className='clearfix'></div><div className='clearfix'></div>
                        <div className='clearfix'></div><div className='clearfix'></div>
                        <div className='clearfix'></div><div className='clearfix'></div>
                        <div className='clearfix'></div>
                    </div>
                    <input type='radio' name='tabs' id='tabtwo' />
                    <label htmlFor='tabtwo'>All Items</label>
                    <div className='tab'>
                        {/* <form className='searchbox'> */}
                        <input type='search' placeholder='Search......' name='search' className='searchbox-input' required />
                        <input type='submit' className='searchbox-submit' value='GO' />
                        <span className='searchbox-icon'>GO</span>
                        {/* </form> */}
                    </div>

                    <input type='radio' name='tabs' id='tabthree' />
                    <label htmlFor='tabthree'>Group 1 <span className='badge badge-aqua'>1</span></label>
                    <div className='tab'>
                        <h1>Tab Three Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <input type='radio' name='tabs' id='tabfour' />
                    <label htmlFor='tabfour'>Group 2 <span className='badge badge-orange'>5</span></label>
                    <div className='tab'>
                        <h1>Tab 4 Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <input type='radio' name='tabs' id='tabfive' />
                    <label htmlFor='tabfive'>Group 3 <span className='badge badge-bluegrey'>45</span></label>
                    <div className='tab'>
                        <h1>Tab 5 Content</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <Pisdf />
            </div>
        </div>
    )

}
export default PlusAccount

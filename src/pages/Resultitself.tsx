import React from 'react'
import Printwhite from '../assets/images/print-white.png'
import Shareicon from '../assets/images/shareicon.png'


function Resultitself(){
    return(
        <div>

    <div className='white_bckgrnd'>
        <div className='cb_box pb-xlg'>
            <div className='row pt-lg'>
                <div className='col-lg-6 col-md-6'></div>
                <div className='col-lg-6 col-md-6'>
                    <div className='float-right'>
                        <button type='button' className='btn btn__print_blue mr-sm'> 
                            <span className='pr-sm'><img src={Printwhite}/></span>PRINT</button>
                        <button type='button' className='btn btn__print_blue ml-sm'>
                            <span className='pr-sm'><img src={Shareicon}/></span>SHARE</button>
                    </div>
                </div>
            </div>
            
            <div className='text-center'>
<div className='font33 extra_bold'>Individual Result Title <span className='badge-aqua bAquarad_sm font12'>Complete</span>
   <div className='text-center result_descrip_box'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
   </div> 

</div>
            </div>

        </div>
    </div>
    
  <div className='white_bckgrnd'>
   
    <div className='cb_box'>
        <div className='tabs'>
            <input type='radio' name='tabs' id='tabone' />
            <label htmlFor='tabone'>Overview</label>
            <div className='tab p-0'>
            
                <div className='white_bckgrnd'>
                    
            <div className='clearfix'></div>
            <div className='clearfix'></div>
            <div className='clearfix'></div>
            <div className='pt-xl'>
                <div className='result_overviw_box'>
                    <div className='font33'>Katherine, lorem  <span className='badge-aqua bAquarad extra_bold'>ipsum dolor </span>      sit amet, consectetur adipiscing elit
  
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='inLineDivs'>
                        <div>
                            <div className='progress progressBar'>
                                <div className='progress-bar' role='progressbar' style={{width:'40',backgroundColor:'#E35141',border:'2px solid rgb(227, 81, 65)'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                        </div>
                        <div>
                            <div className='progress progressBar'>
                                <div className='progress-bar' role='progressbar' style={{width:'40',backgroundColor:'#FF9C00',border:'2px solid rgb(255, 156, 0)'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                        </div>
                        
                          <div>
                            <div className='progress progressBar'>
                                <div className='progress-bar' role='progressbar' style={{width:'20',backgroundColor:'#00C992',border:'2px solid rgb(0, 201, 146)'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                          </div>
                          
                    </div> 
                </div>
            </div>
    
            
                
                        
                    </div>
                
                    
                </div>
                <input type='radio' name='tabs' id='tabtwo'/>
                <label htmlFor='tabtwo'>Details</label>
                <div className='tab'>
                  <h1>Tab Two Content</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                <input type='radio' name='tabs' id='tabthree'/>
                <label htmlFor='tabthree'>Frequently asked qstn</label>
                <div className='tab'>
                  <h1>Tab Three Content</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              
    
            </div>
            
            
          </div>
  </div>
  
  
        </div>
    )
}
export default Resultitself
    

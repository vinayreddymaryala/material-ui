import React from 'react'
import Bigbanner from '../assets/images/info-big-banner.png'
import Searchpng from '../assets/images/search.png'
import Audio from '../assets/images/audio.png'


function Accountl2direct(){
    return(
        
        <div>
      
    <div className='white__banner'>
        <div className='cb_box'>
            <div className='row'>
                <div className='col-lg-6 col-md-6'></div>
                <div className='col-lg-6 col-md-6'>
                  
                </div>
            </div>
            
            <div className='row'>
                <div className='col-lg-6 col-md-6'>
                    <div className='white__banner_title pt-md'>
                    Result Group
                    </div>
                    <div className='white__banner_title pt-md'>
                        <p>Results based on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='text-center'>
                        <img src={Bigbanner}/>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>


   
  <div className='cb_box'>
    <div className='pt-xlg pb-lg'>
        
        <div className='d-flex search_input_bar'> <input className='search_input' type='text'
                placeholder='Search for a specific result'/> 
            <span><img src={Searchpng}/></span> </div>

    </div>
    <div className='pt-md font20'>Explore these resources</div>
    
        <div className='cleafix'></div>
        <div className='mt-lg mb-lg'>
            <div className='row mb-md'>
                <div className='col-lg-6 col-md -6'>
                    <div className='card_direct'>
                        <div className='text-center'>
                            <img src={Audio}/>
                        </div>
                        <div className='text-center font20'>
                            Resource 1
                        </div>
                        <div className='card_direct_txt'>
                            <p>Expanding on Resource 1: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div className='pt-xl'>
                            <div className='float-right'>
                                <button type='button' className='btn btn__blue__primary'>Contact Us</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className='col-lg-6 col-md -6'>
                    <div className='card_direct'>
                        <div className='text-center'>
                            <img src={Audio}/>
                        </div>
                        <div className='text-center font20'>
                            Resource 2
                        </div>
                        <div className='card_direct_txt'>
                            <p>Expanding on Resource 1: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div className='pt-xl'>
                            <div className='float-right '>
                                <button type='button' className='btn btn__blue__primary'>Contact Us</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className='cleafix'></div>
            <div className='row'>
                <div className='col-lg-6 col-md -6'>
                    <div className='card_direct'>
                        <div className='text-center'>
                        <img src={Audio}/>
                        </div>
                        <div className='text-center font20'>
                            Resource 3
                        </div>
                        <div className='card_direct_txt'>
                            <p>Expanding on Resource 1: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div className='pt-xl'>
                            <div className='float-right'>
                                <button type='button' className='btn btn__blue__primary'>Contact Us</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className='col-lg-6 col-md -6'>
                    <div className='card_direct'>
                        <div className='text-center'>
                        <img src={Audio}/>
                        </div>
                        <div className='text-center font20'>
                            Resource 4
                        </div>
                        <div className='card_direct_txt'>
                            <p>Expanding on Resource 1: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        </div>
                        <div className='pt-xl'>
                            <div className='float-right'>
                                <button type='button' className='btn btn__blue__primary'>Contact Us</button>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
       
        
      </div>

  

        </div>
    )
}
export default Accountl2direct
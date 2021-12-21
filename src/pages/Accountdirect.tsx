import React from "react"
import attach from '../assets/images/attach.png'
import calc from "../assets/images/calc.png"
import downArrow from "../assets/images/down-arrow.png"
import printwhite from "../assets/images/print-white.png"
function Accountdirect(){
    return(
        <>
        <body>
    <div className="white__banner">
        <div className="cb_box">
            <div className="row pt-lg">
                <div className="col-lg-6 col-md-6"></div>
                <div className="col-lg-6 col-md-6">
                    <div className="text-center">
                        <button type="button" className="btn btn__print_blue"> <span className="pr-sm"><img src={printwhite}alt=""/></span>print summary</button>
                    </div>
                </div>
            </div>
            
            <div className="row pt-lg">
                <div className="col-lg-6 col-md-6">
                    <div className="white__banner_title pt-md">
                        Account Page Title - L1
                    </div>
                    <div className="white__banner_title pt-md">
                        <p>
                            Account page info, including lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="text-center">
                        <img src={attach} className="attchopacity" alt=""/>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>


   
  <div className="cb_box">
    <div className="pt-xlg pb-lg">
        
  <div className="font20 mb-md">Showing x of xx results</div>
  
  <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="tableOne"> 
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tablecollapseOne" aria-expanded="true" aria-controls="tablecollapseOne">
 <div className="row">
     <div className="col-lg-6 col-md-6">
         <div className="result_title">
            <span className="pr-sm"><img src={calc}alt=""/></span>  Individual Result Title
            <span className="badge_status_complete ml-sm">complete</span>
         </div>
    
     </div>
     <div className="col-lg-6 col-md-6">
         <div className="qckrslt_Txt"> Quick result blurb. <span className="primary_blueTxt">View the results</span>
             
         </div>
       
     </div>
 </div>
        </button> 
          
     
      </h2>
      <div id="tablecollapseOne" className="accordion-collapse collapse show" aria-labelledby="tableOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
         <div className="pt-lg">
            <button type="button" className="btn btn__black_grey disabled">resubmit in x days</button>
        </div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="tableTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tablecollapseTwo" aria-expanded="false" aria-controls="tablecollapseTwo">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="qckrslt_Txt"><span className="primary_blueTxt">You </span>
                        
                    </div>
                  
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="qckrslt_Txt"><span className="primary_blueTxt">You </span>
                        
                    </div>
                  
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="qckrslt_Txt"><span className="primary_blueTxt">You </span>
                        
                    </div>
                  
                </div>
            </div>
        </button>
      </h2>
      <div id="tablecollapseTwo" className="accordion-collapse collapse" aria-labelledby="tableTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <p>  in voluptate.</p>
        <div className="pt-lg">
            <button type="button" className="btn btn__white__blue">resubmit in x days</button>
        </div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="tableThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tablecollapseThree" aria-expanded="false" aria-controls="tablecollapseThree">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="result_title">
                        Individual Result Title
                       
                    </div>
               
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="qckrslt_Txt"><span className="primary_blueTxt">You </span>
                        
                    </div>
                  
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="qckrslt_Txt"><span className="primary_blueTxt">You </span>
                        
                    </div>
                  
                </div>
            </div>
        </button>
      </h2>
      <div id="tablecollapseThree" className="accordion-collapse collapse" aria-labelledby="tableThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
<p>
loreum</p>            </div>
      </div>
    </div>
    
    
  </div> 
  <table className="table mt-md">
      <thead>
          <tr>
              <th>Name</th>
              <th>Date</th>
              <th>details</th>
              <th>Name2</th>
              <th>Status</th>
              <th>Action</th>
          </tr>
      </thead>
     <tbody>
         <tr>
             <td>
                 <div>
                     <div>name 1</div>
                     <div>name 1</div>
                 </div>
             </td>
             <td>
                 
                <div>
                    <div>date 1</div>
                    <div>date 1</div>
                </div>
             </td>
             <td>
                <div>
                    <div>details 1</div>
                    <div>detail 1</div>
                </div>
             </td>
             <td>
                <div>
                    <div>name 2</div>
                    <div>name 2</div>
                </div>
            </td>
            <td>
                <div><button type="button" className="btn btn_success">status</button></div>
            </td>
            <td>
<div>select <span className="float-right"><img src={downArrow}alt=""/></span></div>
            </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <div>name 1</div>
                        <div>name 1</div>
                    </div>
                </td>
                <td>
                    
                   <div>
                       <div>date 1</div>
                       <div>date 1</div>
                   </div>
                </td>
                <td>
                   <div>
                       <div>details 1</div>
                       <div>detail 1</div>
                   </div>
                </td>
                <td>
                   <div>
                       <div>name 2</div>
                       <div>name 2</div>
                   </div>
               </td>
               <td>
                   <div><button type="button" className="btn btn_pending">status</button></div>
               </td>
               <td>
   <div>select <span className="float-right"><img src={downArrow}alt=""/></span></div>
               </td>
               </tr>
               <tr>
                <td>
                    <div>
                        <div>name 1</div>
                        <div>name 1</div>
                    </div>
                </td>
                <td>
                    
                   <div>
                       <div>date 1</div>
                       <div>date 1</div>
                   </div>
                </td>
                <td>
                   <div>
                       <div>details 1</div>
                       <div>detail 1</div>
                   </div>
                </td>
                <td>
                   <div>
                       <div>name 2</div>
                       <div>name 2</div>
                   </div>
               </td>
               <td>
                   <div><button type="button" className="btn btn_danger">status</button></div>
               </td>
               <td>
   <div>select <span className="float-right"><img src={downArrow}alt=""/></span></div>
               </td>
               </tr>
     </tbody>

  </table>

    </div>
   
        
        
      </div>
 
 
  
 
</body>
      </>  
    )
}
export default Accountdirect

import React from 'react'

const Foter = () => {
  return (
    <div>
    <div className='outerfooter'>

        <div className='getupdate'>
            <h3>Get Updates</h3>
            <p>Get updates and insights on the agribusiness ecosystem <br /> from the eyes of our industry experts.</p>
            <div className='email_btn'>
            <input name="username" type="email" class="tb1"  placeholder="Email"/>
            <input type="submit" value="Submit" className='sb'/>
            </div>
            <br></br>
            <div className='socialmedialogo'>
            <img className='insta'height="40" width="40" src="./logo192.png" alt=""/>
            <img className='insta'height="40" width="40" src="./logo192.png" alt=""/>
            <img className='insta'height="40" width="40" src="./logo192.png" alt=""/>
            <img className='insta'height="40" width="40" src="./logo192.png" alt=""/>
            </div>
            
        </div>
        <div className='contactus'>
            <h3 className='cuh'>Contact Us</h3>
            <p> Nain Center,<br />Sahydri College of Engineering, <br />Adyar Managlore, 575007​​<br />prafalagro@yahoo.in <br />+91 818 811 6677</p>
        </div>
       
       
    </div>
    
   <div className='copytright'> 
  <hr />
  </div>
    
    </div>
  )
}

export default Foter;
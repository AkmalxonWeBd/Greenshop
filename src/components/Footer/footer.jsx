import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer1'>
        <div className='fr1'><img src="./footer icon/1.png" alt="" /> <h1>Garden Care</h1> <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p></div>
        <div className='fr1'><img src="./footer icon/1.png" alt="" /> <h1>Garden Care</h1> <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p></div>
        <div className='fr1'><img src="./footer icon/1.png" alt="" /> <h1>Garden Care</h1> <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p></div>
        <div className='fr2'><h1>Would you like to join newsletters?</h1> <div><input type="text" placeholder='enter your email address...' /><button>Join</button></div> <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p></div>
      </div>
      <div className='Footer2'>
        <div><img src="./logoimg/Logo.png" alt="" /></div>
        <div><CiLocationOn /><h1>70 West Buckingham Ave.
          Farmingdale, NY 11735</h1> </div>
        <div><CiMail /><h1>contact@greenshop.com</h1></div>
        <div><MdOutlinePhoneInTalk /><h1>+88 01911 717 490</h1></div>
      </div>
      <div className='Footer3'>
        <div>
          <h1 className='qh1'>My Account</h1>
          <h1 className='ph1'>My Account <br />
            Our stores <br />
            Contact us <br />
            Career <br />
            Specials</h1>
        </div>
        <div>
          <h1 className='qh1'>My Account</h1>
          <h1 className='ph1'>My Account <br />
            Our stores <br />
            Contact us <br />
            Career <br />
            Specials</h1>
        </div>
        <div>
          <h1 className='qh1'>My Account</h1>
          <h1 className='ph1'>My Account <br />
            Our stores <br />
            Contact us <br />
            Career <br />
            Specials</h1>
        </div>
        <div>
          <h1>Social Media</h1>
          <div className='asd'><CiLocationOn /><CiMail /><MdOutlinePhoneInTalk /><CiLocationOn /><CiMail /></div>
          <h1>We accept</h1>
          <img src="./footer icon/2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
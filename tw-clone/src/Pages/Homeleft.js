import React from 'react'
import { Link } from 'react-router-dom';
import {BsTwitter, BsFillBellFill, BsFillBookmarkHeartFill, BsFillPersonFill} from 'react-icons/bs';
import { ImHome2 } from 'react-icons/im';
import {FaHashtag, FaEnvelope, FaTwitterSquare} from 'react-icons/fa';
import {FiFeather} from 'react-icons/fi';
import {CiCircleMore} from 'react-icons/ci';
import Avatar from "../images/avatar.png";
import "../Pages/Home.css";


// function displaymoreOptions(){
//     return(
//         <div className='more__options__container'>
//             <h1>hello</h1>
            
//         </div>
//     )
// }


function Homeleft() {
  return (
    <div className='left__side'>
        <Link to="/home"><BsTwitter className='logo'/></Link>
        <Link to="/home"><div className='left__side__link__sections'><ImHome2/><span>Home</span></div></Link>
        <Link to="/explore"><div className='left__side__link__sections'><FaHashtag/><span>Explore</span></div></Link>
       <Link to="/notifications"><div className='left__side__link__sections'><BsFillBellFill/><span>Notifications</span></div></Link>
        <Link to="/messages"><div className='left__side__link__sections'><FaEnvelope/><span>Messages</span></div></Link>
        <Link to="/bookmarks"><div className='left__side__link__sections'><BsFillBookmarkHeartFill/><span>Bookmarks</span></div></Link>
       <Link to="/twitter_blue"><div className='left__side__link__sections'><FaTwitterSquare/><span>Twitter Blue</span></div></Link>
        <Link to="/profile"><div className='left__side__link__sections'><BsFillPersonFill/><span>Profile</span></div></Link>
        <div className='left__side__link__sections btn_left'><CiCircleMore/><span>More</span></div>
        <button className='tweet__blue__button'>Tweet</button>
        <button className='tweet__blue__responsive__button'><FiFeather/></button>
        <div className='user__information'>
            <img className='user__information__profilepic' src={Avatar} alt="blue avatar"/>
            {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by kmg design - Flaticon</a> */}
            <div className='user__information_text'>
            <h4 className='user__information__displayName'>display name</h4>
            <h4 className='user__information__handle'>@handle</h4>
            </div>
            <button>...</button>
        </div>
    </div>
  )
}

export default Homeleft



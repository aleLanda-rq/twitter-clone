import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from "../images/avatar.png";
import informationList from '../informationList';
// import {BiMessageRoundedDetail} from "react-icons/bi";
import {FiFeather} from 'react-icons/fi';
import {BsTwitter} from 'react-icons/bs';
import {CiCircleMore} from 'react-icons/ci';
import "../Pages/Home.css";


function Homeleft() {

  const [isActive, setIsActive] = useState(false);

  const moreDisplayOptions =() =>{
    <div className='more__display__options__container'>
       <div className='display__optionts'>{informationList.nonAccordionData?.map((item) =>{
        return(
        <svg key={item.id}>{item.icon}</svg>,
        <h3 key={item.id}>{item.title}</h3>
        )
       })}
       </div>
    <div className="accordion__container">
   <div className="accordion__item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
      <div>{informationList.homeData?.map((item)=>{
        return(
          <h4 key={item.id}>{item.title}</h4>
        )
      })}</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
   
    {isActive && <div className="accordion-content"> {informationList.homeData?.map((item)=>{
      return(
        <>
        <svg key={item.id}>{item.icon}</svg>
        <h4 key={item.id}>{item.content}</h4>
        </>
      )
    })}</div>}
  </div>
</div>
</div>
  }

 
  return (
    <div className='left__side'>
        <Link to="/home"><BsTwitter className='logo'/></Link>
        <Link to="/home"><div className='left__side__link__sections'>{informationList.leftData?.map((item) =>{
          return(
            <>
            <svg key={item.id}>{item.icon}</svg>
            <span key={item.id}>{item.title}</span>
            </>
          )

        })}
        </div></Link>
        <Link to="/home"><div className='left__side__link__sections' onClick={moreDisplayOptions}><CiCircleMore/><span>More</span></div></Link>
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



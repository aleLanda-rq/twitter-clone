import React from 'react'
// import Homeleft from './Pages/Homeleft';
import {SiSimpleanalytics} from "react-icons/si";
import { BsFillBellFill, BsFillBookmarkHeartFill, BsFillPersonFill, BsCardList, BsPersonPlus} from 'react-icons/bs';
import { ImHome2 } from 'react-icons/im';
import {FaHashtag, FaEnvelope, FaTwitterSquare} from 'react-icons/fa';
// import {FiFeather} from 'react-icons/fi';

import {BiMessageRoundedDetail} from "react-icons/bi";

const informationList = () =>{
    const homeData = [{
        id:85759,
        title: "Creator Studio",
        content:"Analytics",
        icon:<SiSimpleanalytics/>
    },
    {
        id:937579,
        title: "Professional Tools",
        content:"Twitter for Professionals",
        icon:<BsFillBookmarkHeartFill/>
    },
    {
        id:3463,
        title: "Settings and Support",
        content:"Settings and Privacy",
        icon:<BsFillPersonFill/>
    }
    ]
    const nonAccordionData=[{
        id:23795,
        title:"Topics",
        icon:<BiMessageRoundedDetail/>,
    },
    {
        id:3497957,
        title:"Lists",
        icon:<BsCardList/>,
    },
        {
            id:3737,
            title:"Twitter Circle",
            icon:<BsPersonPlus/>
        }
       

    ]

    const leftData =[{
        id:34564,
        icon: <ImHome2/>,
        title: "Home"
    },
    {
        id:34579,
        icon: <FaHashtag/>,
        title: "Explore"
    },
    {
        id:7899,
        icon: <BsFillBellFill/>,
        title: "Notifications"
    },
    {
        id:2357,
        icon: <FaEnvelope/>,
        title: "Messages"
    },
    {
        id:8790,
        icon: <BsFillBookmarkHeartFill/>,
        title: "Bookmarks"
    },
    {
        id:93749,
        icon: <FaTwitterSquare/>,
        title: "Twitter Blue"
    },
    {
        id:54667,
        icon: <BsFillPersonFill/>,
        title: "Profile"
    }
    ];

}


export default informationList

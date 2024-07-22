import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { VscHistory } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <IoIosMenu className='menu' color='white' size={25} onClick={() => setExtended(prev=>!prev)} />

            <div className='new-chat'>
                <GoPlus className='plus' size={20}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
                 ? <div className="recent">
                     <p className="recent-title">
                         Recent
                     </p>
                     <div className="recent-entry">
                         <LuMessageSquare />
                         <p>What is react ...</p>
                     </div>
                    </div>
                 : null
            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <GoQuestion size={21} />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <VscHistory size={21}/>
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <IoSettingsOutline size={21}/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar

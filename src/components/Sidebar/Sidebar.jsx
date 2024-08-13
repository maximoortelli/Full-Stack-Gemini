import { useContext, useState } from 'react'
import './Sidebar.css'
import { IoIosMenu } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { VscHistory } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const [showHelpModal, setShowHelpModal] = useState(false);
    const [showActivityModal, setShowActivityModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const {onSend, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

    const loadPropmt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSend(prompt)
    }

    const toggleModal = (modal) => {
        if (!extended) {
            setExtended(true);
            return;
        }
        if (modal === 'help') setShowHelpModal(prev => !prev);
        if (modal === 'activity') setShowActivityModal(prev => !prev);
        if (modal === 'settings') setShowSettingsModal(prev => !prev);
    };

  return (
    <div className='sidebar'>
        <div className="top">
            <IoIosMenu className='menu' color='white' size={25} onClick={() => setExtended(prev=>!prev)} />

            <div onClick={() => newChat()} className='new-chat'>
                <GoPlus className='plus' size={20}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
                 ? <div className="recent">
                     <p className="recent-title">
                         Recent
                     </p>
                     {prevPrompts.map((item) => {
                        return (
                             <div onClick={() => loadPropmt(item)} className="recent-entry">
                                  <LuMessageSquare />
                                  <p>{item.slice(0,18)} ...</p>
                             </div>
                        )
                     })}
                     
                    </div>
                 : null
            }
        </div>
        <div className="bottom">
                <div className="bottom-item recent-entry" onClick={() => toggleModal('help')}>
                    <GoQuestion size={21} />
                    {extended ? <div>Help</div> : null}
                    {showHelpModal && (
                        <div className="modal-help">
                            <div>
                                <p>Privacy Center</p>
                            </div>
                            <div>
                                <p>Updates</p>
                            </div>
                            <div>
                                <p>Help</p>
                            </div>
                            <div>
                                <p>FAQs</p>
                            </div>
                            <div>
                                <p>About Gemini Advanced</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="bottom-item recent-entry" onClick={() => toggleModal('activity')}>
                    <VscHistory size={21} />
                    {extended ? <p>Activity</p> : null}
                    {showActivityModal && (
                        <div className="modal-activ">
                            <p>Activity Content</p>
                        </div>
                    )}
                </div>
                <div className="bottom-item recent-entry" onClick={() => toggleModal('settings')}>
                    <IoSettingsOutline size={21} />
                    {extended ? <p>Settings</p> : null}
                    {showSettingsModal && (
                        <div className="modal-content">
                            <p>Settings Content</p>
                        </div>
                    )}
                </div>
            </div>
    </div>
  )
}

export default Sidebar

import { useContext } from 'react';
import './Main.css'; // Assuming the CSS file exists in the same directory
import { assets } from '../../assets/assets'; // Assuming the assets object is defined
import { Context } from '../../context/Context'; // Assuming the Context component exists

const Main = () => {
  const {
    onSend,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  return (
    <div className="main">
      <div className="nav">
        <a href='/'><p>Gemini</p></a>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Human</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick('Suggest beautiful places to see on an upcoming road trip')}>
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card" onClick={() => handleCardClick('Briefly summarize this concept: urban planning')}>
                <p>Briefly summarize this concept: urban planning.</p>
                <img src={assets.bulb_icon} alt="Light Bulb Icon" />
              </div>
              <div className="card" onClick={() => handleCardClick('Brainstorm team bonding activities for our work retreat')}>
                <p>Brainstorm team bonding activities for our work retreat.</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div className="card" onClick={() => handleCardClick('Improve the readability of the following code')}>
                <p>Improve the readability of the following code:</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
                {loading
                ?(
                <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>)
                }
              
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Call the onSend function here
                  onSend();
                }
              }}
            />
            <div>
              <img src={assets.mic_icon} alt="Microphone Icon" />
              {input ? (<img
                src={assets.send_icon}
                alt="Send Icon"
                onClick={() => onSend()}
              /> ):(null)}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check
            its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;


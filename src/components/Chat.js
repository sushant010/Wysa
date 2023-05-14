import React, { useState, useEffect } from "react";
import { SketchPicker } from 'react-color';
import './chat.css';
import { useNavigate } from "react-router-dom";
import { chatMessages } from "./chatMessages";



function Chat() {
    
  const navigate = useNavigate();
  
  const messages = chatMessages;

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);


  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)');
  const [textColor, setTextColor] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);



  useEffect(() => {
    const storedBackgroundColor = localStorage.getItem("backgroundColor");
    const storedTextColor = localStorage.getItem("textColor");
  
    if (storedBackgroundColor) {
      setBackgroundColor(storedBackgroundColor);
    }
    if (storedTextColor) {
      setTextColor(storedTextColor);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("textColor", textColor);
  }, [backgroundColor, textColor]);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messageIndex < messages.length - 1) {
        setMessageIndex(messageIndex + 1);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [messageIndex, messages]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("textColor", textColor);
    navigate("/");
  };

  
  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const chatStyle = {
    background: backgroundColor,
    color: textColor,
    padding: '20px',
    borderRadius: '5px',
  };

  

  return (
    <div style={chatStyle}>
      <div className="ChatContainer">
        <h1> Wysa Chat</h1>
        {messages.slice(0, messageIndex + 1).map((message, index) => (
          <div key={index} className="message bot">
          <div key={index} dangerouslySetInnerHTML={{ __html: message }} />
            {/* {message} */}

          
          </div>

          
        ))}
      

<div class="input-container">
  <input type="text" class="form-control" placeholder="Write message..." />
  <i class="fa-solid fa-paper-plane fa-2xl" ></i>
</div>





        
      </div>
      
      <div className="top-right-buttons">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button className="theme-change-button" onClick={toggleColorPicker}>Theme Change</button>
        {showColorPicker && (
          <div>
            <div>
              <label>Background Color:</label>
              <SketchPicker color={backgroundColor} onChange={handleBackgroundColorChange} />
            </div>
            <div>
              <label>Text Color:</label>
              <SketchPicker color={textColor} onChange={handleTextColorChange} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;

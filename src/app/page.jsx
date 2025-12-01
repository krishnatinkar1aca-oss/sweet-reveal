"use client"; // **यह लाइन इंटरेक्टिविटी के लिए ज़रूरी है**

import React, { useState, useRef, useEffect } from 'react';
import './app/globals.css'; // CSS फ़ाइल को सही ढंग से इम्पोर्ट करें

export default function App() {
  const [step, setStep] = useState(1); 
  const youtubePlayerRef = useRef(null); 

  const postMessageToPlayer = (command, args) => {
    if (youtubePlayerRef.current) {
      youtubePlayerRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: args || [] }), 
        "*"
      );
    }
  };

  const handleNext = () => {
    if (step === 2) {
      setStep(3);
      postMessageToPlayer('playVideo');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="container">
      <div className="card">

        {/* YouTube Embed (Sultan version) */}
        <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', zIndex: -1 }}>
          <iframe 
            ref={youtubePlayerRef}
            id="youtube-player"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/_51KXfwcPMs?autoplay=0&enablejsapi=1&controls=0&modestbranding=1&loop=1&playlist=_51KXfwcPMs" 
            title="Bulleya Song" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        {/* =======================
            स्टेप 1: शुरुआती मैसेज 
           ======================= */}
        {step === 1 && (
          <>
            <h1>Something Special! 👋</h1>
            <p>I know you are naraz right now, but this is something special just for you...</p> 
            <p>And trust me... only YOU deserve this ✨</p>
            <button onClick={handleNext}>Ready to Know</button>
          </>
        )}

        {/* =======================
            स्टेप 2: इंटरमीडिएट मैसेज 
           ======================= */}
        {step === 2 && (
          <div className="reveal-content step-2">
            <h2>Just one step more!</h2>
            <p>This is for you...</p>
            <button onClick={handleNext}>Show Me</button>
          </div>
        )}

        {/* =======================
            स्टेप 3: फाइनल गाना, लिरिक्स और मैसेज 
           ======================= */}
        {step === 3 && (
          <div className="reveal-content step-3">

            <h3>♫ Bulleya (Sultan) ♫</h3>

            <div className="lyrics">
               <p>Tu yaad kare ya na mujhko,</p>
               <p>Mere jeene mein andaaz tera,</p>
               <br/>
               <p>Sar aankhon par hai teri naraazi,</p>
               <p>Meri haar mein hai koi raaz tera.</p>
            </div>

            <hr style={{margin: '15px 0', borderTop: '1px dashed #e4e4e4'}}/> 

            {/* 💖 आपका फाइनल माफ़ी का मैसेज 💖 */}
            <h2 style={{color: '#ff69b4', fontSize: '1.2em', marginBottom: '5px'}}>🌹 This is for you 💖</h2>
            <p style={{fontWeight: 'bold'}}>Sorry, **Lakshu**! Ab maan jao naa yrr... So Sorry, mine bestie! 💓</p>


            <p className="footer-message">@Krishna</p>
          </div>
        )}

        <p className="footer">@Krishna</p> 
      </div>
    </div>
  );
}

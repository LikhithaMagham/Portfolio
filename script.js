
      // Chatbot Modal Handling
const modal = document.getElementById("chatbotModal");
const chatbotBtn = document.getElementById("chatbotBtn");
const closeBtn = document.querySelector(".close");
    
chatbotBtn.onclick = () => { 
  modal.style.display = "block"; 
};
    closeBtn.onclick = () => { 
      modal.style.display = "none"; 
    };
    window.onclick = (e) => { 
      if (e.target === modal) modal.style.display = "none"; 
    };
    
    // Simple Chatbot Logic (Keyword-based)
    const chatArea = document.getElementById("chatArea");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    
    const responses = [
      {
        keywords: ["experience", "nxtwave"],
        response: "I worked as a Teaching Assistant at NxtWave (May 2024 - Aug 2024), handling 300+ student doubts."
      },
      {
        keywords: ["gps", "tracker"],
        response: "I developed a GPS Tracker using TinyGPS++, a 4G GSM module, and integrated it with the ThingSpeak API."
      },
      {
        keywords: ["electrolyzer", "matlab"],
        response: "I modeled an electrolyzer in Matlab to simulate hydrogen production efficiency, validated with theory and experiment."
      },
      {
        keywords: ["skills", "technical"],
        response: "My skills include C, C++, Python, HTML, CSS, SQL, Node.js, and JavaScript, along with tools like VS Code and Jupyter Notebook."
      },
      {
        keywords: ["education", "iit", "dharwad"],
        response: "I'm pursuing a B.Tech in EECE at IIT Dharwad (2022-Present) with a CPI of 7.01."
      }
    ];
    
    sendBtn.addEventListener("click", () => {
      const query = userInput.value.toLowerCase().trim();
      if (!query) return;
      
      // Display user's message
      const userMsg = document.createElement("div");
      userMsg.textContent = "You: " + userInput.value;
      chatArea.appendChild(userMsg);
    
      // Determine bot response
      let botReply = "I'm not sure about that. Ask me about my experience, education, or projects.";
      for (const pair of responses) {
        if (pair.keywords.some(k => query.includes(k))) {
          botReply = pair.response;
          break;
        }
      }
    
      // Display bot's message
      const botMsg = document.createElement("div");
      botMsg.textContent = "Bot: " + botReply;
      botMsg.style.marginTop = "10px";
      chatArea.appendChild(botMsg);
    
      userInput.value = "";
      chatArea.scrollTop = chatArea.scrollHeight;
    });

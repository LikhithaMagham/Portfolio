<script>
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
    { keywords: ["experience", "nxtwave"], response: "I worked as a Teaching Assistant at NxtWave." },
    { keywords: ["gps", "tracker"], response: "I developed a GPS Tracker using TinyGPS++." },
    { keywords: ["skills"], response: "I am skilled in C, C++, Python, JavaScript, and more." }
  ];

  sendBtn.addEventListener("click", () => {
    const query = userInput.value.toLowerCase().trim();
    if (!query) return;

    // Display user message
    chatArea.innerHTML += `<div>You: ${userInput.value}</div>`;
    
    // Get bot response
    let botReply = "I don't know about that. Ask me about experience, skills, or projects.";
    for (const pair of responses) {
      if (pair.keywords.some(k => query.includes(k))) {
        botReply = pair.response;
        break;
      }
    }

    // Display bot response
    chatArea.innerHTML += `<div>Bot: ${botReply}</div>`;
    userInput.value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
  });
</script>

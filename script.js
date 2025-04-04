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

// Chatbot Logic
const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const responses = [
  { keywords: ["experience"], response: "I worked as a Teaching Assistant at NxtWave." },
  { keywords: ["gps"], response: "I built a GPS tracker with real-time location updates." },
  { keywords: ["skills"], response: "I have skills in C, C++, Python, HTML, CSS, and JavaScript." }
];

sendBtn.addEventListener("click", () => {
  const query = userInput.value.toLowerCase().trim();
  if (!query) return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + userInput.value;
  chatArea.appendChild(userMsg);

  let botReply = "I’m not sure about that. Ask me about my skills or experience.";
  for (const pair of responses) {
    if (pair.keywords.some(k => query.includes(k))) {
      botReply = pair.response;
      break;
    }
  }

  const botMsg = document.createElement("div");
  botMsg.textContent = "Bot: " + botReply;
  chatArea.appendChild(botMsg);
  userInput.value = "";
});

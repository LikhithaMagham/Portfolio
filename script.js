// Modal Handling for Chatbot
const modal = document.getElementById("chatbotModal");
const chatbotBtn = document.getElementById("chatbotBtn");
const closeBtn = document.querySelector(".close");

chatbotBtn.onclick = () => { modal.style.display = "block"; };
closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Chatbot Logic
const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Mapping of keywords to resume details.
const responses = [
  {
    keywords: ["experience", "teaching assistant", "nxtwave"],
    response: "I worked as a Teaching Assistant at NxtWave (May 2024 to Aug 2024) where I solved around 300 student doubts and refined my debugging skills."
  },
  {
    keywords: ["gps", "tracker", "location"],
    response: "I developed a GPS Tracker project using TinyGPS++, 4G GSM for data transmission, and a web interface with Leaflet.js for real-time tracking."
  },
  {
    keywords: ["electrolyzer", "model", "matlab"],
    response: "I modeled an electrolyzer in Matlab to simulate hydrogen production efficiency, validating the results with theoretical and experimental data."
  },
  {
    keywords: ["skills", "technical"],
    response: "My technical skills include C, C++, Python, HTML, CSS, SQL, Node.js, and JavaScript along with tools like VS Code, Jupyter Notebook, and frameworks like Bootstrap."
  },
  {
    keywords: ["education", "iit", "dharwad"],
    response: "I'm pursuing a B.Tech in EECE at IIT Dharwad (2022-Present) with a CPI of 7.01."
  },
  {
    keywords: ["certification", "html", "css", "javascript"],
    response: "I have certifications in HTML, CSS, Bootstrap, FlexBox, JavaScript, SQL, and Python."
  }
];

sendBtn.addEventListener("click", () => {
  const query = userInput.value.toLowerCase().trim();
  if (!query) return;
  
  // Display user's query
  const userDiv = document.createElement("div");
  userDiv.textContent = "You: " + userInput.value;
  chatArea.appendChild(userDiv);
  
  // Determine the appropriate bot response based on keywords
  let botResponse = "I'm not sure about that. Can you ask about my education, experience, projects, or skills?";
  for (const pair of responses) {
    if (pair.keywords.some(keyword => query.includes(keyword))) {
      botResponse = pair.response;
      break;
    }
  }
  
  // Display bot response
  const botDiv = document.createElement("div");
  botDiv.textContent = "Bot: " + botResponse;
  botDiv.style.marginTop = "10px";
  chatArea.appendChild(botDiv);
  
  // Clear input and scroll to the bottom
  userInput.value = "";
  chatArea.scrollTop = chatArea.scrollHeight;
});

document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Chatbot Modal Handling
  const modal = document.getElementById("chatbotModal");
  const chatbotBtn = document.getElementById("chatbotBtn");
  const closeBtn = document.querySelector(".close");

  if (chatbotBtn && modal && closeBtn) {
    chatbotBtn.onclick = () => { modal.style.display = "block"; };
    closeBtn.onclick = () => { modal.style.display = "none"; };
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
  }

  // 🔹 Chatbot Response System
  const chatArea = document.getElementById("chatArea");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  if (chatArea && userInput && sendBtn) {
    const responses = [
      { keywords: ["experience", "nxtwave"], response: "I worked as a Teaching Assistant at NxtWave." },
      { keywords: ["gps", "tracker"], response: "I developed a GPS Tracker using TinyGPS++ and a 4G GSM module." },
      { keywords: ["electrolyzer", "matlab"], response: "I modeled an electrolyzer in Matlab to analyze hydrogen production efficiency." },
      { keywords: ["skills", "technical"], response: "I am skilled in C, C++, Python, HTML, CSS, SQL, Node.js, and JavaScript." },
      { keywords: ["education", "iit", "dharwad"], response: "I'm a B.Tech student at IIT Dharwad (2022-Present) with a CPI of 7.01." }
    ];

    sendBtn.addEventListener("click", () => {
      const query = userInput.value.toLowerCase().trim();
      if (!query) return;

      // Display user's message
      chatArea.innerHTML += `<div><strong>You:</strong> ${userInput.value}</div>`;

      // Determine bot response
      let botReply = "I don't know about that. Ask me about my experience, education, or projects.";
      for (const pair of responses) {
        if (pair.keywords.some(k => query.includes(k))) {
          botReply = pair.response;
          break;
        }
      }

      // Display bot's message
      chatArea.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
      userInput.value = "";
      chatArea.scrollTop = chatArea.scrollHeight;
    });
  }

  // 🔹 Smooth Scrolling for Navbar Links
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 🔹 Active Section Highlight in Navbar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));

  // 🔹 Handling Other Buttons (If Any)
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      console.log(`Button "${button.innerText}" clicked!`);
      alert(`Button "${button.innerText}" clicked!`);
    });
  });

});

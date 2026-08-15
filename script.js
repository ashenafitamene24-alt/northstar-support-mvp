// i member 2 will be writing the code for the dispaly
//member 3 and 4 to define the functions<

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
 
function getTimestamp() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}
 
function addMessage(text, sender) {
  const group = document.createElement("div");
  group.classList.add("message-group", sender); // sender = "bot" or "user"
 
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
 
  const time = document.createElement("div");
  time.classList.add("timestamp");
  time.textContent = getTimestamp();
 
  group.appendChild(msg);
  group.appendChild(time);
  chatMessages.appendChild(group);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function routeMessage(userText) {
  const text = userText.toLowerCase();
 
  const isOrderQuestion =
    text.includes("order") || text.includes("shipped") || text.includes("where is");
 
  const isReturnQuestion =
    text.includes("return") || text.includes("refund");
 
  if (isOrderQuestion && typeof handleOrderStatus === "function") {
    return handleOrderStatus(userText);
  }
 
  if (isReturnQuestion && typeof handleReturnsRefunds === "function") {
    return handleReturnsRefunds(userText);
  }
 
  return "I can help with order status or returns & refunds. Could you rephrase your question?";
}
 
function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
 
  addMessage(text, "user");
  chatInput.value = "";
 
  setTimeout(() => {
    const reply = routeMessage(text);
    addMessage(reply, "bot");
  }, 400);
}
 
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
 
// Initial greeting, shown once the page loads
window.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "Hi! I'm the Northstar support bot. I can help you with order status and returns & refunds. How can I help you today?",
    "bot"
  );
});
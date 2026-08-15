// i member 2 will be writing the code for the dispaly
//member 3 and 4 to define the functions

function handleOrderStatus(userText) {
  const match = userText.match(/#?\d{4,6}/);
  if (match) {
    const result = getOrderStatus(match[0]);
    if (result.found) {
      let reply = result.message;
      if (result.trackingNumber) reply += `\nTracking: ${result.trackingNumber} via ${result.carrier}`;
      if (result.estimatedDelivery) reply += `\nEst. Delivery: ${result.estimatedDelivery}`;
      return reply;
    }
    return result.message;
  }
  return "Please share your order number (e.g. #1001) so I can look that up for you.";
}

function handleReturnsRefunds(userText) {
  const text = userText.toLowerCase();

  if (text.includes("damaged") || text.includes("broken") || text.includes("defective")) {
    return "Sorry about that! Please email support@northstarretail.com with photos of the damaged item and your order number. We'll send a replacement or full refund within 2 business days.";
  }
  if (text.includes("refund") && (text.includes("when") || text.includes("how long") || text.includes("status"))) {
    return "Refunds are processed within 5–7 business days after we receive your return. Store credit is issued immediately.";
  }
  return "Northstar 30-Day Return Policy:\n1. Initiate return at northstarretail.com/returns within 30 days.\n2. Items must be unused in original packaging.\n3. A prepaid label will be emailed to you.\n4. Drop off at any FedEx or UPS location.\n5. Refund in 5–7 business days once received.";
}

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
  group.classList.add("message-group", sender);

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

  // If message contains an order number, always route to order status
  const hasOrderNumber = /#?\d{4,6}/.test(userText);
  if (hasOrderNumber) {
    return handleOrderStatus(userText);
  }

  const isOrderQuestion =
    text.includes("order") || text.includes("shipped") || text.includes("where is") ||
    text.includes("track") || text.includes("delivery") || text.includes("package");

  const isReturnQuestion =
    text.includes("return") || text.includes("refund") || text.includes("damaged");

  if (isOrderQuestion) return handleOrderStatus(userText);
  if (isReturnQuestion) return handleReturnsRefunds(userText);

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
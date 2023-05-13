const sendBtn = document.querySelector(".send");
const verifyBtn = document.querySelector(".verify");
const inputOTP = document.querySelector("#input-otp");
const otpSent = document.querySelector(".otp-sent");

const handleSend = (e) => {
  e.preventDefault();
  verifyBtn.style.display = "block";
  inputOTP.style.display = "block";
  sendBtn.style.display = "none";
  otpSent.style.display = "block";
};

sendBtn.addEventListener("click", handleSend);

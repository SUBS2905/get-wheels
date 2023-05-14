const sendBtn = document.querySelector(".send");
const verifyBtn = document.querySelector(".verify");
const inputOTP = document.querySelector("#input-otp");
const otpSent = document.querySelector(".otp-sent");
const nameField = document.querySelector("#name1");

nameField.style.display = "none"; // Hide the "Name" field initially

const handleSend = (e) => {
  e.preventDefault();
  
  const emailInput = document.querySelector("[name=email]");
  const emailValue = emailInput.value;
  
  const requestBody = {
    email: emailValue
  };
  
  fetch("http://localhost:5000/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend as needed
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
  
  verifyBtn.style.display = "block";
  inputOTP.style.display = "block";
  nameField.style.display = "block"; // Display the "Name" field
  sendBtn.style.display = "none";
  otpSent.style.display = "block";
};



const handleVerify = (e) => {
  e.preventDefault();
  
  const nameInput = document.querySelector("[name=Name]");
  const emailInput = document.querySelector("[name=email]");
  const otpInput = document.querySelector("[name=otp]");
  
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const otpValue = otpInput.value;
  
  const requestBody = {
    name: nameValue,
    email: emailValue,
    otp: otpValue
  };
  
  fetch("http://localhost:5000/user/signup/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend as needed
      console.log(data);
      
      // Check if verification was successful
      if (data.msg === "New User Added") {
        // Redirect to index.html
        window.location.href = "index.html";
      } else {
        // Display an error message or perform any other action
        console.log("Verification failed");
      }
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
};


sendBtn.addEventListener("click", handleSend);
verifyBtn.addEventListener("click", handleVerify);
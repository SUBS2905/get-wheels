const sendBtn = document.querySelector(".send");
const verifyBtn = document.querySelector(".verify");
const inputOTP = document.querySelector("#input-otp");
const otpSent = document.querySelector(".otp-sent");

const handleSend = (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("[name=email]");
  const emailValue = emailInput.value;

  const requestBody = {
    email: emailValue,
  };

  fetch("http://localhost:5000/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend as needed
      console.log(data);
      // Display success message or perform any other action
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
      // Display error message or perform any other action
    });

  verifyBtn.style.display = "block";
  inputOTP.style.display = "block";
  sendBtn.style.display = "none";
  otpSent.style.display = "block";
};

const handleVerify = (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("[name=email]");
  const otpInput = document.querySelector("[name=otp]");

  const emailValue = emailInput.value;
  const otpValue = otpInput.value;

  const requestBody = {
    email: emailValue,
    otp: otpValue,
  };

  fetch("http://localhost:5000/user/signin/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend as needed
      console.log(data);

      if (data.msg === "Success signin") {
        // Redirect to index.html
        window.location.href = "index.html";
      } else {
        // Display error message or perform any other action
        console.error("Signin failed");
      }
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
      // Display error message or perform any other action
    });
};

verifyBtn.addEventListener("click", handleVerify);

sendBtn.addEventListener("click", handleSend);

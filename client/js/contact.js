document
  .getElementById("contact-submit")
  .addEventListener("click", function () {
    const queryObj = {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      sub: document.getElementById("contact-subject").value,
    };

    fetch("http://localhost:5000/contactnotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryObj),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

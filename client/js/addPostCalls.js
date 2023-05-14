const form = document.getElementById("vehicleForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = "http://localhost:5000/vehicle/addVehicle";

  const vehicleName = document.getElementById("vehicleName").value;
  const ownerName = document.getElementById("ownerName").value;
  const city = document.getElementById("city").value;
  const contactNumber = document.getElementById("contactNumber").value;
  const price = document.getElementById("price").value;
  const address = document.getElementById("address").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const registrationDate = document.getElementById("registrationDate").value;
  console.log(registrationDate);
  const km = document.getElementById("km").value;
  const model = document.getElementById("model").value;
  const engine = document.getElementById("engine").value;
  const hp = document.getElementById("hp").value;
  const transmission = document.getElementById("transmission").value;
  const fuel = document.getElementById("fuel").value;
  const brakes = document.getElementById("brakes").value;
  const comment = document.getElementById("comment").value;

  const formData = {
    vehicleName,
    ownerName,
    city,
    contactNumber,
    price,
    address,
    description,
    brand,
    registrationDate,
    km,
    model,
    engine,
    hp,
    transmission,
    fuel,
    brakes,
    comment,
  };

//   console.log(formData);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

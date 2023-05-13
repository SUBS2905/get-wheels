const cardContainer = document.getElementById("vehicle-cards");

fetch("http://localhost:5000/vehicle/getallvehicles")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(card => {
        let cardData = `
        <div class="col-md-4">
            <div class="car-wrap rounded">
                <div class="img rounded d-flex align-items-end"
                    style="background-image: url(images/reElectra.jpg)">
                </div>
                <div class="text">
                    <h2 class="mb-0">
                    <a href="detail.html?vid=${card.vehicle_id}">${card.vehicleName}</a>
                    </h2>
                    <div class="d-flex mb-3">
                    <span class="cat">${card.model}</span>
                    <p class="price ml-auto">Rs. ${card.price} <span>/mo</span></p>
                    </div>
                    <p class="vehicle-id" style="font-size: small;">Vehicle id: <span style="font-weight: bold;">${card.vehicle_id}</span></p>
                    <p class="d-flex mb-0 d-block">
                    <a href="detail.html?vid=${card.vehicle_id}" class="btn btn-primary py-2 mr-1">Book now</a>
                    <a href="detail.html?vid=${card.vehicle_id}" class="btn btn-secondary py-2 ml-1"
                        >Details</a
                    >
                    </p>
                </div>
            </div>
        </div>
        `;
        cardContainer.innerHTML += cardData;
    });
  });

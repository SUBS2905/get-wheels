const container = document.getElementById("vehicle-details");
const urlParams = new URLSearchParams(window.location.search);
const vehicleId = urlParams.get("vid");
// console.log(vehicleId);

fetch("http://localhost:5000/vehicle/getvehiclesbyid", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ vehicleId }),
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data._vehicle);
    const vehicleDetails = data._vehicle;
    container.innerHTML = `
    <div class="card-wrapper">
    <div class="card">
    <!-- card left -->
    <div class="product-imgs">
    <div class="img-display">
    <div class="img-showcase">
    <img src="images/w1.jpg" alt="shoe image" />
    <img src="images/w2.png" alt="shoe image" />
    <img src="images/w3.png" alt="shoe image" />
    <img src="images/w4.png" alt="shoe image" />
    </div>
    </div>
    <div class="img-select">
    <div class="img-item">
    <a href="#" data-id="1">
    <img src="images/w1.png" alt="shoe image" />
    </a>
    </div>
    <div class="img-item">
            <a href="#" data-id="2">
              <img src="images/w2.png" alt="shoe image" />
              </a>
              </div>
              <div class="img-item">
              <a href="#" data-id="3">
              <img src="images/w3.png" alt="shoe image" />
              </a>
              </div>
              <div class="img-item">
              <a href="#" data-id="4">
              <img src="images/w4.png" alt="shoe image" />
              </a>
              </div>
              </div>
              </div>
              <!-- card right -->
              <div class="product-content">
        <h4 class="product-title">${vehicleDetails.vehicleName}</h4>
        <!-- <a href = "#" class = "product-link">visit nike store</a> -->
        <div class="product-rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <span>4.7(21)</span>
        </div>
        
        <div class="product-price">
        <p class="new-price">Price: <span>Rs. ${vehicleDetails.price}</span></p>
        </div>
        
        <div class="product-detail">
        <h4>Description:</h4>
        <p>
        ${vehicleDetails.description}
        </p>
        <li>Owner: <span>${vehicleDetails.ownerName}</span></li>
        <li>City: <span>${vehicleDetails.city}</span></li>
        <li>Mobile Number: <span>${vehicleDetails.contactNumber}</span></li>
        <li>Email: <span>${vehicleDetails.ownerEmail}</span></li>
        </div>

        <div class="purchase-info">
        <!-- <input type = "number" min = "0" value = "1"> -->
        <button type="button" class="btn">
        Add to Wishlist <i class="fas fa-shopping-cart"></i>
        </button>
        <button type="button" class="btn" style="background-color: red">
        Notify me <i class="fas fa-bell"></i>
        </button>
        <a href="https://drive.google.com/file/d/1-0ryxfFb7w-Js_NN-10VntlHRJOtUZeI/view?pli=1" target="_blank">
        <button type="button" class="btn">
            View Agreement <i class="fas fa-page"></i>
        </button>
        </a>
        </div>
            
            <div class="social-links">
            <p>Contact Now:</p>
            <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
          <i class="fab fa-whatsapp"></i>
          </a>
          </div>
          </div>
          </div>
          </div>
          <div class="table">
          <h2 style="text-align: center">Description</h2>
          <br />
          <br />
          
          <section class="columns">
          <div class="column">
          <h4>Brand</h4>
          <p>${vehicleDetails.brand}</p>
          </div>
          
          <div class="column">
          <h4>First Registration</h4>
          <p>${vehicleDetails.registrationDate}</p>
          </div>
          
          <div class="column">
          <h4>KM</h4>
          <p>${vehicleDetails.km} km</p>
          </div>
          </section>
    <section class="columns">
    <div class="column">
    <h4>Model</h4>
        <p>${vehicleDetails.model}</p>
        </div>
        
        <div class="column">
        <h4>HP</h4>
        <p>${vehicleDetails.hp} cc</p>
        </div>
        
        <div class="column">
        <h4>Engine</h4>
        <p>${vehicleDetails.engine}</p>
        </div>
        </section>
        <section class="columns">
        <div class="column">
        <h4>Transmission</h4>
        <p>${vehicleDetails.transmission}</p>
        </div>
        
        <div class="column">
        <h4>Fuel</h4>
        <p>${vehicleDetails.fuel}</p>
        </div>
        
        <div class="column">
        <h4>Brakes</h4>
        <p>${vehicleDetails.brakes}</p>
        </div>
        </section>
        <br /><br />
        
        <h2 class="commentHead" style="text-align: center">Owners Comment</h2>
        <br />
        <div class="comment" >
        <p>
        ${vehicleDetails.comment}
        </p>
        </div>
        </div>
        <br /><br /><br />
    `;
  });
  
  
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;
  
  
  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });
  
  function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
    ).clientWidth;
    
    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }
  
  window.addEventListener("resize", slideImage);

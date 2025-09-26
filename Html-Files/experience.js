
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the email input value
    var email = document.getElementById('emailInput').value;
    
    // You can add further validation of the email input here if needed
    
    // Show the subscribe banner
    document.getElementById('subscribeBanner').style.display = 'block';
    
    // Optionally, you can reset the form
    document.getElementById('subscribeForm').reset();
    
    // Simulate a delay and hide the banner after 5 seconds
    setTimeout(function() {
      document.getElementById('subscribeBanner').style.display = 'none';
    }, 5000);
  });
  
  const doctorList = [
    {
      name: "Dr. Virat Kolhi",
      specialization: "Cardiology",
      experience: 12,
      fee: 300,
      image: "../images/Virat Kolhi.webp"
    },
    {
      name: "Dr. Alia Bhatt",
      specialization: "Gaynocologist",
      experience: 8,
      fee: 400,
      image: "../images/Alia Bhaat.webp"
    },
    {
      name: "Dr. Ambani Kaka",
      specialization: "Dermatologist",
      experience: 10,
      fee: 500,
      image: "./images/Ambani Kaka.webp"
    },
    {
    name: "Dr. Shraddha Kapoor",
      specialization: "ENT",
      experience: 9,
      fee: 600,
      image: "./images/shraddha kapoor.webp"
    },
       {
    name: "Dr. Tripti Dimri",
      specialization: "Gynacologist",
      experience: 11,
      fee: 300,
      image: "./images/Tripti Dimri.webp"
    },
  ];

  function renderDoctorList(doctors) {
    const doctorListElement = document.getElementById("doctor-list");
    doctorListElement.innerHTML = "";

    doctors.forEach(doctor => {
      const doctorItem = document.createElement("li");
      doctorItem.innerHTML = `
        <div class="content">
          <h4>${doctor.name}</h4>
          <p>Specialization: ${doctor.specialization}</p>
          <p>Experience: ${doctor.experience} years</p>
          <p>Fee: $${doctor.fee}</p>
        </div>
        ${doctor.image ? `<img src="${doctor.image}" alt="${doctor.name}" style="width: 80px; height: auto; border-radius: 50%;">` : ""}
      `;
      doctorListElement.appendChild(doctorItem);
    });
  }

  function filterDoctors() {
    const experienceFilter = document.getElementById("experience-filter").value;
    const feeFilter = document.getElementById("fee-filter").value;

    let filteredDoctors = doctorList.filter(doctor => {
      return (
        (experienceFilter === "" || doctor.experience >= experienceFilter) &&
        doctor.fee >= feeFilter
      );
    });

    renderDoctorList(filteredDoctors);
  }

  function sortDoctorsByFee() {
    doctorList.sort((a, b) => a.fee - b.fee);
    renderDoctorList(doctorList);
  }

  document.getElementById("experience-filter").addEventListener("change", filterDoctors);
  document.getElementById("fee-filter").addEventListener("input", () => {
    document.getElementById("fee-value").textContent = document.getElementById("fee-filter").value;
    filterDoctors();
  });

  document.getElementById("sort-btn").addEventListener("click", sortDoctorsByFee);

  renderDoctorList(doctorList);

  window.addEventListener("load", () => {
    const loader = document.querySelector(".pre");
    loader.classList.add("pre--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  var currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;
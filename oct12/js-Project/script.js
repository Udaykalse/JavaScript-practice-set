const donateButtons = document.querySelectorAll(".cause-card .btn");
const popup = document.getElementById("donationPopup");
const closePopup = document.getElementById("closePopup");
const donationTypeInput = document.getElementById("donationType");
const donationForm = document.getElementById("donationForm");
const cancelBtn = document.getElementById("cancelBtn");
const menuToggle = document.querySelector(".menu-toggle");
const navbarUl = document.querySelector(".navbar ul");
const donateNowBtn = document.querySelector(".donate-now");

donateButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const causeName = e.target.closest(".cause-card").querySelector("h3").innerText;
    donationTypeInput.value = causeName;
    popup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

closePopup.addEventListener("click", closePopupHandler);
cancelBtn.addEventListener("click", closePopupHandler);

function closePopupHandler() {
  popup.classList.add("hidden");
  document.body.style.overflow = "auto";
}

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopupHandler();
  }
});

donationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("donationType").value;
  const amount = document.getElementById("amount").value.trim();
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (!name || !email || !amount || !paymentMethod) {
    showAlert("Please fill out all fields!", "error");
    return;
  }

  if (!validateEmail(email)) {
    showAlert("Please enter a valid email address!", "error");
    return;
  }

  const donation = { 
    name, 
    email, 
    type, 
    amount, 
    paymentMethod,
    date: new Date().toLocaleString(),
    id: Date.now()
  };

  let donations = JSON.parse(localStorage.getItem("donations")) || [];
  donations.push(donation);
  localStorage.setItem("donations", JSON.stringify(donations));

  showAlert(`Thank you, ${name}! Your $${amount} donation for ${type.toLowerCase()} has been recorded.`, "success");
  updateCauseProgress(type, parseInt(amount));
  
  donationForm.reset();
  closePopupHandler();
  updateStats();
});

menuToggle.addEventListener("click", () => {
  navbarUl.style.display = navbarUl.style.display === "flex" ? "none" : "flex";
});

donateNowBtn.addEventListener("click", () => {
  donationTypeInput.value = "General Donation";
  popup.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  Object.assign(alertDiv.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 2rem",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    zIndex: "1000",
    animation: "slideIn 0.3s ease-out"
  });
  
  alertDiv.style.background = type === "success" ? "#28a745" : "#dc3545";
  
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

function updateStats() {
  const donations = JSON.parse(localStorage.getItem("donations")) || [];
  const total = donations.length;
  const totalAmount = donations.reduce((sum, donation) => sum + parseInt(donation.amount), 0);
  
  document.getElementById("totalDonations").textContent = total;
  
  const statsSection = document.querySelector(".stats-display");
  statsSection.innerHTML = `
    <strong>Total Donations Made:</strong> ${total}<br>
    <strong>Total Amount Raised:</strong> $${totalAmount}
  `;
}

function updateCauseProgress(causeType, amount) {
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach(bar => {
    const card = bar.closest(".cause-card");
    if (card.querySelector("h3").textContent === causeType) {
      const currentWidth = parseInt(bar.style.width) || 0;
      const targetWidth = parseInt(bar.dataset.target);
      const newWidth = Math.min(currentWidth + (amount / 100), targetWidth);
      bar.style.width = newWidth + "%";
      
      const progressText = card.querySelector(".progress-text");
      progressText.textContent = Math.round(newWidth) + "% funded";
    }
  });
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach(bar => {
    const targetWidth = bar.dataset.target;
    setTimeout(() => {
      bar.style.width = targetWidth + "%";
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateStats();
  animateProgressBars();
  
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbarUl.style.display = "flex";
    } else {
      navbarUl.style.display = "none";
    }
  });
});
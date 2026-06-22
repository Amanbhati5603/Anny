/* =============================================
   ANYA MAKEOVER - script.js
   ============================================= */

/* ---- NAVBAR: Scroll Effect ---- */
function handleScroll() {
  let navbar = document.getElementById("navbar");
  let backToTop = document.getElementById("backToTop");

  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
}

window.onscroll = handleScroll;


/* ---- MOBILE MENU TOGGLE ---- */
function toggleMenu() {
  let navLinks = document.getElementById("navLinks");
  let hamburger = document.getElementById("hamburger");

  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  } else {
    navLinks.classList.add("open");
  }
}

/* Close menu when a nav link is clicked */
function closeMenuOnClick() {
  let links = document.querySelectorAll(".nav-links a");
  let navLinks = document.getElementById("navLinks");

  let i = 0;
  for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      navLinks.classList.remove("open");
    };
  }
}

closeMenuOnClick();


/* ---- BACK TO TOP ---- */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ---- VIEW MORE GALLERY ---- */
/* Tracks whether extra gallery items are visible */
let galleryExpanded = false;

function showMoreGallery() {
  let hiddenItems = document.querySelectorAll(".gallery-item.hidden-item");
  let btn = document.getElementById("viewMoreBtn");

  let i = 0;

  if (galleryExpanded === false) {
    /* Show all hidden gallery items */
    for (i = 0; i < hiddenItems.length; i++) {
      hiddenItems[i].classList.remove("hidden-item");
    }
    btn.innerHTML = "Show Less";
    galleryExpanded = true;
  } else {
    /* Hide extra gallery items again */
    let allItems = document.querySelectorAll(".gallery-item");
    let count = 0;

    for (i = 0; i < allItems.length; i++) {
      count = count + 1;
      if (count > 6) {
        allItems[i].classList.add("hidden-item");
      }
    }

    btn.innerHTML = "View More Looks";
    galleryExpanded = false;
  }
}


/* ---- PORTFOLIO FILTER TABS ---- */
function filterGallery(category, clickedBtn) {
  let allItems = document.querySelectorAll(".gallery-item");
  let allBtns = document.querySelectorAll(".tab-btn");

  /* Remove active class from all tab buttons */
  let b = 0;
  for (b = 0; b < allBtns.length; b++) {
    allBtns[b].classList.remove("active");
  }

  /* Add active class to clicked button */
  clickedBtn.classList.add("active");

  /* Show or hide gallery items based on category */
  let i = 0;
  for (i = 0; i < allItems.length; i++) {
    let itemCat = allItems[i].getAttribute("data-cat");

    if (category === "all") {
      /* Show first 6 only, reset expanded state */
      if (i < 6) {
        allItems[i].classList.remove("hidden-item");
      } else {
        if (galleryExpanded === false) {
          allItems[i].classList.add("hidden-item");
        }
      }
    } else {
      /* Show only items matching the selected category */
      if (itemCat === category) {
        allItems[i].classList.remove("hidden-item");
      } else {
        allItems[i].classList.add("hidden-item");
      }
    }
  }

  /* Reset View More button text when switching tabs */
  let btn = document.getElementById("viewMoreBtn");
  if (category !== "all") {
    btn.innerHTML = "View More Looks";
    galleryExpanded = false;
  }
}


/* ---- VIEW MORE OUTFITS ---- */
let outfitsExpanded = false;

function showMoreOutfits() {
  let hiddenOutfits = document.querySelectorAll(".outfit-card.hidden-outfit");
  let btn = document.getElementById("viewMoreOutfitsBtn");

  let i = 0;

  if (outfitsExpanded === false) {
    for (i = 0; i < hiddenOutfits.length; i++) {
      hiddenOutfits[i].classList.remove("hidden-outfit");
      hiddenOutfits[i].style.display = "block";
    }
    btn.innerHTML = "Show Less Outfits";
    outfitsExpanded = true;
  } else {
    for (i = 0; i < hiddenOutfits.length; i++) {
      hiddenOutfits[i].classList.add("hidden-outfit");
      hiddenOutfits[i].style.display = "none";
    }
    btn.innerHTML = "View All Outfits";
    outfitsExpanded = false;
  }
}


/* ---- CONTACT FORM VALIDATION ---- */
function submitForm() {
  let name = document.getElementById("clientName").value;
  let phone = document.getElementById("clientPhone").value;
  let date = document.getElementById("eventDate").value;
  let type = document.getElementById("makeupType").value;
  let successMsg = document.getElementById("formSuccess");

  /* Basic validation: check required fields are not empty */
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (phone === "") {
    alert("Please enter your phone number.");
    return;
  }

  /* Phone number: must be at least 10 digits */
  if (phone.length < 10) {
    alert("Please enter a valid phone number (at least 10 digits).");
    return;
  }

  if (date === "") {
    alert("Please select your event date.");
    return;
  }

  if (type === "") {
    alert("Please select a makeup type.");
    return;
  }

  /*
    =====================================================
    GOOGLE SHEETS INTEGRATION POINT
    Replace this block with a fetch() POST to your
    Google Apps Script Web App URL, e.g.:
    fetch("https://script.google.com/macros/s/YOUR_ID/exec", {
      method: "POST",
      body: JSON.stringify({ name, phone, date, type })
    })
    =====================================================
  */

  /* Show success message */
  successMsg.classList.remove("hidden-item");

  /* Clear all form fields */
  document.getElementById("clientName").value = "";
  document.getElementById("clientPhone").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("makeupType").value = "";
  document.getElementById("clientMessage").value = "";

  /* Hide success message after 5 seconds */
  setTimeout(function () {
    successMsg.classList.add("hidden-item");
  }, 5000);
}


/* ---- SMOOTH SCROLL TO SECTION (for CTA buttons) ---- */
function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
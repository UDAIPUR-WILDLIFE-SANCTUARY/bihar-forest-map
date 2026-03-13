// All district paths and where they should link
const districtDetails = {
  "West_Champaran": {
    link: "districts/west-champaran.html"
  },
  "East_Champaran": {
    link: "districts/eastchamparan.html"
  },
  "Gaya": {
    link: "districts/gaya.html"
  },
  "Nalanda": {
    link: "districts/nalanda.html"
  },
  "Araria": {
    link: "districts/araria.html"
  },
  "Patna": {
    link: "districts/patna.html"
  },
  "Jehanabad": {
    link: "districts/jehanabad.html"
  },
    "Rohtas": {
    link: "districts/rohtas.html"
  },
      "Jamui": {
    link: "districts/jamui.html"
  },
       "Munger": {
    link: "districts/munger.html"
  },
      "Bhagalpur": {
    link: "districts/Bhagalpur.html"
  },
   "Darbhanga": {
    link: "districts/darbhanga.html"
  },
"Vaishali": {
    link: "districts/vaishali.html"
  },
  "Begusarai": {
    link: "districts/begusarai.html"
  },
  "Kaimur": {
    link: "districts/kaimur.html"
  },
"Purnia": {
    link: "districts/purnia.html"
  },
"Buxar": {
    link: "districts/buxar.html"
  },
  "Banka": {
    link: "districts/banka.html"
  },
  

  // ➕ Add more districts here
};

// Select all district <path> elements inside the actual SVG
const paths = document.querySelectorAll("#biharMap path");

paths.forEach(path => {
  path.addEventListener("click", (e) => {
    const districtId = path.id;
    const details = districtDetails[districtId];

    // Prevent pin click from interfering (optional)
    if (e.target.classList.contains("pin")) return;

    // Highlight clicked district
    paths.forEach(p => p.classList.remove("active"));
    path.classList.add("active");

    if (details && details.link) {
      window.location.href = details.link;
    } else {
      console.log(`Clicked: ${districtId} (No link defined)`);
    }
  });
});

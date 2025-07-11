
// pet_event.js
let petLove = 0;
let foodCount = 0;

function feedPet() {
  foodCount++;
  petLove += 10;
  updatePetStatus();
}

function updatePetStatus() {
  const status = document.getElementById("pet-status");
  status.textContent = `Keita の親密度：${petLove}（餵食次數：${foodCount}）`;
}

console.log("Pragyanpath PWA ready");
// ===== CHESS ELO SYSTEM (Pragyanpath) =====

// Initial ELO (local storage)
let elo = localStorage.getItem("chessElo");
if (!elo) {
  elo = 800; // beginner rating
  localStorage.setItem("chessElo", elo);
}

// Show ELO on page
function showElo() {
  const el = document.getElementById("eloScore");
  if (el) el.innerText = elo;
}
showElo();

// Match result function
// result = "win" | "loss" | "draw"
function updateElo(result) {
  let change = 0;

  if (result === "win") change = 25;
  if (result === "loss") change = -15;
  if (result === "draw") change = 5;

  elo = parseInt(elo) + change;

  // Minimum limit
  if (elo < 400) elo = 400;

  localStorage.setItem("chessElo", elo);
  showElo();

  alert("Updated ELO: " + elo);
}

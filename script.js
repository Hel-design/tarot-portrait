function arkan(n) {
  while (n > 22) {
    n = n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return n === 0 ? 22 : n;
}

function calculate() {
  const input = document.getElementById("birthdate").value;
  if (!input) return alert("Введите дату рождения");
  const [year, month, day] = input.split("-").map(Number);

  const allDigits = [...(day + month + year).toString()].map(Number);
  const sumAll = allDigits.reduce((a, b) => a + b, 0);

  const P1 = arkan(day);
  const P2 = arkan(month);
  const P3 = arkan(day + month);
  const yearSum = [...year.toString()].map(Number).reduce((a, b) => a + b, 0);
  const P4 = arkan(yearSum);
  const P5 = arkan(P1 + P2 + P3 + P4);
  const P6 = arkan(P4 + P1);  // СверхДар
  const P7 = arkan(P2 + P5);

  const A = arkan(P2 + P4);
  const B = A;
  const C = arkan(P1 + P1);
  const D = arkan(21 + P1);
  const E = arkan(P4 + P5);
  const F = arkan(P1 + P5);
  const G = arkan(F + A);
  const H = arkan(F + E);

  const results = {
    "1": P1, "2": P2, "3": P3, "4": P4,
    "5": P5, "6 (СверхДар)": P6, "7": P7,
    "A": A, "B (Травма)": B, "C": C, "D": D,
    "E": E, "F": F, "G": G, "H": H
  };

  const container = document.getElementById("portrait");
  container.innerHTML = "";

  for (const [label, value] of Object.entries(results)) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${label}</strong><br>Аркан: ${value}`;
    container.appendChild(div);
  }
}

function iniciarJoc(missio) {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('joc').style.display = 'block';

  if (missio === 'matematiques') {
    mostrarMissioMatematiques();
  } else {
    document.getElementById('joc').innerHTML = `<p>Missió de ${missio} encara no disponible.</p>
    <button onclick="tornarAlMenu()">Tornar al menú</button>`;
  }
}

function mostrarMissioMatematiques() {
  let pregunta = "Quines multiplicacions donen 24?";
  let operacions = ["4x6", "3x8", "2x12", "5x5"];

  let html = `<h2>Missió: Matemàtiques</h2>
              <p>${pregunta}</p>`;

  operacions.forEach(op => {
    html += `<button onclick="comprovarResposta('${op}')">${op}</button> `;
  });

  html += `<br><br><button onclick="tornarAlMenu()">Tornar al menú</button>`;

  document.getElementById('joc').innerHTML = html;
}

function comprovarResposta(opcio) {
  let correctes = ["4x6", "3x8", "2x12"]; // Les respostes correctes
  if (correctes.includes(opcio)) {
    alert("Correcte! 🎉");
  } else {
    alert("Incorrecte. 😢 Torna-ho a intentar.");
  }
}

function tornarAlMenu() {
  document.getElementById('joc').style.display = 'none';
  document.getElementById('menu').style.display = 'block';
}

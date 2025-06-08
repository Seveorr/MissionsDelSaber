function iniciarJoc(missio) {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('joc').style.display = 'block';

  if (missio === 'matemàtiques') {
    mostrarMissioMatematiques();
  } 
  else if (missio === 'llengua') {
    mostrarMissioLlengua();
  } 
  else {
    document.getElementById('joc').innerHTML = `<p>Les missions de ${missio} encara no estan disponibles.</p>
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

function mostrarMissioLlengua() {
  let pregunta = "Quan s'accentuen les paraules agudes?";
  let respostes = ["Quan acaben en vocal", "Quan acaben en vocal, vocal + s o vocal + n", "Quan acaben en vocal, vocal + n, -es o -is", "Quan acaben en vocal, vocal + s, -en o -in"];

  let html = `<h2>Missió: Llengua</h2>
              <p>${pregunta}</p>`;

  respostes.forEach(op => {
    html += `<button onclick="comprovarResposta('${op}')">${op}</button> `;
  });

  html += `<br><br><button onclick="tornarAlMenu()">Tornar al menú</button>`;

  document.getElementById('joc').innerHTML = html;
}

function comprovarResposta(opcio) {
  let correctes = ["Quan acaben en vocal, vocal + s, -en o -in", "4x6", "3x8", "2x12"]; // Les respostes correctes
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

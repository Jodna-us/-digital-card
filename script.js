
function showLogin() {
  document.getElementById('form-area').innerHTML = `
    <h2>Connexion</h2>
    <input type="email" id="email" placeholder="Email"><br><br>
    <input type="password" id="password" placeholder="Mot de passe"><br><br>
    <button onclick="login()">Se connecter</button>
  `;
}

function showRegister() {
  document.getElementById('form-area').innerHTML = `
    <h2>Créer un compte</h2>
    <input type="email" id="new-email" placeholder="Email"><br><br>
    <input type="password" id="new-password" placeholder="Mot de passe"><br><br>
    <button onclick="register()">Créer</button>
  `;
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    document.getElementById('form-area').classList.add('hidden');
    document.getElementById('card-preview').classList.remove('hidden');
    document.getElementById('card').innerText = 'Carte digitale pour : ' + email;

    // Génération du QR code
    new QRCode(document.getElementById('qrcode'), {
      text: window.location.href + '?user=' + encodeURIComponent(email),
      width: 128,
      height: 128
    });
  } else {
    alert('Veuillez remplir tous les champs');
  }
}

function register() {
  const email = document.getElementById('new-email').value;
  const password = document.getElementById('new-password').value;
  if (email && password) {
    alert('Compte créé. Veuillez maintenant vous connecter.');
    showLogin();
  } else {
    alert('Veuillez remplir tous les champs');
  }
}

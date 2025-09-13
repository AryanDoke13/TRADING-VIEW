 const users = {
    "user1": { password: "pass123", balance: 1000 },
    "admin": { password: "admin", balance: 5000 }
  };

  function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (!username || !password) {
      errorMsg.textContent = "Please enter username and password.";
      return;
    }

    if(users[username] && users[username].password === password) {
      errorMsg.textContent = "";
      showDashboard(username);
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  }

  function showDashboard(username) {
    document.getElementById('login-container').style.display = 'none';
    const dash = document.getElementById('dashboard');
    dash.style.display = 'block';
    document.getElementById('user-name').textContent = username;
    document.getElementById('balance').textContent = users[username].balance.toFixed(2);
  }


  function tradeCoin(coin) {
    let pic = "";
    if (coin === "BTC") {
      pic = "image/abc.png";
    } else if (coin === "ETH") {
      pic = "image/pqr.png";
    } else if (coin === "XRP") {
      pic = "image/xyz.png";
    }
    document.getElementById('bigpic').src = pic;
  }

  function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-msg').textContent = '';
    document.getElementById('bigpic').src = '';
  }

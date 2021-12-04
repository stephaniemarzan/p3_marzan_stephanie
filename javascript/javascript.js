//Navigation Bar

  function NavBar() {
    var x = document.getElementById("navigationBar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
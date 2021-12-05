//Navigation Bar

  function NavBar() {
    var x = document.getElementById("navigationBar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  //About Page Random Images


    var imageUrls = [
        "images/about1.jpg"
    ,   "images/about2.jpg"
    ,   "images/about3.jpg"
    ];

    var rand_int = Math.floor(Math.random() * 3);

    var image = document.getElementById("image-about")

    image.src = imageUrls[rand_int];
function collapse(x) {
    content = document.getElementById(x);
    console.log(x)
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    } 
  }
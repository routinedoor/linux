/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("menu").style.width = "25vw";
    document.getElementById("arrow").style.display = "none";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("arrow").style.display = "flex";
  }
  
  var currentPage = "acasa";

function goPage(num){
    document.getElementById(currentPage).style.display = "none";
    switch (num){
        case 1:
            document.getElementById("acasa").style.display = "block";
            currentPage = "acasa";
            break;
        case 2:
            document.getElementById("familia").style.display = "block";
            currentPage = "familia";
            break;
        case 3:
            document.getElementById("linux").style.display = "block";
            currentPage = "linux";
            break;
        case 4:
            document.getElementById("fedora").style.display = "block";
            currentPage = "fedora";
            break;
        case 5:
            document.getElementById("munca").style.display = "block";
            currentPage = "munca";
            break;
        case 6:
            document.getElementById("biblio").style.display = "block";
            currentPage = "biblio";
            break;
        default:
            document.getElementById("acasa").style.display = "block";
            currentPage = "acasa";
    }
}


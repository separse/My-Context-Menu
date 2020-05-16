var isOpen = false;
function nyClose (){
  document.getElementById('myContextMenu').style.display = 'none';
  isOpen = false;
} 

function nyMeny(e)
{
  e.preventDefault()
  var menu = document.getElementById('myContextMenu')
  menu.style.left = e.clientX
  menu.style.top = e.clientY
  menu.style.display = "block"
  isOpen = true;
}

function nyPrint() {
  nyClose();
  window.print();
}

function shortKey(e) {
  if (isOpen) {
    // alert(e.keyCode)
    switch (e.keyCode) {
        case 78: window.open(); break;
        case 80: nyPrint(); break;
        case 88: nyClose(); break;
        case 67: window.close(); break;                    
    }
  }
}
function hasReached(){
  console.log(window.scrollY);
  var element0 = document.getElementById('cabesa');
  var element1 = document.getElementById('cabesaCont');

  if (window.scrollY >= 500) {
    element0.className = "d-flex flex-row  w-100 justify-content-center align-items-end head0";
    
  }else{

  }
}

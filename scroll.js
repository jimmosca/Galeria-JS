function hasReached(){
  console.log(window.scrollY);
  var element = document.getElementById('wewe')

  if (window.scrollY >= 500) {
      element.style.color = 'green';
      element.style.borderColor = 'green';
      element.style.textAlign = 'center';
  }else{
    element.style.color = 'red';
    element.style.borderColor = 'red';
    element.style.textAlign = 'left';
  }
}

// Sticky navbar backgrond opacity
window.addEventListener('scroll', function(){
  if (window.scrollY > 100){
    document.querySelector('#navbar').style.opacity = 0.8;
  }
  else{
    document.querySelector('#navbar').style.opacity = 1; 
  }
}
);

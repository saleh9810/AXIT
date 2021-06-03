
const tap1 = document.getElementById('tap1');
const tap2 = document.getElementById('tap2');
const tap3 = document.getElementById('tap3');









window.onload = Color1 = () => {
  tap1.classList.add('active');
    tap1.classList.remove('colors');
  tap2.classList.remove('active');
   tap2.classList.add('colors');
   tap3.classList.remove('active');
   tap3.classList.add('colors');
    document.getElementById('soft').innerHTML = "First Tap Content";

}




Color2 = () => {
    tap2.classList.add('active');
   tap2.classList.remove('colors');
    tap1.classList.remove('active');
   tap1.classList.add('colors');
   tap3.classList.remove('active');
   tap3.classList.add('colors');
   document.getElementById('soft').innerHTML = "Seconde Tap Content";
    

}





Color3 = () => {
   tap3.classList.add('active');
   tap3.classList.remove('colors');
   tap1.classList.remove('active');
    tap1.classList.add('colors');
    tap2.classList.remove('active');
    tap2.classList.add('colors');
    document.getElementById('soft').innerHTML = "Third Tap Content";

}


     let grd1 = document.getElementById('asgn1');
     let grd2 = document.getElementById('asgn2');
     let grd3 = document.getElementById('asgn3');
     let grd4 = document.getElementById('asgn4');
     let grd5 = document.getElementById('proj1');
     let grd6 = document.getElementById('proj2');
     
     let tempr = document.getElementById('temp1');
     let newtemp = document.getElementById('tempchange');
     
     let avrg = document.getElementById('gpascore1');
     
function myfun1() {

     let sum = parseInt(grd1.value) + parseInt(grd2.value) + parseInt(grd3.value) + parseInt(grd4.value) + parseInt(grd5.value) + parseInt(grd6.value);
     sum /= 6;
     sum = Number.parseFloat(sum).toFixed(1);
     
     avrg.innerHTML = `Your Grade Point Average is:<span style="color: chartreuse; font-size: 20px;"> ${sum}</span>`;
}

function myfun2() {
  
     let cels1 = parseInt(tempr.value);
     let farnh = cels1 * (9 / 5) + 32;     
     farnh = Number.parseFloat(farnh).toFixed(1);
     
     newtemp.innerHTML = `The temperature in Farenheit is:<span style="color: chartreuse; font-size: 20px;"> ${farnh}</span> degrees`;
}

// Get the modal
var modal = document.getElementById("modalwin");

// Get the button that opens the modal
var btn1 = document.getElementById("btn1");
// Get the button that opens the modal
var btn2 = document.getElementById("btn2");
// Get the button that opens the modal
var btn3 = document.getElementById("btn3");

// When the user clicks on the button, open the modal
btn1.onclick = function () {
     modal.style.display = "block";
}
// When the user clicks on the button, open the modal
btn2.onclick = function () {
     modal.style.display = "block";
}
// When the user clicks on the button, open the modal
btn3.onclick = function () {
     modal.style.display = "block";
}

// When the user clicks on close button, close the modal
function myfun4() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

calc1.addEventListener("click", myfun1);
calc2.addEventListener("click", myfun2);
// btn1.addEventListener("click", myfun3);
// btn2.addEventListener("click", myfun3);
// btn3.addEventListener("click", myfun3);
closeBtn.addEventListener("click", myfun4);
/* HTML DOM Elements */
let submit = document.getElementById("sbmt-btn");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const gsmNumber = document.getElementById("gsm");
const bootcamp=document.getElementById("bootcamps");


/* Submit button click handler - creating object- write console */

submit.onclick = function createUser(){
    let yeniKisi = Object.create({ 
        name: name.value, 
      surname: surname.value,
      age:age.value,
      email:email.value,
      gsmNumber:gsmNumber.value,
      bootcamp:bootcamp.value
   });
   console.log(yeniKisi);
   return yeniKisi;

}


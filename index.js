function calculate(){

 var a = parseInt(document.getElementById('bookOne').value);
 var b = parseInt(document.getElementById('bookTwo').value);
 var c = parseInt(document.getElementById('bookThree').value);
 var d = parseInt(document.getElementById('bookFour').value);
 var e = parseInt(document.getElementById('bookFive').value);


 if(a>100 || b>100 || c>100 || d>100 || e>100){

   alert("incorrect number");

 }



 else{

      var obtain = a+b+c+d+e;
      document.getElementById('obtain').innerText = obtain;

      var per = (obtain/500)*100;
      document.getElementById('percntge').innerText = per;

 }

    
    if(a>=40 && b>=40 && c>=40 && d>=40 && e>=40){

    document.getElementById('remrk').innerText = "pass";


 }

 else{
    document.getElementById('remrk').innerText ="Fail";


 }


  if(per >= 80){

    document.getElementById('grade').innerText = "A+";


 }

 else if(per >= 70){

    document.getElementById('grade').innerText = "A";


 }


 else if(per >= 60){

    document.getElementById('grade').innerText = "B";


 }


 else if(per >= 50){

    document.getElementById('grade').innerText = "C";


 }



 else if(per >= 40){

    document.getElementById('grade').innerText = "D";


 }










}
const button = document.getElementById('search-button');
button.addEventListener('click' , function(){
    click();
})
function click(){
   let input = document.getElementById('input-value').value;
   console.log(input);
   let nothing = document.getElementById('option0').value;
   let hyd = document.getElementById('option1').value;
   let rai = document.getElementById('option2').value;
   let mum = document.getElementById('option3').value;
   let del = document.getElementById('option4').value;
   let che = document.getElementById('option5').value;
   let ny = document.getElementById('option6').value;
   let lon = document.getElementById('option7').value;
   let dub = document.getElementById('option8').value;
   let tok = document.getElementById('option9').value;
   let ist = document.getElementById('option10').value;
   let color = document.getElementById('weather-container');

 
    switch(input){
    case input = hyd:
        document.getElementById('info').innerHTML = ' <img src="./icons8-cloudy-96.png"   class="icon" /> <br><span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Hyderabad</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">26&deg;</span><br>  <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Mostly Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 26&deg; L: 19&deg;</span> ';
        
        color.style.backgroundColor = "#b8b8b8";
        
        
        break;

    case input = rai :
        document.getElementById('info').innerHTML = ' <img src="./icons8-cloudy-96.png"   class="icon" /> <br><span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Raipur</span>  <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">21&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Mostly Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 30&deg; L: 17&deg;</span> ';
        color.style.backgroundColor = "#b8b8b8";

        
        break;

    case input = mum :
        document.getElementById('info').innerHTML = ' <img src="./icons8-sunny-weather-48.png" class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Mumbai</span>  <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">26&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Sunny</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 26&deg; L: 22&deg;</span>';
        color.style.backgroundColor = "#92c5f5";
        
        break;

    case input = del:
        document.getElementById('info').innerHTML = ' <img src="./icons8-sunny-weather-48.png" class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">New Delhi</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">22&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Sunny</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 22&deg; L: 10&deg;</span>';
        color.style.backgroundColor = "#92c5f5";
        
        break;

    case input = che :
        document.getElementById('info').innerHTML = ' <img src="./icons8-cloudy-96.png"   class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Chennai</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">28&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Mostly Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 29&deg; L: 23&deg;</span>';
        color.style.backgroundColor = "#b8b8b8";
        
        break;

    case input = ny :
        document.getElementById('info').innerHTML = ' <img src="./icons8-partly-cloudy-106.png"   class="icon" /><br><span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">New York</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">-4&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 2&deg; L: -4&deg;</span>';
        color.style.backgroundColor = "#82a4c3";
       
        break;

    case input = lon :
        document.getElementById('info').innerHTML = ' <img src="./icons8-cloudy-96.png"   class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">London</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">9&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Mostly Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 11&deg; L: 7&deg;</span>';
        color.style.backgroundColor = "#b8b8b8";
        
        break;

    case input = dub:
        document.getElementById('info').innerHTML = ' <img src="./icons8-sunny-weather-48.png" class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Dubai</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">25&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Sunny</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 25&deg; L: 17&deg;</span>';
        color.style.backgroundColor = "#92c5f5";  
        
        break;

    case input = tok :
        document.getElementById('info').innerHTML = ' <img src="./icons8-cloudy-96.png"   class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Tokyo</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">8&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Mostly Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 11&deg; L: 3&deg;</span>';
        color.style.backgroundColor = "#b8b8b8";
        
        break;

    case input = ist :
        document.getElementById('info').innerHTML = ' <img src="./icons8-partly-cloudy-106.png"   class="icon" /><br> <span style="font-size:30px; font-family:Arial, Helvetica, sans-serif;">Istanbul</span> <br><span style="font-size:50px; font-family:Arial, Helvetica, sans-serif;">14&deg;</span><br> <span style="color:rgba(240, 248, 255, 0.792);  font-family:Arial, Helvetica, sans-serif;">Cloudy</span><br><span style="font-family:Arial, Helvetica, sans-serif;">H: 15&deg; L: 10&deg;</span>';
        color.style.backgroundColor = "#82a4c3";
        break;

    case input = nothing:
        alert("Please Enter a city");
   }

   document.getElementById('input-value').value = '';
}











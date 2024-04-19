//declaring variables
const country = document.getElementById("country")
const state = document.getElementById("state")
const city = document.getElementById("city")
const temp =document.getElementById("temp-value")
const loctime = document.getElementById("local-time")
const cond = document.getElementById("cond")

let form = document.forms['my-form'];
let menu = form.citys;
let options = form.citys.options
menu.required =true ;
//function to change between citys
form.onchange = function(e){
  e.preventDefault();
  var optionValue = this.citys.value;
  
  console.log(optionValue);

  try {
axios.get('http://api.weatherapi.com/v1/current.json?key= 9a0c6b7c48e94fefa5801352241804&q='+ optionValue + '&aqi=no')
  .then((response) => {
    console.log(response);
   country.innerHTML = response.data.location.country;
   state.innerHTML = response.data.location.country;
   city.innerHTML = optionValue;
   temp.innerHTML =response.data.current.temp_c; 
   loctime.innerHTML=response.data.location.localtime;
   cond.innerHTML = response.data.current.condition.text;
  })
}
	
 catch (error) {
	console.error("There is an Error : ",error);
}

}
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    console.log(city);
    $('#location').val('');

    let request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?q={city}&appid=adfda684d78d4876a3e77e8dbfb6c5b9`;
    request.onreadystatechange = function() { //this line is the key new stuff to run line 6
      if (this.readyState === 4 && this.status === 200) { //this is a line you flat memorize
        let response = JSON.parse(this.responseText);
        getElements(response); //you need this line here so getElements() be run only when the conditional becomes true on line 10 so you can keep running lines of code 16 and 17 below but line 12 is only executed after the server sends back a response, if not done like this the code runs so quick the server response is not recived and it will give the error, cannot read property of 'main' of undefined'
      }
    }

    request.open('GET', url, true);
    request.send();

    getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`)
    }

  });
});

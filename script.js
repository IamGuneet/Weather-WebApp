
document.querySelector("button").addEventListener('click',checkCity)

document.querySelector('body').addEventListener('keypress',function(event){
 if(event.key ==="Enter"){
    checkCity()
 }
})
function checkCity(){
   let current= document.getElementById('input').value
    if(current === ""){
        alert('input required')
        console.log(current);
    }else{
        let city = document.getElementById('input').value
        let key = "95e2d6ceecc63b265b437f41b53156f2";
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=metric#"
        async function weather() {
            let response = await fetch(url)
            let data = await response.json();
        console.log(data);
        let temperature = Math.floor(data.main.temp) + "° C";
        document.getElementById('temp').innerHTML = temperature;
        //   console.log(temperature);
        let humidity = "Humidity " + data.main.humidity+"%";
        document.getElementById('humidity').textContent = humidity;
        //   console.log(humidity);
        let windspeed = "Wind-speed " + Math.floor(data.wind.speed) + " km/h";
        // console.log(windspeed);
        document.getElementById('windSpeed').textContent = windspeed;
        let climate = data.weather[0].description;
        // console.log(climate);
        document.getElementById('description').textContent = climate;   
        let imgID = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        document.getElementById("icon").src = imgID;
        let cityName = data.name;
        // console.log(cityName);
        document.getElementById('name').textContent=cityName;
        
    }
    weather()
    
}

}
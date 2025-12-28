async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "7bebe2bb1528cb804be6238e87551f92";

  if(city === "") return;

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  document.getElementById("result").innerHTML =
    `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
}

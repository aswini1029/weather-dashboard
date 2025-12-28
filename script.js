async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "7bebe2bb1528cb804be6238e87551f92"; // your key

  if(city === "") {
    document.getElementById("result").innerText = "Please enter a city name";
    return;
  }

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    if(res.status !== 200) {
      document.getElementById("result").innerText = "City not found ❌";
      return;
    }

    document.getElementById("result").innerText =
      `📍 ${data.name} | 🌡️ ${data.main.temp}°C | ☁️ ${data.weather[0].description}`;
  }
  catch(error) {
    document.getElementById("result").innerText = "Error fetching data";
  }
}

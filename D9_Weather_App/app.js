var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

async function changeWeatherUI(capitalSearch) {
  //   let capitalSearch = search.value.trim();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=cb8c9df8835c06987f767a569c8e6a32`;

  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove("hide");

    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + " (m)";
    wind.innerText = data.wind.speed + " (m/s)";
    sun.innerText = data.main.humidity + " (%)";
    shortDesc.innerHTML = data.weather[0] ? data.weather[0].main : "";
    let temp = Math.round(data.main.temp - 273.15);
    value.innerText = temp;
    time.innerText = new Date().toLocaleString("vi");

    body.setAttribute("class", "cold");
    if (temp > 25) {
      body.setAttribute("class", "hot");
    } else if (temp > 18 && temp <= 25) {
      body.setAttribute("class", "warm");
    } else if (temp > 12 && temp <= 18) {
      body.setAttribute("class", "cool");
    } else {
      body.setAttribute("class", "cold");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});

changeWeatherUI("Ha Noi");

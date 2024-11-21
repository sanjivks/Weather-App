
        // https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolhapur&appid=cca92a2e090a4a3d79d40ec1cc95be08
        //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
document.addEventListener('DOMContentLoaded',function(){  
        const apiKey = "cca92a2e090a4a3d79d40ec1cc95be08";


        // console.log(apiUrl); 


        const searchBox = document.querySelector(".search input")
        const seacrhBoxBtn = document.querySelector(".search button")



        async function checkWeather(city) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const responce = await fetch(apiUrl)

            if (responce.status == 404) {
                document.querySelector(".error").style.display = "block"
            }
            else {
                var data = await responce.json();
                //console.log(data)


                // document.querySelector(".temp").innerHTML = data.main.temp + "°C"
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°<span class='superscript'>C</span>";

                document.querySelector(".city").innerHTML = data.name
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

                const weatherIcon = document.querySelector(".weather-icon")



                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "./images/clouds.png"

                } else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "./images/clear.png"

                }
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "./images/rain.png"

                } else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "./images/drizzle.png"

                } else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "./images/mist.png"

                }
                document.querySelector(".error").style.display = "none"


            }

            //document.querySelector(".weather").style.display="block"

        }
        seacrhBoxBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);


        });

    });

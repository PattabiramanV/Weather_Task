"use strict"

let container = document.querySelector('.container');
let input_box = document.querySelector("#input_box");
let tepm_humidity_speed_showing_content = document.querySelectorAll("strong");

let background_images = ['Bg-1.png', 'Bg-2.png', 'Bg-3.webp'];

input_box.addEventListener("keyup", (event) => {

    if (event.key == 'Enter') {
        let API_Key = 'db52511e9028224614b7c13543215383';
        let city_name = input_box.value;
        let API_Url = 'https://api.openweathermap.org/data/2.5/weather?';

        fetch(`${API_Url}&appid=${API_Key}&q=${city_name}&units=metric`)
            .then(response => response.json())
            .then(data => {
                temp_check(data)
            })
    //     .catch(err=>{
    //         console.log("pattabi");
    //         err="Please Enter a proper city name";
    //     alert(err)
    // input_box.value = ''

    //     });

    }
});

function temp_check(data) {
    console.log(data.cod);
    container.style.color='black'

    let temp_cal = data.main.temp;
    let humidity = data.main.humidity;
    var wind_speed = data.wind.speed;
    tepm_humidity_speed_showing_content[0].innerHTML = temp_cal;
    tepm_humidity_speed_showing_content[1].innerHTML = humidity;
    tepm_humidity_speed_showing_content[2].innerHTML = wind_speed;
    document.getElementById("city_name_show_content").innerHTML=input_box.value;
    if (temp_cal > 26) {

        container.style.backgroundImage = `url('${background_images[0]}')`
    }
    else if (temp_cal < 20) {
        container.style.backgroundImage = `url('${background_images[2]}')`
        container.style.color='white';
    }
    else {
        container.style.backgroundImage = `url('${background_images[1]}')`
        
    }
    input_box.value = ''

}
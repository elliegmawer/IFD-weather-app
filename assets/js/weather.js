var input;
function setup (){
input = document.getElementById("cityName");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
    }
});
}

function myWeather() {
    $("#getWeather").html("");
    var cityName = $("#cityName").val();

    var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f21c6b7c8c4e53536dd3c21d3c610573&units=metric";

    $.getJSON(apiCall, weatherCallback);

    function weatherCallback(weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var temp = weatherData.main.temp;
        var description = weatherData.weather[0].description;
        console.log(weatherData.name, weatherData.sys.country, weatherData.main.temp, weatherData.weather[0].description);
        $('#getWeather').append(cityName + " " + country + " " + temp + "ºC" + " " + description);
    }
};

function clearCity() {
    document.getElementById("cityName").value = ""
}
/**
 * Created by daseinuxd on 5/9/2017.
 */
var propLocation = new XMLHttpRequest();
var propLocObj;
var propZip = 76137;

var weatherForecast = new XMLHttpRequest();
var apiKey = '0ab072376462dd056d5a7f08c9c344a6';
var fObj;


propLocation.open('GET', 'http://ziplocate.us/api/v1/' + propZip);
propLocation.responseType = 'text';
propLocation.send(null);

propLocation.onload = function () {
    if (propLocation.status === 200) {
        var propLocObj = JSON.parse(propLocation.responseText);
        console.log(propLocObj);
        document.getElementById('locZip').innerHTML = propZip;

        var latitude = propLocObj.lat;
        var longitude = propLocObj.lng;

        console.log(latitude, longitude);

        weatherForecast.open('GET', 'https://api.darksky.net/forecast/' + apiKey + '/' + latitude + ',' + longitude, true);
        weatherForecast.responseType = 'text';
        weatherForecast.send(null);


        weatherForecast.onload = function () {

            if (weatherForecast.status === 200)
            {
                var fObj = JSON.parse(weatherForecast.responseText);
                console.log(fObj);
                //document.getElementById('location').innerHTML = fObj.location.name + ", " + fObj.location.region + " " + zipCode;
                //document.getElementById('desc0').innerHTML = fObj.current.condition.text;
                //document.getElementById('feels').innerHTML = Math.round(fObj.current.feelslike_f) + "&deg;";
                //document.getElementById('humid').innerHTML = fObj.current.humidity+ "%";
                //document.getElementById('wind-dir').innerHTML = fObj.current.wind_dir;
                //document.getElementById('wind-mph').innerHTML = fObj.current.wind_mph;


                // Day 0
                document.getElementById('day0Day').innerHTML = moment.unix(fObj.currently.time).format('dddd');
                document.getElementById('day0Date').innerHTML = moment.unix(fObj.currently.time).format('ll');
                document.getElementById('currentTemp').innerHTML = Math.round(fObj.currently.temperature) + "&deg;";
                getIcon(fObj.currently.icon, 'pic0');


                document.getElementById('day00').innerHTML = moment.unix(fObj.daily.data[0].time).format('ddd');
                getIcon(fObj.daily.data[0].icon, 'pic00');
                document.getElementById('hiTemp0').innerHTML = Math.round(fObj.daily.data[0].temperatureMax) + "&deg;";
                //document.getElementById('loTemp0').innerHTML = Math.round(fObj.forecast.forecastday[0].day.mintemp_f) + "&deg;";

                // Day 1
                document.getElementById('day1').innerHTML = moment.unix(fObj.daily.data[1].time).format('ddd');
                getIcon(fObj.daily.data[1].icon, 'pic1');
                document.getElementById('hiTemp1').innerHTML = Math.round(fObj.daily.data[1].temperatureMax) + "&deg;";
                //document.getElementById('loTemp1').innerHTML = Math.round(fObj.forecast.forecastday[1].day.mintemp_f) + "&deg;";

                // Day 2
                document.getElementById('day2').innerHTML = moment.unix(fObj.daily.data[2].time).format('ddd');
                getIcon(fObj.daily.data[2].icon, 'pic2');
                document.getElementById('hiTemp2').innerHTML = Math.round(fObj.daily.data[2].temperatureMax) + "&deg;";
                //document.getElementById('loTemp2').innerHTML = Math.round(fObj.forecast.forecastday[2].day.mintemp_f) + "&deg;";

                // Day 3
                document.getElementById('day3').innerHTML = moment.unix(fObj.daily.data[3].time).format('ddd');
                getIcon(fObj.daily.data[3].icon, 'pic3');
                document.getElementById('hiTemp3').innerHTML = Math.round(fObj.daily.data[3].temperatureMax) + "&deg;";
                //document.getElementById('loTemp3').innerHTML = Math.round(fObj.forecast.forecastday[3].day.mintemp_f) + "&deg;";

                // Day 4
                document.getElementById('day4').innerHTML = moment.unix(fObj.daily.data[4].time).format('ddd');
                getIcon(fObj.daily.data[4].icon, 'pic4');
                document.getElementById('hiTemp4').innerHTML = Math.round(fObj.daily.data[4].temperatureMax) + "&deg;";
                //document.getElementById('loTemp4').innerHTML = Math.round(fObj.forecast.forecastday[4].day.mintemp_f) + "&deg;";

                // Day 5
                document.getElementById('day5').innerHTML = moment.unix(fObj.daily.data[5].time).format('ddd');
                getIcon(fObj.daily.data[5].icon, 'pic5');
                document.getElementById('hiTemp5').innerHTML = Math.round(fObj.daily.data[5].temperatureMax) + "&deg;";
                // document.getElementById('loTemp5').innerHTML = Math.round(fObj.forecast.forecastday[5].day.mintemp_f) + "&deg;";

            } else {
               console.log('Error loading from Dark Sky API');
            };// end if-else
        }; // end weather forecast function
    } else {
        console.log('Error loading from Location API');
    }; // end if-else
}; // end location function

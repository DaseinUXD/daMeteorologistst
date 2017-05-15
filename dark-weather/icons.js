/**
 * Created by daseinuxd on 5/9/2017.
 */
function getIcon (iconDesc, picNo) {

    switch (iconDesc) {
        case 'clear-day':
            document.getElementById(picNo).src = 'icons-white/clear-day.svg';
            break;
        case 'clear-night':
            document.getElementById(picNo).src = 'icons-white/clear-night.svg';
            break;
        case 'cloudy':
            document.getElementById(picNo).src = 'icons-white/cloudy.svg';
            break;
        case 'fog':
            document.getElementById(picNo).src = 'icons-white/fog.svg';
            break;
        case 'hail':
            document.getElementById(picNo).src = 'icons-white/hail.svg';
            break;
        case 'partly-cloudy-day':
            document.getElementById(picNo).src = 'icons-white/partly-cloudy-day.svg';
            break;
        case 'partly-cloudy-night':
            document.getElementById(picNo).src = 'icons-white/partly-cloudy-night.svg';
            break;
        case 'rain':
            document.getElementById(picNo).src = 'icons-white/rain.svg';
            break;
        case 'sleet':
            document.getElementById(picNo).src = 'icons-white/sleet.svg';
            break;
        case 'snow':
            document.getElementById(picNo).src = 'icons-white/snow.svg';
            break;
        case 'thunderstorm':
            document.getElementById(picNo).src = 'icons-white/thunderstorm.svg';
            break;
        case 'tornado':
            document.getElementById(picNo).src = 'icons-white/tornado.svg';
            break;
        case 'wind':
            document.getElementById(picNo).src = 'icons-white/wind.svg';
    };
};
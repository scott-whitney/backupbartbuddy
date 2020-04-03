

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://community-bart.p.rapidapi.com/route.aspx?cmd=routes",
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "community-bart.p.rapidapi.com",
    "x-rapidapi-key": "4d3c51060amsh0a0695795b6f4ccp143077jsn20c66162ae11"
}
}
$.ajax(settings).done(function (response) {
// console.log(response);
});

// individual station information
var bartStation = bartStationArray[0].Abbr
stateUrl = `https://community-bart.p.rapidapi.com/etd.aspx?cmd=etd&orig=${bartStation}`

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": stateUrl,
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "community-bart.p.rapidapi.com",
    "x-rapidapi-key": "4d3c51060amsh0a0695795b6f4ccp143077jsn20c66162ae11"
}
}
// must use the abreviated form on the bart website of the bart station to make it search properly.
$.ajax(settings).done(function (response) {
// console.log(response);
});
// let spaek to server by XMLHttpRequest method
let request = new XMLHttpRequest;
// to give the url to get the data
request.open("GET","https://restcountries.com/v3.1/all");
// from url we says send the data from server
request.send();
// sended data will be print in console by an event onload
request.onload = function () {
    let result = JSON.parse(request.response);
    // console.log(result.flags);
    for (let data in result){
        console.log(result[data].flag);
    }
}



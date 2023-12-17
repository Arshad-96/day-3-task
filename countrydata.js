let request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let result = JSON.parse(request.response);

    for(let i=0; i<result.length; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
        console.log(result[i].flag);

    }
}
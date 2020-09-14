$(document).ready(function(){
    $('.tabs').tabs();
    $('#tabs-swipe-demo').tabs({ 'swipeable': true });
});
var business = {
    "async": true,
	"crossDomain": true,
	"url": "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=16cddd4e87574a6498354c69895e5856",
	"method": "GET"
}

var entertainment = {
    "async": true,
	"crossDomain": true,
	"url": "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=16cddd4e87574a6498354c69895e5856",
	"method": "GET"
}

var health = {
    "async": true,
	"crossDomain": true,
	"url": "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=16cddd4e87574a6498354c69895e5856",
	"method": "GET"
}

var sports = {
    "async": true,
	"crossDomain": true,
	"url": "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=16cddd4e87574a6498354c69895e5856",
	"method": "GET"
}

$.ajax(business).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var businessRow = document.getElementById('businessRow');
    for(let i = 0; i < articles.length; i++){
        var title = document.createElement("p");
        title.textContent = articles[i].title;
        businessRow.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].description;
        businessRow.appendChild(description);
        var img = document.createElement("img");
        img.setAttribute("src", articles[i].urlToImage);
        businessRow.appendChild(img);
        var btn = document.createElement("a");
        btn.textContent = "Full Article";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        businessRow.appendChild(btn);
    }
});

$.ajax(entertainment).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var entertainmentRow = document.getElementById('entertainmentRow');
    for(let i = 0; i < articles.length; i++){
        var title = document.createElement("p");
        title.textContent = articles[i].title;
        entertainmentRow.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].description;
        entertainmentRow.appendChild(description);
        var img = document.createElement("img");
        img.setAttribute("src", articles[i].urlToImage);
        entertainmentRow.appendChild(img);
        var btn = document.createElement("a");
        btn.textContent = "Full Article";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        entertainmentRow.appendChild(btn);
    }
});

$.ajax(health).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var healthRow = document.getElementById('healthRow');
    for(let i = 0; i < articles.length; i++){
        var title = document.createElement("p");
        title.textContent = articles[i].title;
        healthRow.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].description;
        healthRow.appendChild(description);
        var img = document.createElement("img");
        img.setAttribute("src", articles[i].urlToImage);
        healthRow.appendChild(img);
        var btn = document.createElement("a");
        btn.textContent = "Full Article";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        healthRow.appendChild(btn);
    }
});

$.ajax(sports).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var sportsRow = document.getElementById('sportsRow');
    for(let i = 0; i < articles.length; i++){
        var title = document.createElement("p");
        title.textContent = articles[i].title;
        sportsRow.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].description;
        sportsRow.appendChild(description);
        var img = document.createElement("img");
        img.setAttribute("src", articles[i].urlToImage);
        img.setAttribute("class", "img-responsive");
        sportsRow.appendChild(img);
        var btn = document.createElement("a");
        btn.textContent = "Full Article";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        sportsRow.appendChild(btn);
    }
});
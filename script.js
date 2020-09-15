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
        var div = document.createElement("div");
        div.setAttribute("class", "hoverable");
        div.setAttribute("style", `background-image : url('${articles[i].urlToImage}'); height : 400px; background-repeat: no-repeat; background-size: cover; `);
        businessRow.appendChild(div);
        var title = document.createElement("p");
        title.textContent = articles[i].title.slice(0, 40);
        title.setAttribute("id", "title");
        div.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].content;
        description.setAttribute("id", "description");
        businessRow.appendChild(description);
        var btn = document.createElement("a");
        btn.textContent = "Full Article ->";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("class", "btn waves-effect waves-light");
        businessRow.appendChild(btn);
    }
});

$.ajax(entertainment).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var entertainmentRow = document.getElementById('entertainmentRow');
    for(let i = 0; i < articles.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "hoverable");
        div.setAttribute("style", `background-image : url('${articles[i].urlToImage}'); height : 400px; background-repeat: no-repeat; background-size: cover; `);
        entertainmentRow.appendChild(div);
        var title = document.createElement("p");
        title.textContent = articles[i].title.slice(0, 40);
        title.setAttribute("id", "title");
        div.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].content;
        description.setAttribute("id", "description");
        entertainmentRow.appendChild(description);
        var btn = document.createElement("a");
        btn.textContent = "Full Article ->";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("class", "btn waves-effect waves-light");
        entertainmentRow.appendChild(btn);
    }
});

$.ajax(health).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var healthRow = document.getElementById('healthRow');
    for(let i = 0; i < articles.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "hoverable");
        div.setAttribute("style", `background-image : url('${articles[i].urlToImage}'); height : 400px; background-repeat: no-repeat; background-size: cover; `);
        healthRow.appendChild(div);
        var title = document.createElement("p");
        title.textContent = articles[i].title.slice(0, 40);
        title.setAttribute("id", "title");
        div.appendChild(title);
        var description = document.createElement("p");
        description.textContent = articles[i].content;
        description.setAttribute("id", "description");
        healthRow.appendChild(description);
        var btn = document.createElement("a");
        btn.textContent = "Full Article ->";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("class", "btn waves-effect waves-light");
        healthRow.appendChild(btn);
    }
});

$.ajax(sports).done(function(response){
    var articles = JSON.parse(JSON.stringify(response.articles));
    var sportsRow = document.getElementById('sportsRow');
    for(let i = 0; i < articles.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "hoverable");
        div.setAttribute("style", `background-image : url('${articles[i].urlToImage}'); height : 400px; background-repeat: no-repeat; background-size: cover; `);
        sportsRow.appendChild(div);
        var title = document.createElement("p");
        title.textContent = articles[i].title.slice(0, 40);
        title.setAttribute("id", "title");
        div.appendChild(title);
        var description = document.createElement("p");
        if (articles[i].content){
            description.textContent = articles[i].content;
        }else{
            description.textContent = articles[i].description;
        }
        description.setAttribute("id", "description");
        sportsRow.appendChild(description);
        var btn = document.createElement("a");
        btn.textContent = "Full Article ->";
        btn.setAttribute("href", articles[i].url);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("class", "btn waves-effect waves-light");
        sportsRow.appendChild(btn);
    }
});
let inputText;
//search by Default Search
    document.getElementById("search").onclick = function(){
        inputText = document.getElementById("searchInput").value;
        location.href = 'https://www.google.com/search?q=' + inputText + '&hl=en&e=';
}
//search by Google Search
    document.getElementById("googleSearch").onclick = function(){
        inputText = document.getElementById("searchInput").value;
        location.href = 'https://www.google.com/search?q=' + inputText + '&hl=en&e=';
}

//©Google redirect
    document.getElementById("copyright").onclick = function(){
        location.href = 'https://www.google.com/?hl=en'
    }
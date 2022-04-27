let searchbox = document.getElementById("searchbox");
searchbox.addEventListener("click", function () {
    window.location.href = "/final2/index.html"
})
searchbox.addEventListener("input", function () {
    window.location.href = "/final2/index.html"
})
address = window.location.search;
parameterList = new URLSearchParams(address)
document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed//" + parameterList.get("id");
document.getElementById("title").innerHTML = parameterList.get("title");
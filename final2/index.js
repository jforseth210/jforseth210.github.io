let searchbox = document.getElementById("searchbox");
let videos = document.getElementsByClassName("video");
document.getElementById("newtube").addEventListener("click", function () {
    searchbox.focus();
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        video.classList.remove("d-none");
    }
    searchbox.value = "";
})
searchbox.addEventListener("input", function () {
    let query = searchbox.value.toLowerCase();
    if (query.indexOf("egg") != -1) {
        $("#easterEggModal").modal("show");
    }
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const title = video.getElementsByClassName("video-title")[0].innerHTML;
        if (title.indexOf(query) == -1) {
            video.classList.add("d-none");
        } else {
            video.classList.remove("d-none");
        }
    }
})
let categories = document.getElementsByClassName("category");
for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    category.addEventListener("click", function () {
        console.log(this.innerHTML)
        switch (this.innerHTML) {
            case "Home":
                allowed_videos = [
                    "National 4-H Congress",
                    "4-H Camp 2021", "CYC Convention 2021",
                    "Farm Year Video 2020 (4-H Congress Version)",
                    "My Heroes",
                    "Farm Year Video 2020",
                    "Harvest 2020",
                    "Swathing 2020",
                    "Baling 2020",
                    "Branding 2020",
                    "Burning 2020",
                    "The Way of the Cross",
                    "Farm Year Video (4-H Cut)",
                    "Branding 2019",
                    "Farm Year Video 2019",
                    "Burning 2019",
                    "Coming Soon:",
                    "Italy Trip",
                    "Plowing",
                    "Making Lefse",
                    "Fertilizing and Spraying",
                    "Ditching 2019",
                    "Cows Around",
                    "Harvest 2019",
                    "Haying 2019",
                    "Teton County 4-H Camp 2019",
                    "Mom and Mattie",
                    "Loading Canola",
                    "Mom and Hank",
                    "Send Off For Father Brian",
                    "Farm Year Video 2018",
                    "Farm Year Video 2018 (4-H Version)",
                    "Trying Out the Mavic Pro",
                    "CYC 2019",
                    "CYC 2018",
                    "FFA Senior Video",
                    "National FFA Convention",
                    "Glacier Vacation",
                    "Harvest 2018",
                    "Feeding the Cows",
                    "Haying 2018",
                    "Skid Steer",
                    "iGive Catholic Fundraiser",
                    "iGive Catholic Bloopers",
                    "Frankenclyde"
                ]
                break;
            case "Church":
                allowed_videos = [
                    "CYC Convention 2021",
                    "The Way of the Cross",
                    "Italy Trip",
                    "Send Off For Father Brian",
                    "CYC 2019", "CYC 2018",
                    "iGive Catholic Fundraiser",
                    "iGive Catholic Bloopers"
                ]
                break;
            case "4-H":
                allowed_videos = [
                    "National 4-H Congress",
                    "4-H Camp 2021",
                    "Farm Year Video 2020 (4-H Congress Version)",
                    "Farm Year Video(4-H Cut)",
                    "Teton County 4-H Camp 2019",
                    "Farm Year Video 2018 (4-H Version)"
                ]
                break;
            case "FFA":
                allowed_videos = [
                    "FFA Senior Video",
                    "National FFA Convention"
                ]
                break;
            case "Farming":
                allowed_videos = [
                    "Farm Year Video 2020 (4-H Congress Version)",
                    "My Heroes",
                    "Farm Year Video 2020",
                    "Harvest 2020",
                    "Swathing 2020",
                    "Baling 2020",
                    "Branding 2020",
                    "Burning 2020",
                    "Farm Year Video (4-H Cut)",
                    "Branding 2019",
                    "Farm Year Video 2019",
                    "Burning 2019",
                    "Coming Soon:",
                    "Plowing",
                    "Fertilizing and Spraying",
                    "Ditching 2019",
                    "Cows Around",
                    "Harvest 2019",
                    "Haying 2019",
                    "Loading Canola",
                    "Farm Year Video 2018",
                    "Farm Year Video 2018 (4-H Version)",
                    "Trying Out the Mavic Pro",
                    "Harvest 2018",
                    "Feeding the Cows",
                    "Haying 2018",
                    "Skid Steer"
                ]
                break;
            case "Events":
                allowed_videos = [
                    "National 4-H Congress",
                    "4-H Camp 2021",
                    "CYC Convention 2021",
                    "Italy Trip",
                    "Making Lefse",
                    "Teton County 4-H Camp 2019",
                    "Send Off For Father Brian",
                    "CYC 2019",
                    "CYC 2018",
                    "National FFA Convention",
                    "Glacier Vacation",
                ]
                break;
        }
        console.log(allowed_videos)
        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const title = video.getElementsByClassName("video-title")[0].innerHTML;
            videoAllowed = false
            for (let j = 0; j < allowed_videos.length; j++) {
                const allowedTitle = allowed_videos[j];
                if (title == allowedTitle) {
                    videoAllowed = true
                }
            }
            if (videoAllowed) {
                video.classList.remove("d-none");
            } else {
                video.classList.add("d-none");
            }
        }
    })
}
let asaintmade = document.getElementById("heading");
let matches = document.getElementById("matches");
// https://www.pentarem.com/blog/how-to-use-settimeout-with-async-await-in-javascript/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function typewrite(text) {
    asaintmade.innerHTML = "A Saint made "
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        await delay(75);
        asaintmade.innerHTML += char;
    }
    await delay(1500);
    for (let i = text.length + "A Saint made ".length - 1; i > "A Saint made ".length; i--) {
        asaintmade.innerHTML = asaintmade.innerHTML.substring(0, i);
        await delay(75);
    }
}
let projects = ["something cool", "something awesome", "something brand new", "something unique"];
async function writeStuff() {
    while (true) {
        // https://stackoverflow.com/questions/35125759/pick-a-random-item-from-a-list
        let project = projects[Math.floor(Math.random() * projects.length)]
        asaintmade.href = "/" + project.replace(" ", "_") + ".html";
        await typewrite(project);
    }
}
writeStuff()
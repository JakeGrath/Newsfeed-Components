const mainDiv = document.querySelector('.articles')
const forBody = document.querySelector('body')
let formContainer = document.createElement('section')
let formdiv = document.createElement('div')
formdiv.classList.add('article')
formdiv.classList.add('article-open')
formdiv.classList.add('article-form')
formdiv.setAttribute('id', 'formDiv')
formdiv.innerHTML = '\
<form id="form" style = "margin : 10px">\
    <input type="text" placeholder="Article Name" id="name" /><br/><br/>\
    <textarea id="text" style="width : 100%; height : 300px; resize: none"></textarea><br/><br/>\
    <input type="submit" value="Submit" id="submit" />\
</form>\
';

formContainer.append(formdiv)
forBody.append(formContainer)

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    // let count = document.querySelectorAll('.article:not(.article-form)').length;
    // console.log(count)
    let date = Date();
    newdate = date.split(" ");
    console.log(newdate);
    let name = document.getElementById("name").value;
    let text = document.getElementById("text").value;
    mainDiv.innerHTML += `<div class="article" id="new-article"><h2>${name}</h2><p class="date">${newdate[1]} ${nth(newdate[2])}, ${newdate[3]}</p><p>${text}</p><span class='expandButton'></span></div>`;
    document.getElementById("form").reset();
    getArticles()
});

function nth(d) {
    if (d > 3 && d < 21) return d + 'th';
    switch (d % 10) {
        case 1: return d + "st";
        case 2: return d + "nd";
        case 3: return d + "rd";
        default: return d + "th";
    }
}
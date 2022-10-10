// runner.js file for tracking
// Author: synfinner
// Twitter: twitter.com/synfinner
// Site: https://gtfkd.com

// Function to delay the rest. 
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Tracker request 
function trck(){
    let uuid = crypto.randomUUID();
    /** let postObj = { 
        id: "test", 
        title: "hello", 
        body: uuid
    }
    let post = JSON.stringify(postObj)
    **/
    const trackUrl = `https://trackingsite/ID?uuid=${uuid}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', trackUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send();
}

// Function hopper/junk block. This is used to pollute a little and then run the rest. 
function n(){
    var daDiv = document.createElement("div");
    document.body.appendChild(daDiv);
    trck();
}

function y(){
    var daDiv = document.createElement("div");
    document.body.appendChild(daDiv);
    delay(100).then(() => n());
}

function s(){
    var daDiv = document.createElement("div");
    document.body.appendChild(daDiv);
    delay(100).then(() => y());
}

function hopper(){
    delay(500).then(() => s());
}

// function to attempt building stuff
function domBuild() {
    var daDiv = document.createElement("div");
    var idName = atob("bG9hZGVy")
    daDiv.id = idName;
    document.body.appendChild(daDiv);
    // check to see if our element was created.
    // This tells us if the DOM can be altered/manipulated
    var checkDiv = document.getElementById(idName);
    if (checkDiv != null) {
        // call the hopper
        hopper();
    } else {
        alert('Div not loaded :(');
    }
}

// Check to see if the DOM is loaded and then run via event listener
window.addEventListener("load", function () {
    // code to run after DOM load..
    // wait X seconds then run
    // we don't want to execute as soon as dom is loaded ;)
    delay(1700).then(() => domBuild());
});
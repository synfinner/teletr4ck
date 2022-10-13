// runner.js file for tracking
// Author: synfinner
// Twitter: twitter.com/synfinner
// Site: https://gtfkd.com

// Function to delay the rest. 
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// Tracker request
function trck() {
    let uuid = crypto.randomUUID();
    let uagent = btoa(navigator.userAgent);
    // JSON object for if we want to use POST
    /** let postObj = { 
        id: "test", 
        title: "hello", 
        body: uuid
    }
    let post = JSON.stringify(postObj)
    **/
    const trackUrl = `https://hooksite.blahhhhh?UUID=${uuid}&UserAgent=${uagent}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', trackUrl, true);
    // header for if we decide to send our json data
    //xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}

/**
* Function hopper/junk block. This is used to pollute a little and then run the rest. 
*/

function n() {
    // make an img element
    var daImg = document.createElement("img");
    document.body.appendChild(daImg);
    // run the tracking function
    trck();
}

function y() {
    // make a bogus script element
    var daScript = document.createElement("script");
    document.body.appendChild(daScript);
    // jump to function n()
    delay(100).then(() => n());
}

function s() {
    // make an extra div element
    var daDi2v = document.createElement("div");
    document.body.appendChild(daDiv2);
    // jump to function y()
    delay(100).then(() => y());
}

function hopper() {
    delay(500).then(() => s());
}
/**
* ~End function block~
*/

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
        window.location.href = "https://gtfkd.com/";
    }
}

//navigator/browser check
function navcheck(){
    // check if cookies are enabled
    // check if the UA is set via automation or headless
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver
    if (navigator.cookieEnabled && navigator.webdriver == false){
        console.log('ayy')
        mousechk();
    } else {
        // since this is likely really automated, just redirect the user.
        window.location.href = "https://gtfkd.com/";
    };
}


// check for mouse movement
function mousechk() {
    // if the user moves the mouse, delay and load
    var moved = false
    window.onmousemove = function (e) {
        // if the mouse moved set to true and continue
        if (!moved) {
            moved = true;
            // delay just a sec 
            delay(1700).then(() => domBuild());
        }
    }
}

// Check to see if the DOM is loaded and then run via event listener
window.addEventListener("load", function () {
    // code to run after DOM load..
    navcheck();
});
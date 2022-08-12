var body = document.getElementByTagName("body");
function replaceSubCount() {
    'use strict';
    var subCount = 0;
    // Your code here...
    document.getElementById("subscriber-count").innerHTML = toString(subCount) + " subscribers";
}
body.onload = replaceSubCount();

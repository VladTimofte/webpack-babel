const errorEl = document.querySelector('#error');
const rootEl = document.querySelector('#root');

// Arrow function example
const myArr = [1, 2, 3];    
myArr.map((n) => n + 1);
const text1 = document.createElement("div");  
text1.innerHTML = "Arrow function";
rootEl.appendChild(text1); 

// Template Strings
const name = "Bob";
const time = "today";
const helloText = `Hello ${name}, how are you ${time}?`
const text2 = document.createElement("div");  
text2.innerHTML = "Template Strings";
rootEl.appendChild(text2); 

// Destructuring
const [a,b] = [1,2];
const text3 = document.createElement("div");  
text3.innerHTML = "Destructuring";
rootEl.appendChild(text3); 

// Maps
var m = new Map();
m.set("hello", 42);
const text4 = document.createElement("div");  
text4.innerHTML = "Maps";
rootEl.appendChild(text4); 


// Promises
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}
const text5 = document.createElement("div");  
text5.innerHTML = "Promises";
rootEl.appendChild(text5); 

errorEl.remove();
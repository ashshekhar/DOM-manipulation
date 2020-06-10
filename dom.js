
////////////////////////////////////////////////////////////////////////
// Examining the document object

// Shows all the info about the document
console.dir(document);

console.log(document.domain);
console.log(document.URL);

document.title = 'DOM: Item Lister';
console.log(document.title);

console.log(document.doctype);
console.log(document.body);
console.log(document.head);

console.log(document.all); // Returns an array
console.log(document.all[6]);

console.log(document.forms);
console.log(document.links);
console.log(document.images);



////////////////////////////////////////////////////////////////////////
// Using GetElementByID

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

console.log(headerTitle);
console.log(headerTitle.textContent);
console.log(headerTitle.innerText); // Disregards 123 since display:none

headerTitle.textContent = 'Hello';

// This introduces a baby HTML tag insider the 'header-title' class
headerTitle.innerHTML = '<h3>Hello</h3>';  


////////////////////////////////////////////////////////////////////////
// Changing CSS Style

header.style.borderBottom = 'solid 5px black';



////////////////////////////////////////////////////////////////////////
// Using GetElementsByClassName

var items = document.getElementsByClassName('list-group-item');

console.log(items[0].textContent);
items[0].textContent = 'Item #1';
items[0].style.fontWeight = 'bold';
items[0].style.background = 'lightgrey';

// items.style.background  = 'lightgrey'; // Error
for(var i=0;i<items.length;i++)
{
    items[i].style.background = 'lightgrey';
}



////////////////////////////////////////////////////////////////////////
// Using GetElementsByTagName


var items = document.getElementsByTagName('li');

console.log(items[0].textContent);

items[0].textContent = 'Item #1';
items[0].style.fontWeight = 'bold';
items[0].style.background = 'lightgrey';

// items.style.background  = 'lightgrey'; // Error
for(var i=0;i<items.length;i++)
{
    items[i].style.background = 'lightgrey';
}


////////////////////////////////////////////////////////////////////////
// Using QuerySelector
// This only grabs the first one by default in case of multiple instances
// JQuery is used for multiple generally

// Grabbing id
var header = document.querySelector('#main-header');
header.style.borderBottom = '5px solid black';

// Grabbing class
document.querySelector('.title');

// Grabbing list 
document.querySelector('li');

// Grabbing input fields
// Only selects the first input field
var text = document.querySelector('input'); //By default, use input since input is the tag
text.value = 'Hello';

// To select the submit button
var submit = document.querySelector('input[type="submit"]');
submit.value = 'Enter';

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; // Changes the first one only

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; // Changes the last one

var nItem = document.querySelector('.list-group-item:nth-child(2)');
nItem.style.color = 'cyan';



////////////////////////////////////////////////////////////////////////
// Using QuerySelectorAll
// Grabs more than one

var titles = document.querySelectorAll('.title');
console.log(titles); // Returns a node list

// To change the alternate colors
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'cyan';
    even[i].style.backgroundColor = 'coral';
}


////////////////////////////////////////////////////////////////////////
// Traversing the DOM 

var items = document.querySelector('#items');

// parentNode 
console.log(items.parentNode);
items.parentNode.style.backgroundColor = 'lightgrey';

console.log(items.parentNode.parentElement.parentElement); // body class

////////////////////////////////////////////////////////////////////////

//parentElement -> Exactly same as parentNode
console.log(items.parentElement);
items.parentElement.style.backgroundColor = 'lightgrey';

console.log(items.parentElement.parentElement.parentElement); // body class


////////////////////////////////////////////////////////////////////////
// children
//childNode -> Exactly same as parentNode

console.log(items.childNodes); // Node List including content and line breaks
console.log(items.children); // HTML Collection of content

items.children[1].textContent = 'Item #2';
items.children[1].style.backgroundColor = 'cyan';


////////////////////////////////////////////////////////////////////////
// firstChild

console.log(items.firstChild); //Useless
console.log(items.firstElementChild); // Gives item 1
items.firstElementChild.textContent = 'First Element Child';

////////////////////////////////////////////////////////////////////////
// lastChild

console.log(items.lastChild); //Useless
console.log(items.lastElementChild); // Gives item 1
items.lastElementChild.textContent = 'First Element Child';


////////////////////////////////////////////////////////////////////////
// nextSibling
// Gives you the next element on the same level, so on the same level as items
console.log(items.nextSibling); //Useless
console.log(items.nextElementSibling);


////////////////////////////////////////////////////////////////////////
// previousSibling
// Gives you the last element on the same level, so on the same level as items
console.log(items.previousSibling); //Useless
console.log(items.previousElementSibling);
items.previousElementSibling.style.backgroundColor='orange';



////////////////////////////////////////////////////////////////////////
// createElement
// We will now create elements and insert them

var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'message-1';

// Add attribute
newDiv.setAttribute('title','New Div');

// Create text node
var newText = document.createTextNode('Hello World!');

// Append the node as child
newDiv.appendChild(newText);

// Insert into DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

newDiv.style.fontSize='30px';

console.log(newDiv);


////////////////////////////////////////////////////////////////////////
// Event Listeners

var btn = document.getElementById('button').addEventListener('click', btnClick);

function btnClick(event)
{
    console.log('Button was clicked!');
    console.log(event); // Shows you all the associated functions

    console.log(event.target); // Shows you the HTML code of the element clicked
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.type);

    document.querySelector('#main').style.backgroundColor = "lightgrey";

    // In the click here tab
    console.log(event.clientX);
    console.log(event.clientY);

    // In the actual window
    console.log(event.offsetX);
    console.log(event.offsetY);

    // Hold down a button and click
    console.log(event.shiftKey);
    

}

////////////////////////////////////////////////////////////////////////
// Mouse Events

var btn = document.getElementById('button');
var box = document.getElementById('box');


btn.addEventListener('click', runEvent);
btn.addEventListener('dblclick', runEvent);
btn.addEventListener('mouseup', runEvent);
btn.addEventListener('mousedown', runEvent);

box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);
box.addEventListener('mouseover',runEvent); // Will also fire off for any inner elements too
box.addEventListener('mouseout',runEvent);
box.addEventListener('mousemove',runEvent);

function runEvent(event)
{
    event.preventDefault(); // To stop unnecessary blinking
    console.log("Event type: "+event.type);
    output.innerHTML = '<h4> Mouse X: '+event.offsetX+ ' </h4><h4> Mouse Y: '+event.offsetY +'</h4>'; 
    console.log(event.target.value); // As you type, it displays
}


////////////////////////////////////////////////////////////////////////
// Keyboard Events

var keyboardInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form')
var select = document.querySelector('select');

keyboardInput.addEventListener('keydown', runEvent);
keyboardInput.addEventListener('keyup', runEvent); // On releasing
keyboardInput.addEventListener('keypress', runEvent); // On pressing

keyboardInput.addEventListener('focus', runEvent); // When you are inside the textbox
keyboardInput.addEventListener('blur', runEvent); // On exiting the textbox

keyboardInput.addEventListener('cut', runEvent); // When you cut
keyboardInput.addEventListener('paste', runEvent); // When you paste

keyboardInput.addEventListener('input', runEvent);

select.addEventListener('change',runEvent); // When choosing from box

form.addEventListener('submit',runEvent); // On clicking submit button


Milestone 5: Tour of DOM

**************************************************
1) What is dom, Connect your JS file with html file

- We can connect js to the html file in 2 ways:
1) By creating a js file and adding the script src tag right before the end of the body tag.

2) By simply adding the script tag.

- DOM basically converts the HTML (document) into a js object, and it allows for the interaction of HTML with JS. 

- So, just how objects can contain functions as values, similarly there is a document which is an object, and we can get the properties or keys by dot notation.


5 options to retrieve the elements from HTML using JS (options 2 & 3 mostly used)-
Option 1)))) 
- document.getElementsByTagName("Tag Name") returns an array like object (returns all the elements with that tag). It can be traversed like an array using for of loop. Declare a variable and set it equals the document.getElementsByTagName("Tag Name"), and then traverse the loop.

console.log(document.getElementsByTagName("li"))


- To get the inner text of an element, use innerText.

Important to note that, when using input fields, we need to use the .value property instead of .innerText, if we want the text inside of an input field.

const liCollection = document.getElementsByTagName("li");
        for(const li of liCollection){
            console.log(li.innerText);
        }



Option 2)))) 
- To get a specific element, we place an id to that element, and then use the document.getElementById("id-name"). It returns the element directly. It returns an array like object. Returns null if the id name doesn't exist.
- document.getElementById("id-name") is used to get a specific element, which has an id.
- When using this document.getElementById("id-name"), we can change the innertext also.

console.log(document.getElementById("places-title"));
const place = document.getElementById("places-title");
place.innerText = "Places changed by JS"


Option 3)))) 
- To get some certain elements, we place some classes on those elements, and then we use the document.getElementByClassName("class-name"). It can also be used for one element also. It returns an array like object. Returns an empty array like object if the class name doesn't exist.

console.log(document.getElementsByClassName("place"));
const jaigas = document.getElementsByClassName("place");
for(let jaiga of jaigas){
    console.log(jaiga.innerText);
}

Option 4)))) 
- document.querySelectorAll(". / # className or idName"). Must use . or # when using class or id (don't need it with just the element tags). Can work normally like getElementsByClassName and getElementsById, but is paritcularly used when we want CHILD SELECTORS. (like .fruits-container li). It returns nodeList.

console.log(document.querySelectorAll(".fruits-container li"));
const someLi = document.querySelectorAll(".fruits-container li");
for(const li of someLi){
    console.log(li);
}


Option 5)))) 
- To get only the first element of the child, in this case the first li from ".fruits-container li", use document.querySelector only. It returns only the element.

console.log(document.querySelector(".fruits-container li"));


- We can select the element based on the options above and apply styles to them using JS. In CSS, when there were multiple words, it was seperated by hyphen, but in JS there's no hyphen, but it uses camel case.

document.getElementById("places-title").style.textAlign = "center"


- Use the getAttribute("class or id"), to get the name(s) of the classes or the id in that element. Basically gets the attributes value of the element.

const title = document.getElementById("places-title")
title.getAttribute("class")


- We can also simply use classList to get all the classes. Then use remove and add to remove or add classes respectively.

title.classList.add("text-center") // adds the text-center class on the element that contains the places-title id. 

title.classList.remove("text-center") // removes the text-center class


- setAttribute("attribute-name", "value"). Sets the attribute in that class or id element.

const title = document.getElementById("places-title")
title.setAttribute("title", "tooltip set by js")


- innerHTML is used to display the html of an element. Best to use it with container divs or sections, so that we can change the inner html using js. It doesn't change the container element itself, just everything inside it.

document.getElementsByClassName("fruits-container")[0].innerHTML = "<h2> ABC wow dom is changing </h2>"


- innerText is used to display the text of that element. If the element has sub-elements, then it will display those texts as well.

document.getElementsByClassName("fruits-container")[0].innerText


- Example code of traversing through different sections, and applying styles to them-

const sections = document.querySelectorAll("section");
for(const section of sections){
    section.style.border = "2px solid steelblue";
    section.style.padding = "5px";
    section.style.marginBottom = "5px";
    section.style.backgroundColor = "lightgray";
    section.style.borderRadius = "5px";
}


- Example code of adding and removing classnames from a container (apply the different style properties to a class name externally or internally (not inline, as it will be applied directly.))-

const places = document.getElementById("places-container");
places.classList.add("text-center");
places.classList.remove("large-font");


- We can get the child nodes, first child etc by- 
const places = document.getElementById("places-container");
places.firstChild
places.childNodes // returns all the child nodes
places.childNodes[3] // returns the fourth node
places.childNodes[3].childNodes // returns the child nodes of the fourth node
places.childNodes[3].childNodes.nextSibling // returns the next sibling of the child nodes of the fourth node

- document.createElement("element-name") is used to create an element.
document.createElement("p")

- Use .appendChild() to add something (like an li) after the last child of the element.

const placesUl = document.querySelector("#places-container ul")
const li = document.createElement("li");
li.innerText = "Brand new places to go using js";
placesUl.appendChild(li);

- parentNode can be used to get the parent node of the element

placesUl.parentNode.parentNode;


- Creating a section in 2 different ways-

// Create a section which contains h3 and ul with 3 lis

// First method is using innerText and creating elements and appending them individually

const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h3 = document.createElement("h3");
h3.innerText = "My favourite food";
section.appendChild(h3);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Cheese Burger";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Cinnamon Rolls";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Shawarma";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.append(section);

// Second method is simply by creating a section element, and then writing the innerHTML for it and appending to the main

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h3>My favourite dress</h3>
<ul>
    <li>Check Shirts</li>
    <li>Jeans</li>
    <li>Drop Shoulder</li>
</ul>
`
mainContainer.append(sectionDress);






















**************************************************
2) Event, addEventListener, Event bubble

- When the html document is loaded into the web browser, it's converted into a dom tree.

- The nodes are basically objects. In the DOM tree, Document,doctype, elements, texts are the nodes.

- When we click a mouse button, or keyboard, it is an event. It is an action that a user does like clicking.

- the onclick attribute is used to do a certain type of action when you click that element (could be an h1 or a button). When we want to console.log a string with onclick, we must use single quotation mark.

<h1 onclick="console.log('I am clicked')">I will learn Event today</h1>

There are 4 ways to handle onclick-

1))) The first method is to write the onclick inline.
<button onclick="document.body.style.backgroundColor='green'">Make green</button>


2))) The second way is to use onclick to call a function, and the function does the job.
<button onclick="makeRed()">Make red</button>
<script>
        function makeRed(){
            document.body.style.backgroundColor='red';
        }
    </script>


3))) The third way is to add an id to that element, and then in JS, get the id and use the "id_name.onclick" to use the function name (Don't call it, i.e don't use parenthesis)

<button id="make-blue">Make blue</button>
<script>
    const makeBlue = document.getElementById("make-blue");
    makeBlue.onclick = makeItBlue;
    function makeItBlue(){
        document.body.style.backgroundColor="blue";
    }
    // OR
    // makeBlue.onclick = function makeItBlue(){
    //     document.body.style.backgroundColor="blue";
    // }
</script>



4))) The fourth way is to use addEventListener("event-name", function).

<button id="make-pink">Make Pink</button>
<script>
        const makePink = document.getElementById("make-pink");
        makePink.addEventListener('click', makePinkBg);

        function makePinkBg(){
            document.body.style.backgroundColor = "pink";
        }
</script>

OR

We directly use the function in the parenthesis, and function name isn't necessary
<button id="make-goldenrod">Make goldenrod</button>
<script>
    document.getElementById("make-goldenrod").addEventListener('click', function(){
        document.body.style.backgroundColor = "goldenrod";
    })
</script>


- Changing the inner text of an h3 in 2 ways-


<h3 id="handler-status">Default text</h3>
    <button onclick="onClickHandler()">Handle event by onclick</button>
    <button id="event-listener">Handle event by addEventListener</button>

<script>
    // Method 1
    function onClickHandler(){
        const handlerStatus = document.getElementById("handler-status");
        handlerStatus.innerText = "Handled by onclick with a function";
    }
    // Method 2
    document.getElementById("event-listener").addEventListener('click', function(){
        const handlerStatus = document.getElementById("handler-status");
        handlerStatus.innerText = "Handled by addEventListener";
    })
</script>


- Code to change the p tag's text using the input field text.

Important to note that, when using input fields, we need to use the .value property instead of .innerText, if we want the text inside of an input field.

inputField.value = ""; //Used to empty the input field 


<p id="p-tag">Default text</p>
<input id="input-field" type="text">
<button id="update">Update</button>

<script>
    document.getElementById("update").addEventListener("click", function(){
        const inputField = document.getElementById("input-field");
        const inputFieldValue = inputField.value;
        
        const p = document.getElementById("p-tag");
        p.innerText = inputFieldValue;
        inputField.value = ""; //Used to empty the input field 
    })
</script>

- Code to create a comment box that will keep on creating new paragraphs with the text inside the comment box.

<h3>Please enter your comment</h3>
<div id="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur velit quidem pariatur corporis atque, excepturi maxime voluptatem commodi quia. Consectetur aspernatur debitis obcaecati et pariatur voluptatem, sit iure autem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur velit quidem pariatur corporis atque, excepturi maxime voluptatem commodi quia. Consectetur aspernatur debitis obcaecati et pariatur voluptatem, sit iure autem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur velit quidem pariatur corporis atque, excepturi maxime voluptatem commodi quia. Consectetur aspernatur debitis obcaecati et pariatur voluptatem, sit iure autem.</p>
</div>
<div>
    <textarea name="" id="text-area" cols="50" rows="20"></textarea>
    <button id="post-button">Post</button>
</div>

<script>
    document.getElementById("post-button").addEventListener("click", function(){
        const textArea = document.getElementById("text-area");
        const comment = textArea.value;
        const div = document.getElementById("container");
        const p = document.createElement("p");
        p.innerText = comment;
        div.appendChild(p);
        textArea.value = "";
    })
</script>

- The event mouseenter, basically performs an action when we move the mouse over that element (don't need to click it).

<button id="btn-more">Events</button>
<script>
    document.getElementById("btn-more").addEventListener("mouseenter", function(){
        console.log("Mouse moved");
    })
</script>


- The event mousemove is kinda like mouseenter but here if we move the mouse inside the element, the event is trigerred, whereas in mouseenter it doesn't trigger everytime (i.e trigerred only once)
<button id="btn-more">Events</button>
<script>
    document.getElementById("btn-more").addEventListener("mousemove", function(){
        console.log("Mouse moved");
    })
</script>


- The event focus with the input fields (maybe textarea as well), works by focusing on or clicking on the input field.

<input type="text" id="text-field">
<script>
        document.getElementById("text-field").addEventListener("focus", function(){
            console.log("Event triggered inside the input field");
        })
</script>

- The event blur with the input fields (maybe textarea as well), works by clicking out of the input field.

<input type="text" id="text-field">
<script>
        document.getElementById("text-field").addEventListener("blur", function(){
            console.log("Event triggered outside the input field");
        })
</script>

- Sequence keydown -> keypress -> keyup

- Need to use the event parameter in the function, as well to get the value in the input field, use event.target.value

<input type="text" id="text-field">
<script>
    document.getElementById("text-field").addEventListener("keydown", function(event){
        console.log(event.target.value);
    })
</script>

- Using keyup we get simultaneous event trigger with every keystrokes.


- Code of deleting a h3 element after writing delete in the input field which allows for the delete button to be pressed. Delete button disabled by default.


    <h3 id="secret">My secret info</h3>
    <input type="text" id="secret-input" placeholder="Please type delete">
    <button id="dlt-btn" disabled>Delete</button>
<script>
        document.getElementById("secret-input").addEventListener("keyup", function(event){
            const secretText = event.target.value;
            if(secretText === "delete"){
                document.getElementById("dlt-btn").removeAttribute("disabled");
            }
            else{
                document.getElementById("dlt-btn").setAttribute("disabled", true);
            }
        })
        document.getElementById("dlt-btn").addEventListener("click", function(){
            document.getElementById("secret").style.display = "none";
        })
</script>

- Event bubble basically means that for example, there's a section which contains a ul which contains many li's. So, if there's a event handler for the second li, and there's a seperate event handler for ul, and a seperate handler for the section, then when we click on the second li, all the three events are triggered (starting from the bottom which is the li moving on to ul then the section event). 

This process from bottom to up can be thought of as bubble.

To stop this bubble, we add the event parameter in the anonymous function. Then use event.stopPropagation().

To stop the bubble of even the bottom most event (if there are more than 1 events for the same element), use event.stopImmediatePropagation().

<section id="bubble-container">
    <h3>Exploring bubble event</h3>
    <ul id="bubble-ul">
        <li id="item-1">Lorem, ipsum.</li>
        <li id="item-2">Consectetur, ratione.</li>
        <li id="item-3">Deserunt, accusamus.</li>
        <li id="item-4">Officiis, numquam.</li>
        <li id="item-5">Amet, impedit.</li>
        <li id="item-6">Sed, hic!</li>
    </ul>
</section>

<script>
    document.getElementById("item-2").addEventListener("click",function(event){
        console.log("Item 2 clicked")
        event.stopPropagation();
    })
    document.getElementById("bubble-ul").addEventListener("click", function(){
        console.log("Ul clicked");
    })
    document.getElementById("bubble-container").addEventListener("click", function(){
        console.log("clicked by section")
    })
</script>


- Event delegate means to delegate the event to the parent instead of the child. The logic behind it is event bubble, meaning when we click a child it automatically bubbles up and searches for event handlers on the parents.
Note- event.target is the same as document.getElementById("id_name"). Basically returns the element

When getting the ul element, event.target would mean the li you're clicking on and not the ul itself.

<section>
    <h3>EVENT DELEGATE</h3>
        <ul id="delegate-container">
            <li class="item">Lorem ipsum dolor sit amet.</li>
            <li class="item">Lorem ipsum dolor sit amet.</li>
            <li class="item">Lorem ipsum dolor sit amet.</li>
            <li class="item">Lorem ipsum dolor sit amet.</li>
            <li class="item">Lorem ipsum dolor sit amet.</li>
            <li class="item">Lorem ipsum dolor sit amet.</li>
        </ul>
        <button id="delegate-btn">Add Item</button>
</section>
<script>
        document.getElementById("delegate-container").addEventListener("click", function(event){
            event.target.parentNode.removeChild(event.target);
        })
        document.getElementById("delegate-btn").addEventListener("click", function(){
            const ul = document.getElementById("delegate-container");
            const li = document.createElement("li");
            li.innerText = "Brand new item added";
            ul.appendChild(li);
        })
</script>





























**************************************************
3) Payoo project

- When we try to submit or click a button after inputing something on text field, and click a button nothing happens. In that case we use event.preventDefault() to prevent reloading the browser.

- It's best to have a utilities file, where there will be common shared functions.

- Use "`" when using innerHTML and innerText (because in innertext, using this we can use variables, for eg- `added: ${addMoney} Tk. New Balance: ${newBalance}`).













Milestone 6: Intermediate JS, API

**************************************************
1) API, JSON, data load, dynamic website

- API can be thought of a the waiter in a restaurant. It is the messenger that allows for our request to be delivered to external applications, devices, databse and back to us.

- API is Application Programming Interface. It acts as a messenger that takes our request to the server. Based on the request, the server processes the data (which may include fetching data from a database) and then sends the appropriate response back to us via the API.

- An API is not just the url but the url with associated stuff like the API endpoint.

 

- JSON format is text-based and used for data transmission. It's not specific to JavaScript and needs to be parsed to become usable in JavaScript.
A JavaScript object is a data structure you can work with in your code.

- JSON.stringify() function converts a JS value (like an object or an array) into a JSON string. It returns something similar to an array, but the properties and it's values if it's a string, is put in a double quotation mark.

If we use typeof() with a strinigified value, we get a string. Which means stringify function returns a string.


const shop = {
    owner: "Thawfiq",
    address: {
        street: "Baridhara",
        city: "Dhaka",
        country: "Bangladesh"
    },
    products: ["Laptop", "phones", "accessories"],
    revenue: 500000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)


- JSON.parse() function is used to convert that the JSON string into the value (array or object).

const shopObj = JSON.parse(shopJSON)
console.log(shopObj)

- .json() is similar to json.parse(). The only difference is .json() converts it to a promise which we can then use with the keyword "then".

fetch('https://jsonplaceholder.typicode.com/todos/1') // meaning of this line is, fetch basically retrieves data from this url (or api)
      .then(response => response.json()) //then we convert the response of that url (if there's anything) to a JSON promise.
      .then(json => console.log(json)) //then we print the promise.


- CRUD is the acronym for create (post), read (get), update (patch), and delete. 

- Mainly 4 REST API methods- GET (Receives information about an API resource. In fetch function, the default method is GET), POST (Create an API resource), PUT/PATCH (Update an API resource), DELETE (Deletes an API resource).

- PUT and PATCH is kinda the same thing, they both are used for updating the API resource. PUT creates a new resource if the resource we want to edit doesn't exist, and if it exists, it just updates it. PATCH on the other hand requires the resource to exist for it to be updated.

- HTTP status code 200 means all ok. 404 means not found.

- Use this line of code to catch error (use it with fetch-then statements)

.catch(error => console.log("error occured", error))

- We can use async await instead of regular fetch-then. It basically does the same thing, except when using async await, it waits for the line to be resolved (or run properly), and doesn't move to the next line if the current line isn't resolved properly. 
In case of fetch-then, it doesn't wait, after giving promises.

Below is the code for the same thing using fetch-then and then using async-await.

const loadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log("error occured", error))
}

const loadComments2 = async() => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.error("Data load error")
    }
}

// OR

async function loadComments2(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json()
    console.log(data)
}



**************************************************
2) More about JavaScript (Module 34)

- JS is a higly abstracted programming langauge. Abstracted meaning it hides the details of the implementation (for eg in an atm, we dont know what's going inside the atm, but we can get money out of it)

- JS collects garbage automatically.

- JS is a JIT compiler, as a result it improves performance.

- JS is a multi-paradigm language. (procedural, OOP, and functional programming).

- JS is dynamically-typed langauge, meaning we dont have to explicitly mention the type of variable.

- JS is prototyped-based.

- A V8 engine (Google's open source engine) runs the JS code in the browsers, and the engine is written in C++ (good performance, and can accelerate hardware in C++). NodeJS is also ran by V8.

- In JS, there are global context (GEC or global execution context) and functional context (FEC). Global contexts are basically the variables that are not inside the function, and functional context are the variables inside the function, and FEC is only created when the function is called.

- JS is single-threaded (analogy- ants moving in a straight line, one doesn't overtake someone in front) means something follows the serial or the sequence.

- Synchronous means something follows the order or the sequence, and asynchronous (for eg the setTimeout() function) doesn't follow the sequence.

- setTimeout(function, time in milliseconds to delay after execution of the rest of the code). This function and fetch-then doesn't follow the sequence of the execution (asynchronous).

setTimeout(() => console.log("Lazy Logged"), 4000)


- Promise object(always in one of the three states) is initally in the pending state, then it's either resolved (or fulfilled) or rejected.

- The fetch() method returns a promise that resolves to a response object, and only rejects when a network error is encountered.

- setInterval(function(), time in milliseconds) is the same as setTimeout() function but it repeats itself until we stop it using clearInterval() function. The setInterval() function returns a value which is stored in a variable, and we use that variable with clearInterval() to stop it.

- clearInterval() stops after executing that particular iteration of block of code. Below the code consoles upto the value 7.

let num = 0;
const clockId = setInterval(() => {
    num++;

    if(num > 6){
        clearInterval(clockId)
    }

    console.log(clockId, num);
}, 2000)


- When there's a function (a) that calls another function (b) inside it and that function calls another function inside it, then the 3rd function (c) will be on top of the stack followed by the second function (b) then at the bottom will be the first function (a). The top of the stack gets executed first and then the second, and so on.

- Learn about event-loops and concurrency

- Use try-catch when you think there's a possibility of an error for a specific block of code.

- Using try-catch, if there's an error found, then it catches that error and shows it and then moves to the code below the try-catch. If we dont use try-catch and encounter an error, then the code below the error wont be executed. 

- Finally is used to make sure, that the code inside it gets executed regardless of whether an error is caught or not in the try-catch block.

- throw can be used to throw custom errors, instead of the regular errors like referenceError and other errors.


- Using async await, we need to use try-catch, but using fetch-then, we can use .catch()








**************************************************
3) API recap with Phero tube

- Condtional Rendering- When we need to include conditionals with html elements then, we use ternary operator along with the template literals.

                    ${
                        video.authors[0].verified == true ? `<img src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" class="w-5"/>`
                        : ""
                    }


- 2 ways to open a modal without clicking it.
1)) Set an id to the button and use document.getElementById("id_name").click()

2)) Use document.getElementById("id_name of the dialog").showModal()


































**************************************************
Tricks:

1) ctrl+alt+down to write simulatenously on multiple lines.

2) alt+down to swap it with the line below

3) Shitft+alt+down to copy the existing line below

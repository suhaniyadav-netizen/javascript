// let obj = {
//     name : "Suhani",
//     address : "gurgaon",
//     age:18
// };

// obj.age= 19    // to update the value 
// console.log(obj);

// const para = document.querySelector("p")  // returns only the first matching element 
// para.innerText = "Hello World!"
// para.style.color = "blue"
// console.log(para);

// const para = document.getElementsByClassName("para")  // returns all the matching elements in the form of HTML collection
// para[0].innerText = "Hello World!"
// para[0].style.color = "blue"
// console.log(para);

// const para2 = document.querySelectorAll(".para")  // returns all the matching elements in the form of NodeList
// para2[0].innerText = "Hello World!"
// para2[0].style.color = "blue"
// console.log(para2);

// let arr = [23,54,46,232,564,23]

// arr.forEach((ele)=> console.log(ele))
// console.log(arr);

// const container = document.querySelector(".container")
// container.innerHTML = "<h1>This is container</h1>"
// console.log(container)

// function message()
// {    alert("Button Clicked")
// }
// const btn = document.querySelector("button")
// btn.classList.add("btn")
// btn.addEventListener("click", message)      // click type of event
// btn.removeEventListener("click",message)
// btn.addEventListener("mouseover", message)  // mouseover type of event 
// btn.addEventListener("keyup", message)      // keyup type of event
// btn.addEventListener("keydown", message)   // keydown type of event

// const form = document.querySelector("form")
// form.addEventListener("submit", function(event){
//     event.preventDefault()   // to prevent the default behaviour of form submission
//     console.log("Form Submitted")
// })

// const container=document.querySelector(".container")
// const outer=document.querySelector(".outer")
// const button=document.querySelector("button")

// container.addEventListener("click", ()=>{console.log("Div")} , true)      // capturing phase
// outer.addEventListener("click", ()=>{console.log("Outer Div")} , true) 
// button.addEventListener("click", ()=>{console.log("Button")} , true) 

// container.addEventListener("click", ()=>{ console.log("Div")})     // bubbling phase by default false 
// outer.addEventListener("click", ()=>{ console.log("Outer Div")}) 
// button.addEventListener("click", ()=>{ console.log("Button")}) 




// Call Stack functions
// function first(){
//     second();
// }
// function second(){
//     third();
// }
// function third(){
//     console.trace();
// }  
// first();  


// function infinite (){
//     infinite();
// }
// infinite();  // uncommenting this line will cause a stack overflow error


// let total = 40    // let undefined error is ReferenceError

// function calculateTotal() {
//     let total = 50;
//     console.log(total);
// }
// calculateTotal();



// Synchronous and Acsynchronous JS

// console.log("Start");
// setTimeout(() => {console.log("This is asynchronous message");}, 2000);  
// console.log("End"); 



// SET TIMEOUT AND SET INTERVAL FUNCTIONS 

// setTimeout(()=>{
//     console.log("Line after 5 secs")
// },5000)

// setTimeout(()=>{
//     alert("Line after 2 secs")
// },2000)

// setInterval(()=>{
//     console.log("Set Interval")
// },2000)

// clearInterval()


// TASK : print the numbers from 1-10 and soon it should stop after reaching 10 after interval of 1 sec
// let count = 1;
// let interval = setInterval(() => {
//     console.log(count);
//     if (count === 10) {
//         clearInterval(interval);
//     }
//     count++;
// }, 1000);


// console.log("before Timeout")
// setTimeout(() => {
//     console.log("inside Timeout after 3 sec")
// }, 0);
// console.log("after Timeout")


// DOM MANIPULATION TASK : Add the student names to the list on clicking the button and
// clear the input field after adding the name to the list

const name = document.querySelector("#name")
const btn = document.querySelector(".btn")
const list=document.querySelector(".list")
btn.addEventListener("click",()=>{
    const li=document.createElement("li")
    const del=document.createElement("button")
    del.innerText="Delete"
    li.innerText=name.value;                   // to add the input name as li item to the list
    del.addEventListener("click",()=>{
        list.removeChild(li) })               // to delete the particular li item on clicking delete button
    li.appendChild(del)
    list.appendChild(li)
    name.value=""
})


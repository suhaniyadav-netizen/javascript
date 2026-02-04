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

// const name = document.querySelector("#name")
// const btn = document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener("click",()=>{
//     if(name.value===""){
//         alert("Please enter a name");
//         return;                                   // to avoid adding empty names to the list and not showing del btn
//     }                                  
//     const li=document.createElement("li")
//     const del=document.createElement("button")
//     del.innerText="Delete"
//     li.innerText=name.value;                      // to add the input name as li item to the list
//     del.addEventListener("click",()=>{
//         list.removeChild(li) })                   // to delete the particular li item on clicking delete button
//     li.appendChild(del)
//     list.appendChild(li)                       
//     name.value=""
// })



// CALL STACK FUNCTIONS : LIF0 
// a callback function is one that we give to another function
// Output : Start End This is asynchronous message ( even if it's o secs o/p will be same )

// console.log("Start")                                                     
// setTimeout(() => {console.log("After 6 secs");}, 2000)
// console.log("End")

// function print(num){
//     setTimeout(() => {
//     console.log("Inside Print")
//     num()
//     }, 6000);
// }

// function callback(){
//     console.log("Inside Callback")
// }
// print(callback)



// Callback Hell
// When we have multiple nested callbacks, it can lead to code that is hard to read and maintain, 
// often referred to as "callback hell" or "pyramid of doom".

// console.log("Starting homework...");

// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("Starting dinner...");
    
//     setTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out...");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000); // after dinner
//     }, 1500); // dinner time
// }, 2000); // homework time

// PROMISES FUNCTION 

// const p = new Promise((resolve, reject)=>{
//     //resolve()
//     let done=true
//     setTimeout(()=>{
//         if(done){
//             resolve({name:"Suhani", age:18}) 
//         }else{
//             reject("Work not completed")}
//     },5000)
// })
// p.then((data)=>{
//     console.log(data.name)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Finally block")
// })

// PROMISE CHAINING
function doHomeWork(){
    const p = new Promise((resolve, reject)=>{
        let done=true
        setTimeout(()=>{
            if(done){
                resolve("Homework done!") 
            }else{
                reject("Homework not completed")}
        },2000)
    })
    return p
}




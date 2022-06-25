// Get Element by ID

// const newId = document.getElementById("newdiv")

// // console.log('getelementbyid', newId)

// const newClass = document.getElementsByClassName("newClass")

// Array.from(newClass).map(element => {
//     console.log('getelementsbyclassname', element)
// })


// Query Selector
// const newQuery = document.querySelector("#newdiv")
// const newQuery1 = document.querySelector(".newClass")
// const newQuery2 = document.querySelector("div")
// const newQuery3 = document.querySelector("h1")

// console.log(newQuery)
// console.log(newQuery1)
// console.log(newQuery2)
// console.log(newQuery3)

// Query Selector All
// const newQuery = document.querySelectorAll("#newdiv")
// const newQuery1 = document.querySelectorAll(".newClass")
// const newQuery2 = document.querySelectorAll("div")
// const newQuery3 = document.querySelectorAll("h1")
// const newQuery4 = document.querySelectorAll("*")
// const newQuery5 = document.querySelectorAll("div.oldClass > p")
// const newQuery6 = document.querySelectorAll("h1 + p")
// const newQuery7 = document.querySelectorAll(".oldClass:nth-child(1)")

// console.log(newQuery7)

// const selectOldClass = document.querySelector(".oldClass")
// const getChild = document.querySelector(".oldClass").children
// const getFirstChild = document.querySelector(".oldClass").firstElementChild
// const getLastChild = document.querySelector(".oldClass").lastElementChild
// const getSibling = document.querySelector(".oldClass").nextElementSibling
// const getPreviousSibling = document.querySelector(".oldClass").previousElementSibling
// console.log(getPreviousSibling)

// const div = document.createElement("div")
// div.classList.add("newClass")
// h1 = '<h1>This is a fifth paragraph</h1>'
// p = '<p>This is a fifth paragraph</p>'
// div.innerHTML = h1 + p
// document.body.appendChild(div)

const button = document.querySelector("#btn")
console.log(button)
button.addEventListener("click", () => {
    console.log('button Clicked')
})
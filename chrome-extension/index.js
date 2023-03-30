let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push("www.awesomeleads.com")
    console.log(myLeads)
})
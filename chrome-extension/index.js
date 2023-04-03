const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const deleteBtn = document.querySelector("#delete-btn")

let myLeads = []

const leadsLocal = JSON.parse(localStorage.getItem("myLeads"))

if (leadsLocal){
    myLeads = leadsLocal
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItems += `
        <li>
            <a target="_blank" href="//${leads[i]}">${leads[i]}</a>
        </li>`
    }
    
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})

deleteBtn.addEventListener('dblclick', function(){
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

console.log(tabBtn)

tabBtn.addEventListener('click', function(){
    console.log(tabBtn)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    console(activeTab)
})
let items = []

let countEl = document.getElementById("count")
let containerEl = document.querySelector(".items-container")
let inputEl = document.getElementById("input-el")

countEl.innerText = "Shopping Items: "


function additem() {
     items.push({
        name: inputEl.value,
        bought: false
    })
    countEl.innerText = "Shopping Items: " + items.length
   
    renderitem()
}


function bought(index){
       items[index].bought = !items[index].bought

       renderitem()

}


function renderitem(){
    containerEl.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        containerEl.innerHTML += `<div class="card ${items[i].bought ? 'bought' : ''}"onclick="bought(${i})">
    <p>${items[i].name}</p>
</div>`
    }
}
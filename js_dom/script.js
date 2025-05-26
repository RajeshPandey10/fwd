const h1 = document.querySelector(".day4")


console.log(h1)
const button = document.getElementsByTagName('button')[0]

button.addEventListener('mouseenter',function handleclick(){
    h1.textContent = "you ae going good"
    let newElement = document.createElement('h1')
    newElement.textContent = "learning dom"
    document.body.appendChild(newElement)
})




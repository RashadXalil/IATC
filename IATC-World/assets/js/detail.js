let cards = document.getElementsByClassName("country__card")
let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("lightMode")
let body = document.querySelector("body")
// Mode Change
darkMode.addEventListener("click",function(){
    lightMode.classList.add("active")
    lightMode.style.color="white"
    darkMode.classList.remove("active")
    body.style.backgroundColor="#202C36"
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i])   
      cards[i].style.backgroundColor = "#2B3844" 
      cards[i].style.border = "none"  
      cards[i].style.color = "white"
    }
    maintitle.style.color = "white"
})
lightMode.addEventListener("click",function(){
    lightMode.classList.remove("active")
    lightMode.style.color="black"
    darkMode.classList.add("active")
    body.style.backgroundColor="white"
    maintitle.style.color = "black"
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i])   
      cards[i].style.backgroundColor = "white" 
      cards[i].style.border = "none"  
      cards[i].style.color = "black"
    }
    
})
// Referenciar elementos a manipular del HTML
const $search = document.getElementById("search")
const $chat = document.querySelectorAll(".user-chat")

console.log($chat)


const searchChats = () => {
console.log("buscando...")
    }

$search.addEventListener("input", searchChats)
// Referenciar elementos a manipular del HTML
const $search = document.getElementById("search")
const $chats = document.querySelectorAll(".user-chat")


const searchChats = () => {
    const nameSearch = $search.value
    for(let i = 0; i < $chats.length; i++) {
        const $chat = $chats[i]
        const $titleTag = $chat.querySelector("h3")
        const name = $titleTag.textContent
        console.log(name)

        if(name.includes(nameSearch)){
            $chat.style.display = "flex"
         } else{
            $chat.style.display = "none"
         }

    }
    }

$search.addEventListener("input", searchChats)
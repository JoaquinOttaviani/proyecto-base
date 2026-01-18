// Referenciar elementos a manipular del HTML
const $search = document.getElementById("search")
const $listChat = document.querySelector(".chats ul")


const chatsData = [
    {
        name:"Daniel",
        lastMessage: "vamos a toamr algo",
        Avatar: "./Assets/foto maria lopez.jpg" 
    },
      {
        name:"Marcos",
        lastMessage:"vamos a toamr algo",
        Avatar:"./Assets/foto maria lopez.jpg" 
    },
      {
        name:"Daniela",
        lastMessage:"vamos a toamr algo",
        Avatar:"./Assets/foto maria lopez.jpg" 
    },
]

const renderChats = (list) => {
    $listChat.innerHTML = ""
    list.forEach((chat) => { 
          $listChat.innerHTML += `
        <li class="user-chat">
            <img src="${chat.avatars}" alt="Foto de perfil de maria lopez">
            <div>
               <h3>${chat.name}</h3>
               <p>${chat.lastMessage}</p>
            </div>
                            
        </li>
        `
    })

}

const searchChats = () => {
    const $chats = document.querySelectorAll(".user-chat")
    const nameSearch = $search.value.toLowerCase()
    for(let i = 0; i < $chats.length; i++) {
        const $chat = $chats[i]
        const $titleTag = $chat.querySelector("h3")
        const name = $titleTag.textContent.toLowerCase()

        if(name.includes(nameSearch)){
            $chat.style.display = "flex"
         } else{
            $chat.style.display = "none"
         }

    }
    }

$search.addEventListener("input", searchChats)
renderChats(chatsData)
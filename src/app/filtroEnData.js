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
   
   if(list.length === 0) {
    $listChat.innerHTML = "<li class= 'empty'> No hay chat para mostrar</li>"
   }
   
   
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
    const nameSearch = $search.value.toLowerCase()
    const filteredchat = chatsData.filter((chat) => chat.name.toLowerCase().includes(nameSearch))

    renderChats(filteredchat) 
    }

$search.addEventListener("input", searchChats)
renderChats(chatsData)
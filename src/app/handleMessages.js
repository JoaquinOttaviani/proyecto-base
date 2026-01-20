const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("formMessage")



const messages = [
    {  
        id: 1,
        text: "Hola ¿queres venir por un cafe",
        hour: "14:12",
        me:false
      },
      
      {  
        id: 2,
        text: "Si,perfecto.¿a las 18 te viene bien?",
        hour: "14:13",
        me:true
      },
      {
        id: 3,
        text: "Dale, en la plaza entonces 😜",
        hour: "14:14",
        me:false

      }
]

const renderMessages = (list) => {
  $listMessages.innerHTML = ""

  list.forEach((message) => {
    $listMessages.innerHTML +=`
    <div class="message ${message.me === true ? 'me': ""}">
                    <p class="content">${message.text}</p>
                    <p class="time">${message.hour}</p>
                </div>`
  })
}

const sendMessage = (event) => {
  const now = new Date()
   if(event.key === "Enter") {
    const newmessage = {
      text: $message.value,
      me:true,
      hour: now.getHours() + ":" + now.getMinutes()
    }
    console.log(newmessage)
  } else{
    console.log("precionaste la tecla,",event.key)
  }
}
// $formMessage.addEventListener("submit",sendMessage)
$message.addEventListener("keydown", (e) =>{
  sendMessage(e)
})

renderMessages(messages)
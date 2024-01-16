export default function Chatbotview(props){


return <div className='chatbot-view'>
     <div className="bot-header">
     <i class="fa-solid fa-ellipsis"></i>
     <i class="fa-solid fa-circle-user"></i>
<i onClick={props.cancel} class="fa-solid fa-xmark"></i>
</div>
<div className="main-chat">
<div className="msgs">
Messages
</div>
 

<div className="type-msg">
<input placeholder="Type your message here..." type="text" id='input' className="type-in"/>
<i onClick={props.send} class="fa-solid fa-paper-plane"></i>
</div>

</div>
</div>
}
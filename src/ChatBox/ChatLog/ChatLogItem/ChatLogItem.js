import "./ChatLogItem.css"
const ChatLogItem = () =>{
    return(
        <div>
            <div class="chat-log__item">
            <h3 class="chat-log__author">Felipe <small>14:30</small></h3>
            <div class="chat-log__message">Yo man</div>
        </div>
        <div class="chat-log__item chat-log__item--own">
            <h3 class="chat-log__author">Fabrício <small>14:30</small></h3>
            <div class="chat-log__message">BRB</div>
        </div>
        </div>
    )
}

export default ChatLogItem;
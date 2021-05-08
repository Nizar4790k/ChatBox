import "./ChatLogItem.css"
const ChatLogItem = () =>{
    return(
        <div>
            <div className="chat-log__item">
            <h3 className="chat-log__author">Felipe <small>14:30</small></h3>
            <div className="chat-log__message">Yo man</div>
        </div>
        <div className="chat-log__item chat-log__item--own">
            <h3 className="chat-log__author">Fabrício <small>14:30</small></h3>
            <div className="chat-log__message">BRB</div>
        </div>
        </div>
    )
}

export default ChatLogItem;
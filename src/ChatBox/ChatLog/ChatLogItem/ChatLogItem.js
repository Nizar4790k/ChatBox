import "./ChatLogItem.css"
const ChatLogItem = ({ userName,message}) => {



   const className= userName===message.username ?
   "chat-log__item chat-log__item--own" :"chat-log__item"; // Determinates the message owner

        return (

            <div className={className}>
                <h3 className="chat-log__author">{message.username} <small>{message.date}</small></h3>
                <div className="chat-log__message">{message.text}</div>
            </div>



        )

    } 





export default ChatLogItem;
import "./ChatLog.css"
import ChatLogItem from "./ChatLogItem/ChatLogItem"


const ChatLog = ({ userName, messages }) => {


    function updateScroll() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    updateScroll();


    return (



        <div className="chat-log">

            {
                messages.map((message, i) => {
                    return (
                        <ChatLogItem message={message} userName={userName} key={i} />
                    )
                })
            }



        </div>









    );
}




export default ChatLog;
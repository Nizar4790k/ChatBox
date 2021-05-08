import "./ChatBox.css"
import NavBar from "../NavBar/NavBar"
import ChatLog from "./ChatLog/ChatLog"
import ChatForm from "./ChatForm/ChatForm"

const ChatBox = ({userName}) => {

    

    return (

        <div>
            <NavBar/>
            <div className="main">
                <div className="container ">
                   <ChatLog userName={userName}></ChatLog>
                </div>
               <ChatForm></ChatForm>
            </div>
        </div>

    );
}

export default ChatBox
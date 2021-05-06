import "./ChatBox.css"
import NavBar from "../NavBar/NavBar"
import ChatLog from "./ChatLog/ChatLog"
import ChatForm from "./ChatForm/ChatForm"

const ChatBox = () => {

    return (

        <div>
            <NavBar/>

            <div class="main">
                <div class="container ">
                   <ChatLog></ChatLog>
                </div>
               <ChatForm></ChatForm>
            </div>
        </div>

    );
}

export default ChatBox
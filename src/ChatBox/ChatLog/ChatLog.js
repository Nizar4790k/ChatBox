import "./ChatLog.css"
import ChatLogItem from "./ChatLogItem/ChatLogItem"
import config from '../../config';
import { useEffect, useState } from "react";
const ChatLog = ({userName})=>{

    const server = config[process.env.NODE_ENV].endpoint;
    
    const [messages,setMessages]=useState([]);



    useEffect(()=>{
        fetch(server+"/messages")
    .then(response=>response.json())
    .then(messages=>setMessages(messages))

    },[])
    
    

    return(
        
     <div className="chat-log">
        
        {
            messages.map((message,i)=>{
                return(
                    <ChatLogItem message={message} userName={userName} />
                )
            })
        }
        
      
        

    </div>

    );
}




export default ChatLog;
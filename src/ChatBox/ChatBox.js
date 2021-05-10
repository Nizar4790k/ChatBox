import "./ChatBox.css"
import NavBar from "../NavBar/NavBar"
import ChatLog from "./ChatLog/ChatLog"
import ChatForm from "./ChatForm/ChatForm"
import config from '../config';
import { useEffect, useState } from "react";
import io from "socket.io-client";

const ChatBox = ({userName}) => {

    
    const [messages,setMessages]=useState([]);

    const [currentText, setCurrentText]= useState("")
    
    const server = config[process.env.NODE_ENV].endpoint;
    const socket = io(server);

    
    
    

    useEffect(()=>{
       
       

        
        socket.on('init',(messages)=>{
            let messagesReversed = messages.reverse();
            setMessages(messagesReversed)
        })

        socket.on('push',(newMessages)=>{
            setMessages(newMessages)
            
        });
        


    },[messages])
    

    
    const onTypingMessage = (event)=>{
   
        setCurrentText(event.target.value)
        
    }

    
    const onSubmitMessage = (event)=>{
        event.preventDefault()

        console.log(userName);
        

        if(currentText==="" || currentText===null){
            alert("Please,write a message");
        }

        
        socket.emit('message',{
            username:userName,
            text:currentText,
            date: new Date()
        })
        
        
        
        
        
       console.log(userName,currentText)
    }
    
    

    return (

        <div>
            <NavBar/>
            <div className="main">
                <div className="container ">
                   <ChatLog userName={userName} messages={messages}></ChatLog>
                </div>
               <ChatForm  onTypingMessage={onTypingMessage} onSubmitMessage={onSubmitMessage}></ChatForm>
            </div>
        </div>

    );
}

export default ChatBox
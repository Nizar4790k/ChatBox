import "./ChatForm.css"
const ChatForm = ({onSubmitMessage,onTypingMessage}) => {

    return(
        <div className="chat-form">
        <div className="container ">
            <form className="form-horizontal">
                <div className="row mt-2">
                    <div className="col-sm-10 col-xs-8">
                        <input type="text" onChange={onTypingMessage} className="form-control" id="" placeholder="Message" />
                    </div>
                    
                    <div className="col-sm-2 col-xs-4">
                        <button  onClick={onSubmitMessage} className="btn btn-success btn-block">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default ChatForm;
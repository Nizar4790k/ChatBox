import "./ChatForm.css"
const ChatForm = () => {

    return(
        <div class="chat-form">
        <div class="container ">
            <form class="form-horizontal">
                <div class="row mt-2">
                    <div class="col-sm-10 col-xs-8">
                        <input type="text" class="form-control" id="" placeholder="Message" />
                    </div>
                    
                    <div class="col-sm-2 col-xs-4">
                        <button type="submit" class="btn btn-success btn-block">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default ChatForm;
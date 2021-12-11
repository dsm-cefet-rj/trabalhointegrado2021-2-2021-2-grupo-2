import React from "react";
import Mensagem from "./Mensagem";

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedMessages: []
        }
    }

    componentDidMount(){
        this.getFeed();
    }

    getFeed(){
        fetch('/api/feed')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    feedMessages: data
                })
            })
    }

    render(){
        return(
            <div className="feed-container">
                <div className="feed-messages">
                    {this.state.feedMessages.map(message => {
                        <Mensagem/>  
                    })}
                </div>
            </div>
        )
    }
}

export default Feed;